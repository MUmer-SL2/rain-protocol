// SPDX-License-Identifier: CAL
pragma solidity =0.8.10;

import {ERC20Config} from "../erc20/ERC20Config.sol";
import "../erc20/ERC20Redeem.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
// solhint-disable-next-line max-line-length
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import {TierByConstruction} from "../tier/TierByConstruction.sol";
import {ITier} from "../tier/ITier.sol";

import {Phased} from "../phased/Phased.sol";

import {ERC20Pull, ERC20PullConfig} from "../erc20/ERC20Pull.sol";

/// Everything required by the `RedeemableERC20` constructor.
struct RedeemableERC20Config {
    // Reserve token that the associated `Trust` or equivalent raise contract
    // will be forwarding to the `RedeemableERC20` contract.
    address reserve;
    // ERC20 config forwarded to the ERC20 constructor.
    ERC20Config erc20Config;
    // Tier contract to compare statuses against on transfer.
    ITier tier;
    // Minimum tier required for transfers in `Phase.ZERO`. Can be `0`.
    uint256 minimumTier;
}

/// @title RedeemableERC20
/// @notice This is the ERC20 token that is minted and distributed.
///
/// During `Phase.ZERO` the token can be traded and so compatible with the
/// Balancer pool mechanics.
///
/// During `Phase.ONE` the token is frozen and no longer able to be traded on
/// any AMM or transferred directly.
///
/// The token can be redeemed during `Phase.ONE` which burns the token in
/// exchange for pro-rata erc20 tokens held by the `RedeemableERC20` contract
/// itself.
///
/// The token balances can be used indirectly for other claims, promotions and
/// events as a proof of participation in the original distribution by token
/// holders.
///
/// The token can optionally be restricted by the `ITier` contract to only
/// allow receipients with a specified membership status.
///
/// @dev `RedeemableERC20` is an ERC20 with 2 phases.
///
/// `Phase.ZERO` is the distribution phase where the token can be freely
/// transfered but not redeemed.
/// `Phase.ONE` is the redemption phase where the token can be redeemed but no
/// longer transferred.
///
/// Redeeming some amount of `RedeemableERC20` burns the token in exchange for
/// some other tokens held by the contract. For example, if the
/// `RedeemableERC20` token contract holds 100 000 USDC then a holder of the
/// redeemable token can burn some of their tokens to receive a % of that USDC.
/// If they redeemed (burned) an amount equal to 10% of the redeemable token
/// supply then they would receive 10 000 USDC.
///
/// To make the treasury assets discoverable anyone can call `newTreasuryAsset`
/// to emit an event containing the treasury asset address. As malicious and/or
/// spam users can emit many treasury events there is a need for sensible
/// indexing and filtering of asset events to only trusted users. This contract
/// is agnostic to how that trust relationship is defined for each user.
///
/// Users must specify all the treasury assets they wish to redeem to the
/// `redeem` function. After `redeem` is called the redeemed tokens are burned
/// so all treasury assets must be specified and claimed in a batch atomically.
/// Note: The same amount of `RedeemableERC20` is burned, regardless of which
/// treasury assets were specified. Specifying fewer assets will NOT increase
/// the proportion of each that is returned.
///
/// `RedeemableERC20` has several owner administrative functions:
/// - Owner can add senders and receivers that can send/receive tokens even
///   during `Phase.ONE`
/// - Owner can end `Phase.ONE` during `Phase.ZERO` by specifying the address
///   of a distributor, which will have any undistributed tokens burned.
/// The owner should be a `Trust` not an EOA.
///
/// The redeem functions MUST be used to redeem and burn RedeemableERC20s
/// (NOT regular transfers).
///
/// `redeem` will simply revert if called outside `Phase.ONE`.
/// A `Redeem` event is emitted on every redemption (per treasury asset) as
/// `(redeemer, asset, redeemAmount)`.
contract RedeemableERC20 is
    Initializable,
    Phased,
    TierByConstruction,
    ERC20Redeem,
    ERC20Pull
{
    using SafeERC20 for IERC20;

    /// Phase constants.
    /// Contract is not yet initialized.
    uint256 private constant PHASE_UNINITIALIZED = 0;
    /// Token is in the distribution phase and can be transferred freely
    /// subject to tier requirements.
    uint256 private constant PHASE_DISTRIBUTING = 1;
    /// Token is frozen and cannot be transferred unless the sender/receiver is
    /// authorized as a sender/receiver.
    uint256 private constant PHASE_FROZEN = 2;

    /// Bits for a receiver.
    uint256 private constant RECEIVER = 0x1;
    /// Bits for a sender.
    uint256 private constant SENDER = 0x2;

    /// To be clear, this admin is NOT intended to be an EOA.
    /// This contract is designed assuming the admin is a `Trust` or equivalent
    /// contract that itself does NOT have an admin key.
    address private admin;
    /// Tracks addresses that can always send/receive regardless of phase.
    /// sender/receiver => access bits
    mapping(address => uint256) private access;

    /// Results of initializing.
    event Initialize(
        /// `msg.sender` of initialize.
        address sender,
        /// contract admin.
        address admin,
        /// Minimum tier required to receive the token.
        uint256 minimumTier
    );

    /// A new token sender has been added.
    event Sender(
        /// `msg.sender` that approved the token sender.
        address sender,
        /// address that is now a token sender.
        address grantedSender
    );
    /// A new token receiver has been added.
    event Receiver(
        /// `msg.sender` that approved the token receiver.
        address sender,
        /// address that is now a token receiver.
        address grantedReceiver
    );

    /// RedeemableERC20 uses the standard/default 18 ERC20 decimals.
    /// The minimum supply enforced by the constructor is "one" token which is
    /// `10 ** 18`.
    /// The minimum supply does not prevent subsequent redemption/burning.
    uint256 private constant MINIMUM_INITIAL_SUPPLY = 10**18;

    /// The minimum status that a user must hold to receive transfers during
    /// `Phase.ZERO`.
    /// The tier contract passed to `TierByConstruction` determines if
    /// the status is held during `_beforeTokenTransfer`.
    /// Public so external contracts can interface with the required tier.
    uint256 public minimumTier;

    /// Mint the full ERC20 token supply and configure basic transfer
    /// restrictions. Initializes all base contracts.
    /// @param config_ Initialized configuration.
    function initialize(RedeemableERC20Config memory config_)
        external
        initializer
    {
        initializePhased();

        initializeTierByConstruction(config_.tier);
        __ERC20_init(config_.erc20Config.name, config_.erc20Config.symbol);
        initializeERC20Pull(
            ERC20PullConfig(config_.erc20Config.distributor, config_.reserve)
        );

        require(
            config_.erc20Config.initialSupply >= MINIMUM_INITIAL_SUPPLY,
            "MINIMUM_INITIAL_SUPPLY"
        );
        minimumTier = config_.minimumTier;

        // Minting and burning must never fail.
        access[address(0)] = SENDER;

        // Admin receives full supply.
        access[config_.erc20Config.distributor] = RECEIVER;

        admin = config_.erc20Config.distributor;

        // Need to mint after assigning access.
        _mint(
            config_.erc20Config.distributor,
            config_.erc20Config.initialSupply
        );

        // The reserve must always be one of the treasury assets.
        newTreasuryAsset(config_.reserve);

        emit Initialize(
            msg.sender,
            config_.erc20Config.distributor,
            config_.minimumTier
        );

        // Smoke test on whatever is on the other side of `config_.tier`.
        // It is a common mistake to pass in a contract without the `ITier`
        // interface and brick transfers. We want to discover that ASAP.
        // E.g. `Verify` instead of `VerifyTier`.
        // Slither does not like this unused return, but we're not looking for
        // any specific return value, just trying to avoid something that
        // blatantly errors out.
        // slither-disable-next-line unused-return
        ITier(config_.tier).report(msg.sender);

        schedulePhase(PHASE_DISTRIBUTING, block.number);
    }

    /// Require a function is only admin callable.
    modifier onlyAdmin() {
        require(msg.sender == admin, "ONLY_ADMIN");
        _;
    }

    /// Check that an address is a receiver.
    /// A sender is also a receiver.
    /// @param maybeReceiver_ account to check.
    /// @return True if account is a receiver.
    function isReceiver(address maybeReceiver_) public view returns (bool) {
        return access[maybeReceiver_] & RECEIVER > 0;
    }

    /// Admin can grant an address receiver rights.
    /// @param newReceiver_ The account to grand receiver.
    function grantReceiver(address newReceiver_) external onlyAdmin {
        // Using `|` preserves sender if previously granted.
        access[newReceiver_] |= RECEIVER;
        emit Receiver(msg.sender, newReceiver_);
    }

    /// Check that an address is a sender.
    /// @param maybeSender_ account to check.
    /// @return True if account is a sender.
    function isSender(address maybeSender_) public view returns (bool) {
        return access[maybeSender_] & SENDER > 0;
    }

    /// Admin can grant an addres sender rights.
    /// @param newSender_ The account to grant sender.
    function grantSender(address newSender_) external onlyAdmin {
        // Uinsg `|` preserves receiver if previously granted.
        access[newSender_] |= SENDER;
        emit Sender(msg.sender, newSender_);
    }

    /// The admin can burn all tokens of a single address to end `Phase.ZERO`.
    /// The intent is that during `Phase.ZERO` there is some contract
    /// responsible for distributing the tokens.
    /// The admin specifies the distributor to end `Phase.ZERO` and all
    /// undistributed tokens are burned.
    /// The distributor is NOT set during the constructor because it likely
    /// doesn't exist at that point. For example, Balancer needs the paired
    /// erc20 tokens to exist before the trading pool can be built.
    /// @param distributors_ The distributor according to the admin.
    function burnDistributors(address[] memory distributors_)
        external
        onlyPhase(PHASE_DISTRIBUTING)
        onlyAdmin
    {
        schedulePhase(PHASE_FROZEN, block.number);
        for (uint256 i_ = 0; i_ < distributors_.length; i_++) {
            address distributor_ = distributors_[i_];
            uint256 distributorBalance_ = balanceOf(distributor_);
            if (distributorBalance_ > 0) {
                _burn(distributor_, balanceOf(distributor_));
            }
        }
    }

    /// Wraps `_redeem` from `ERC20Redeem`.
    /// Very thin wrapper so be careful when calling!
    function redeem(IERC20[] calldata treasuryAssets_, uint256 redeemAmount_)
        external
        onlyPhase(PHASE_FROZEN)
    {
        _redeem(treasuryAssets_, redeemAmount_);
    }

    /// Apply phase sensitive transfer restrictions.
    /// During `Phase.ZERO` only tier requirements apply.
    /// During `Phase.ONE` all transfers except burns are prevented.
    /// If a transfer involves either a sender or receiver with the SENDER
    /// or RECEIVER role, respectively, it will bypass these restrictions.
    /// @inheritdoc ERC20Upgradeable
    function _beforeTokenTransfer(
        address sender_,
        address receiver_,
        uint256 amount_
    ) internal virtual override {
        super._beforeTokenTransfer(sender_, receiver_, amount_);

        // Sending tokens to this contract (e.g. instead of redeeming) is
        // always an error.
        require(receiver_ != address(this), "TOKEN_SEND_SELF");

        // Some contracts may attempt a preflight (e.g. Balancer) of a 0 amount
        // transfer.
        // We don't want to accidentally cause external errors due to zero
        // value transfers.
        if (
            amount_ > 0 &&
            // The sender and receiver lists bypass all access restrictions.
            !(isSender(sender_) || isReceiver(receiver_))
        ) {
            // During `Phase.ZERO` transfers are only restricted by the
            // tier of the recipient.
            uint256 currentPhase_ = currentPhase();
            if (currentPhase_ == PHASE_DISTRIBUTING) {
                require(isTier(receiver_, minimumTier), "MIN_TIER");
            }
            // During `Phase.ONE` only token burns are allowed.
            else if (currentPhase_ == PHASE_FROZEN) {
                require(receiver_ == address(0), "FROZEN");
            }
            // There are no other phases.
            else {
                revert("UNKNOWN_PHASE");
            }
        }
    }
}
