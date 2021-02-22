// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

pragma experimental ABIEncoderV2;

import { console } from "hardhat/console.sol";
import { Initable } from "./libraries/Initable.sol";
import { SafeMath } from "@openzeppelin/contracts/math/SafeMath.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { BlockBlockable } from './libraries/BlockBlockable.sol';
import { Math } from "@openzeppelin/contracts/math/Math.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import { Constants } from "./libraries/Constants.sol";
import { RedeemableERC20 } from './RedeemableERC20.sol';

import { IBPool } from "./configurable-rights-pool/contracts/IBFactory.sol";
import { RightsManager } from "./configurable-rights-pool/libraries/RightsManager.sol";
import { BalancerConstants } from "./configurable-rights-pool/libraries/BalancerConstants.sol";
import { ConfigurableRightsPool } from "./configurable-rights-pool/contracts/ConfigurableRightsPool.sol";
import { CRPFactory } from "./configurable-rights-pool/contracts/CRPFactory.sol";
import { BFactory } from './configurable-rights-pool/contracts/test/BFactory.sol';

contract RedeemableERC20Pool is Ownable, Initable, BlockBlockable {

    // Everything publicly visible because we have nothing to hide.

    // The rights fo the RedeemableERC20Pool.
    // Balancer wants this to be a dynamic array even though it has fixed length.
    // For that we store it here on the contract.
    bool[] public rights;

    // The addresses in the RedeemableERC20Pool, as [reserve, token].
    // Balancer needs this to be a dynamic array.
    address[] public pool_addresses;

    // The amounts of each token at initialization as [reserve_amount, token_amount].
    // Balancer needs this to be a dynamic array.
    uint256[] public pool_amounts;

    // The starting weights of the pool as [min, ( token / reserve )].
    // Balancer needs this to be a dynamic array.
    uint256[] public start_weights;

    // The target weights of the pool, as the inverse of the start weights.
    // Balancer needs this to be a dynamic array.
    uint256[] public target_weights;

    // The start block is set as the block number that init is called.
    // It defines the 'gradual' weight change curve as the start and end blocks.
    // The end block is the unblock_block copied from the redeemable token during init.
    uint256 public start_block;

    // Let the pool fee be public.
    uint256 public pool_fee;

    // RedeemableERC20 token.
    // The reserve token is derived from this.
    RedeemableERC20 public token;

    // The initial ratio of book-value-token:reserve
    // i.e. the book value of the token is its redeem value and is already a ratio
    // This should be between 2-5+x and MUST be at least one.
    // For example, if the token is minted at a 3:1 ratio of e.g. DAI
    // 1000 DAI = 3000 token in circulation
    // Setting this ratio at 2 would seed the pool with 500 DAI NOT 1500 DAI
    // i.e. this ratio represents the ratio of the auction pool vs. the redeem pool.
    // If the market decides to arbitrage this auction down to 1:1 (i.e. there is zero IP premium assigned to the token)
    // then the reserve in the balancer pool will equal the redeem pool.
    // The owner will then withdraw the balancer pool and users will exit the redeem pool.
    // The overall effect will be a net zero in that case.
    // If the ratio drops below 1 there is a guaranteed arbitrage for anyone to buy the token knowing they can redeem
    // them at a profit later.
    // We want the ratio to be much higher than 1 to represent the additional benefits (not profit, not a security!) of holding
    // the TKN during the blocked period, such as access to events, experiences, NFTs, etc.
    uint256 public book_ratio;

    CRPFactory public crp_factory;
    BFactory public balancer_factory;
    ConfigurableRightsPool public crp;
    IBPool public pool;

    constructor (
        CRPFactory _crp_factory,
        BFactory _balancer_factory,
        RedeemableERC20 _token,
        uint256 _book_ratio
    ) public {
        crp_factory = _crp_factory;
        balancer_factory = _balancer_factory;
        token = _token;
        book_ratio = _book_ratio;

        // These functions all mutate the dynamic arrays that Balancer expects.
        // Gross.
        construct_rights();
        construct_pool_addresses();
        construct_pool_amounts();
        construct_pool_weights();
        construct_pool_fee();
        construct_crp();
    }

    // Construct the rights that will be used by the CRP.
    // These are hardcoded, we do NOT want any flexibility in our permissions.
    function construct_rights() private onlyNotInit onlyOwner onlyBlocked {
        console.log("RedeemableERC20Pool: construct_rights");
        // Pause
        rights.push(false);

        // Change fee
        rights.push(false);

        // Change weights (needed to set gradual weight schedule)
        rights.push(true);

        // Add/remove tokens (limited by this contract to the owner after unblock)
        rights.push(true);

        // Whitelist LPs (@todo limited by Trust?)
        rights.push(false);

        // Change cap
        rights.push(false);

        //  RightsManager.constructRights(rights);
    }

    function construct_pool_addresses () private onlyNotInit onlyOwner onlyBlocked {
        console.log("RedeemableERC20Pool: construct_pool_addresses");

        IERC20 _reserve = token.reserve();
        pool_addresses.push(address(_reserve));
        pool_addresses.push(address(token));
    }

    function construct_pool_amounts () private onlyNotInit onlyOwner onlyBlocked {
        // The reserve amount is calculated from the book ratio and the redeemable token pool.
        uint256 _reserve_amount = SafeMath.div(
            SafeMath.mul(token.reserve_init(), Constants.ONE),
            book_ratio
        );
        console.log("RedeemableERC20Pool: construct_pool_amounts: book_ratio: %s", book_ratio);
        console.log("RedeemableERC20Pool: construct_pool_amounts: reserve_amount: %s", _reserve_amount);
        pool_amounts.push(_reserve_amount);

        // The token amount is always the total supply.
        // It is required that the pool initializes with full ownership of all Tokens in existence.
        uint256 _token_supply = token.totalSupply();
        // require(IERC20(_token).balanceOf(address(this)) == _token_supply, "ERR_TOKEN_BALANCE");
        console.log("RedeemableERC20Pool: construct_pool_amounts: token: %s", _token_supply);
        pool_amounts.push(_token_supply);
    }

    function construct_pool_weights () private onlyNotInit onlyOwner onlyBlocked {
        // This function requires that init_pool_amounts be run prior.
        require(pool_amounts[0] > 0, "ERR_RESERVE_AMOUNT");
        require(pool_amounts[1] > 0, "ERR_TOKEN_AMOUNT");

        // The reserve weight is as small as we can make it.
        // The goal is to distribute tokens.
        console.log("RedeemableERC20Pool: construct_pool_weights: reserve_weight: %s", BalancerConstants.MIN_WEIGHT);
        start_weights.push(BalancerConstants.MIN_WEIGHT);

        // The token weight is the ratio of pooled reserve to token supply.
        // Balancer hard caps the combined weight at 50.
        // If reserve weight + token weight > 50 the weights cannot rebalance.
        // Even if the weight would only go above 50 during a rebalance the operation will fail.
        uint256 _desired_token_weight = SafeMath.div(
            SafeMath.mul(
                book_ratio,
                token.mint_ratio()
            ),
            Constants.ONE
        );
        // Clamp the weight within the allowable range.
        uint256 _headroom = BalancerConstants.BONE;
        uint256 _achievable_token_weight = Math.max(
            BalancerConstants.MIN_WEIGHT,
            Math.min(
                SafeMath.sub(BalancerConstants.MAX_WEIGHT, _headroom),
                _desired_token_weight
            )
        );
        console.log("RedeemableERC20Pool: construct_pool_weights: token_weight: %s", _desired_token_weight, _achievable_token_weight);
        start_weights.push(_achievable_token_weight);

        // Target weights are the theoretical endpoint of updating gradually.
        // We simply flip the starting ratios because why not?
        target_weights.push(start_weights[1]);
        target_weights.push(start_weights[0]);
        require(target_weights[0] == start_weights[1], "ERR_TARGET_WEIGHT_0");
        require(target_weights[1] == start_weights[0], "ERR_TARGET_WEIGHT_1");
    }

    // We are not here to make money off fees.
    // Set to the minimum balancer allows.
    function construct_pool_fee () private onlyNotInit onlyOwner onlyBlocked {
        console.log("RedeemableERC20Pool: construct_pool_fee: %s", BalancerConstants.MIN_FEE);
        pool_fee = BalancerConstants.MIN_FEE;
        require(pool_fee == BalancerConstants.MIN_FEE, 'ERR_POOL_FEE');
    }

    function construct_crp () private onlyNotInit onlyOwner onlyBlocked {
        // CRPFactory.
        crp = crp_factory.newCrp(
            address(balancer_factory),
            ConfigurableRightsPool.PoolParams(
                "R20P",
                "RedeemableERC20Pool",
                pool_addresses,
                pool_amounts,
                start_weights,
                pool_fee
            ),
            RightsManager.constructRights(rights)
        );
    }

    function init() public withInit onlyOwner onlyBlocked {
        // ensure allowances are set exactly.
        // allowances should NEVER be different to the pool amounts.
        console.log(
            "RedeemableERC20Pool: init: allowances: %s %s %s",
            pool_amounts[0],
            token.reserve().allowance(this.owner(), address(this)),
            token.allowance(this.owner(), address(this))
        );
        require(token.reserve().allowance(this.owner(), address(this)) == pool_amounts[0], 'ERR_RESERVE_ALLOWANCE');
        require(token.allowance(this.owner(), address(this)) == pool_amounts[1], 'ERR_TOKEN_ALLOWANCE');

        // take allocated reserves.
        console.log("RedeemableERC20Pool: init: take reserves");
        bool reserve_xfer = token.reserve().transferFrom(this.owner(), address(this), pool_amounts[0]);
        // we do NOT require an exact balance of the reserve after xfer as someone other than the owner could grief the contract with reserve dust.
        require(reserve_xfer, 'ERR_RESERVE_TRANSFER');
        require(token.reserve().balanceOf(address(this)) >= pool_amounts[0], 'ERR_RESERVE_TRANSFER');

        // take all token.
        console.log("RedeemableERC20Pool: init: take token");
        bool token_xfer = token.transferFrom(this.owner(), address(this), pool_amounts[1]);
        require(token_xfer, 'ERR_TOKEN_TRANSFER');
        require(token.balanceOf(address(this)) == token.totalSupply(), 'ERR_TOKEN_TRANSFER');

        console.log(
            "RedeemableERC20Pool: init: balances: %s %s",
            token.reserve().balanceOf(address(this)),
            token.balanceOf(address(this))
        );

        token.reserve().approve(address(crp), pool_amounts[0]);
        token.approve(address(crp), pool_amounts[1]);

        crp.createPool(
            // No need for many pool tokens.
            BalancerConstants.MIN_POOL_SUPPLY,
            // No minimum weight change period.
            0,
            // No time lock (we handle our own locks in the trust).
            0
        );

        // Kick off the auction!
        start_block = block.number;
        crp.updateWeightsGradually(
            // Flip the weights
            target_weights,
            // From now
            start_block,
            // Until unlock
            token.unblock_block()
        );

        // Mirror the token unblock block.
        BlockBlockable.setUnblockBlock(token.unblock_block());
    }

    // function exit() public onlyInit onlyOwner onlyUnblocked {
    //     crp.bPool().transfer(this.owner(), crp.bPool().totalSupply());
    // }

}