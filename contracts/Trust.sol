// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

// Needed to handle structures externally
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol" as ERC20;
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/math/Math.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { SafeERC20 } from "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";

import { CRPFactory } from "./configurable-rights-pool/contracts/CRPFactory.sol";
import { BFactory } from "./configurable-rights-pool/contracts/test/BFactory.sol";

import { Constants } from "./libraries/Constants.sol";
import { Initable } from "./libraries/Initable.sol";
import { RedeemableERC20 } from "./RedeemableERC20.sol";
import { RedeemableERC20Pool } from "./RedeemableERC20Pool.sol";
import { IPrestige } from "./tv-prestige/contracts/IPrestige.sol";

import { Config as RedeemableERC20PoolConfig } from "./RedeemableERC20Pool.sol";
import { RedeemableERC20Factory, Config as RedeemableERC20FactoryConfig } from "./RedeemableERC20Factory.sol";
import { RedeemableERC20PoolFactory } from "./RedeemableERC20PoolFactory.sol";

struct Config {
    RedeemableERC20Factory redeemableERC20Factory;
    RedeemableERC20PoolFactory redeemableERC20PoolFactory;
    address creator;
    // Minimum amount to raise for the creator from the distribution period.
    // The raise is only considered successful if enough NEW funds enter the system to cover BOTH the _redeemInit + _minRaise.
    // If the raise is successful the _redeemInit is sent to token holders, otherwise the failed raise is refunded instead.
    uint256 minCreatorRaise;
    address seeder;
    // The amount that seeders receive in addition to what they contribute IFF the raise is successful.
    uint256 seederFee;
    uint256 raiseDuration;
    // The amount of reserve to back the redemption initially after trading finishes.
    // Anyone can send more of the reserve to the redemption token at any time to increase redemption value.
    uint256 redeemInit;
}

struct PoolConfig {
    CRPFactory crpFactory;
    BFactory balancerFactory;
    IERC20 reserve;
    uint256 reserveInit;
    uint256 initialValuation;
    uint256 finalValuation;
}

