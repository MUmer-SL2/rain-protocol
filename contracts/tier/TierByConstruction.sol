// SPDX-License-Identifier: CAL

pragma solidity =0.8.10;

import {TierReport} from "./libraries/TierReport.sol";
import {ITier} from "./ITier.sol";

/// @title TierByConstruction
/// @notice `TierByConstruction` is a base contract for other contracts to
/// inherit from.
///
/// It exposes `isTier` and the corresponding modifier `onlyTier`.
///
/// This ensures that the address has held at least the given tier since the
/// contract was constructed.
///
/// We check against the construction time of the contract rather than the
/// current block to avoid various exploits.
///
/// Users should not be able to gain a tier for a single block, claim benefits
/// then remove the tier within the same block.
///
/// The construction block provides a simple and generic reference point that
/// is difficult to manipulate/predict.
///
/// Note that `ReadOnlyTier` contracts must carefully consider use with
/// `TierByConstruction` as they tend to return `0x00000000` for any/all tiers
/// held. There needs to be additional safeguards to mitigate "flash tier"
/// attacks.
///
/// Note that an account COULD be `TierByConstruction` then lower/remove a
/// tier, then no longer be eligible when they regain the tier. Only
/// _continuously held_ tiers are valid against the construction block check as
/// this is native behaviour of the `report` function in `ITier`.
///
/// Technically the `ITier` could re-enter the `TierByConstruction` so the
/// `onlyTier` modifier runs AFTER the modified function.
///
/// @dev Enforces tiers held by contract contruction block.
/// The construction block is compared against the blocks returned by `report`.
/// The `ITier` contract is paramaterised and set during construction.
contract TierByConstruction {
    /// Result of initialize.
    event TierByConstructionInitialize(
        /// `msg.sender` that initialized the contract.
        address sender,
        /// Tier contract to reference.
        address tierContract,
        /// Construction block to reference.
        uint256 constructionBlockNumber
    );
    /// Tier contract to reference.
    ITier internal tierContract;
    /// Construction block to reference.
    uint256 internal constructionBlockNumber;

    /// Initialize the tier contract and block number.
    /// @param tierContract_ The tier contract to check against construction.
    function initializeTierByConstruction(ITier tierContract_) internal {
        // Tier contract must be configured. Set to a contract that returns `0`
        // for `report` to disable tier checks.
        require(address(tierContract_) != address(0), "ZERO_TIER_ADDRESS");
        // Reinitialization is a bug.
        assert(address(tierContract) == address(0));
        tierContract = tierContract_;
        constructionBlockNumber = block.number;
        emit TierByConstructionInitialize(
            msg.sender,
            address(tierContract_),
            block.number
        );
    }

    /// Check if an account has held AT LEAST the given tier according to
    /// `tierContract` since construction.
    /// The account MUST have held the tier continuously from construction
    /// until the "current" state according to `report`.
    /// Note that `report` PROBABLY is current as at the block this function is
    /// called but MAYBE NOT.
    /// The `ITier` contract is free to manage reports however makes sense.
    ///
    /// @param account_ Account to check status of.
    /// @param minimumTier_ Minimum tier for the account.
    /// @return True if the status is currently held.
    function isTier(address account_, uint256 minimumTier_)
        public
        view
        returns (bool)
    {
        return
            constructionBlockNumber >=
            TierReport.tierBlock(tierContract.report(account_), minimumTier_);
    }

    /// Modifier that restricts access to functions depending on the tier
    /// required by the function.
    ///
    /// `isTier` involves an external call to tierContract.report.
    /// `require` happens AFTER the modified function to avoid rentrant
    /// `ITier` code.
    /// Also `report` from `ITier` is `view` so the compiler will error on
    /// attempted state modification.
    //  solhint-disable-next-line max-line-length
    /// https://consensys.github.io/smart-contract-best-practices/recommendations/#use-modifiers-only-for-checks
    ///
    /// Do NOT use this to guard setting the tier on an `ITier` contract.
    /// The initial tier would be checked AFTER it has already been
    /// modified which is unsafe.
    ///
    /// @param account_ Account to enforce tier of.
    /// @param minimumTier_ Minimum tier for the account.
    modifier onlyTier(address account_, uint256 minimumTier_) {
        _;
        require(isTier(account_, minimumTier_), "MINIMUM_TIER");
    }
}