// Examples
// 2 book ratio: 20:1 95%
// | P: 50 000 | T: 100 000 |
// | V: 1 000 000 | T: 100 000 |
//
// Pool:
// - works in terms of weights and derives values based on amounts relative to the weights
// - if we have T tokens in circulation and we put P$ in the pool and say it is 1:20 ratio
//   this => T tokens = 20x P$ from the pool's perspective
//   => $50 000 in the pool at 20x weighting => $ 1 000 000 valuation for the tokens
//
// Redemption:
// - pure book value
// - a specific block in the future at which point T tokens = R$ pro rata
// - completely linear and fixed
// - if we put R$ in at the start which is $ 100 000 this values all tokens T at $ 100 000
//
// So if the ratio of ( $P x weight ) of $P to $R is > 1 then we're adding speculative value
//
// So when we _create_ the trust _we_ put in ( $P + $R ) and we define weights + book ratio
//
// example 2:
//
// $ 150 000 total ( $P + $R )
//
// T = 100 000
//
// expected max valuation = $3 per token = $300 000
// book value ( $R ) = $ 100 000
// pool $P = $ 50 000
// 100 000 T : $P => $300 000
// 50 000 : 300 000 = weight of $P
// therefore the weight should be 6 for $P at the start
// T which is the mint ratio = 1 because we minted 100 000 T for 100 000 $R
//
// Start:
// Pool: 100 000 T : $ 50 000 - weight of 6:1 T - which is spot price $3 per T
// Book: 0 T: $100 000 - therefore 1 T = $1 after unlock
//
// End at a preset block:
// Pool: 20 000 T : $ 200 000 - weight 1:10 T - PT in the trust
// Exit => PT is all given to the initializer/owner of the trust
// $200 000 + 20 000 T which can be immediately redeemed for $1 each => after redemption lump sum $220 000
//
// | TV hype to create premium  | TV cashes out premium and delivers goodies |
// | Phase trading distribution | Phase goodies + stablecoin proxy           |
contract Trust {

    using SafeMath for uint256;
    using Math for uint256;

    Config public config;

    using SafeERC20 for IERC20;
    using SafeERC20 for RedeemableERC20;
    RedeemableERC20 public token;
    RedeemableERC20Pool public pool;

    constructor (
        Config memory _config,
        RedeemableERC20FactoryConfig memory _redeemableERC20FactoryConfig,
        PoolConfig memory _poolConfig
    ) public {
        require(_redeemableERC20FactoryConfig.totalSupply >= _poolConfig.reserveInit, "MIN_TOKEN_SUPPLY");
        require(_poolConfig.reserveInit > 0, "MIN_RESERVE");
        require(_poolConfig.initialValuation >= _poolConfig.finalValuation, "MIN_INITIAL_VALUTION");
        require(_poolConfig.finalValuation >= _config.redeemInit.add(_config.minCreatorRaise).add(_config.seederFee).add(_poolConfig.reserveInit), "MIN_FINAL_VALUATION");

        RedeemableERC20 _token = _config.redeemableERC20Factory.newContract(_redeemableERC20FactoryConfig);
        RedeemableERC20Pool _pool = _config.redeemableERC20PoolFactory.newContract(RedeemableERC20PoolConfig(
            _poolConfig.crpFactory,
            _poolConfig.balancerFactory,
            _poolConfig.reserve,
            _token,
            _poolConfig.reserveInit,
            _config.redeemInit,
            _poolConfig.initialValuation,
            _poolConfig.finalValuation
        ));

        // Need to make a few addresses unfreezable to facilitate exits.
        _token.ownerAddUnfreezable(address(_pool.crp()));
        _token.ownerAddUnfreezable(address(_poolConfig.balancerFactory));
        _token.ownerAddUnfreezable(address(_pool));

        // The pool reserve must always be one of the redeemable assets.
        _token.ownerAddRedeemable(_poolConfig.reserve);

        // Send all tokens to the pool immediately.
        // When the seed funds are raised `startRaise` will build a pool from these.
        _token.safeTransfer(address(_pool), _redeemableERC20FactoryConfig.totalSupply);

        config = _config;
        token = _token;
        pool = _pool;
    }

    function creatorAddRedeemable(IERC20 _redeemable) external {
        require(msg.sender == config.creator, "NOT_CREATOR");
        token.ownerAddRedeemable(_redeemable);
    }

    // This function can be called by anyone!
    // Fund the Trust.
    // This is where the trust takes ownership of assets to begin the distribution phase.
    // The only requirement is that the seeder can fund the pool.
    // Seeders should be careful NOT to approve the trust until/unless they are committed to funding it.
    // The pool is `init` after funding, which is onlyOwner, onlyInit, onlyBlocked.
    function startRaise() external {
        uint256 _unblockBlock = block.number + config.raiseDuration;
        pool.ownerSetUnblockBlock(_unblockBlock);
        pool.init(config.seeder);
    }

    // This function can be called by anyone!
    // It defers to the pool exit function (which is owned by the trust and has onlyOwner, onlyInit, onlyUnblocked).
    // If the minimum raise is reached then the trust owner receives the raise.
    // If the minimum raise is NOT reached then the reserve is refunded to the owner and sale proceeds rolled to token holders.
    function endRaise() external {
        token.ownerSetUnblockBlock(block.number);
        pool.exit();

        IERC20 _reserve = pool.reserve();
        uint256 _seedInit = pool.reserveInit();
        uint256 _tokenPay = config.redeemInit;

        uint256 _finalBalance = _reserve.balanceOf(address(this));
        uint256 _successBalance = _seedInit.add(config.seederFee).add(_tokenPay).add(config.minCreatorRaise);

        // Base payments for each fundraiser.
        uint256 _seederPay = 0;
        uint256 _creatorPay = 0;

        // Set aside the redemption and seed fee if we reached the minimum.
        if (_finalBalance >= _successBalance) {
            // The seeder gets the reserve + seed fee
            _seederPay = _seedInit.add(config.seederFee);

            // The creators get new funds raised minus redeem and seed fees.
            // Can subtract without underflow due to the inequality check for this code block.
            // Proof (assuming all positive integers):
            // final balance >= success balance
            // AND seed pay = seed init + seed fee
            // AND success balance = seed init + seed fee + token pay + min raise
            // SO success balance = seed pay + token pay + min raise
            // SO success balance >= seed pay + token pay
            // SO success balance - (seed pay + token pay) >= 0
            // SO final balance - (seed pay + token pay) >= 0
            //
            // Implied is the remainder of _finalBalance as redeemInit
            // This will be transferred to the token holders below.
            _creatorPay = _finalBalance.sub(_seederPay.add(_tokenPay));
        }
        else {
            // If we did not reach the minimum the creator gets nothing.
            // Refund what we can to other participants.
            // Due to pool dust it is possible the final balance is less than the reserve init.
            // If we don't take the min then we will attempt to transfer more than exists and brick the contract.
            //
            // Implied if _finalBalance > reserve_init is the remainder goes to token holders below.
            _seederPay = _seedInit.min(_finalBalance);
        }

        if (_creatorPay > 0) {
            _reserve.safeTransfer(
                config.creator,
                _creatorPay
            );
        }

        _reserve.safeTransfer(
            config.seeder,
            _seederPay
        );

        // Send everything left to the token holders.
        // Implicitly the remainder of the _finalBalance is:
        // - the redeem init if successful
        // - whatever users deposited in the AMM if unsuccessful
        uint256 _remainder = _reserve.balanceOf(address(this));
        if (_remainder > 0) {
            _reserve.safeTransfer(
                address(token),
                _remainder
            );
        }

        assert(_reserve.balanceOf(address(this)) == 0);
    }
}