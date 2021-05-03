// SPDX-License-Identifier: MIT

pragma solidity ^0.7.3;

interface IPrestige {
    /**
    * 8 Possible statuses.
    * Fits nicely as uint32 in uint256 which is helpful for internal storage concerns.
    **/
    enum Status {
        COPPER,
        BRONZE,
        SILVER,
        GOLD,
        PLATINUM,
        DIAMOND,
        CHAD,
        JAWAD
    }

    /**
    * Every time a status changes we log before and after as a Status[2] against the account.
    **/
    event StatusChange(address account, Status[2] change);

    /**
    *   Updates the level of an account by an entered level.
    *   The implementing contract is responsible for taking any actions required to set the status.
    *   For example, taking/refunding funds/NFTs etc.
    *   address account - Account to change the status.
    *   Status new_status - New status to be changed.
    *   bytes - Arbitrary input to disambiguate ownership (e.g. NFTs to lock).
    **/
    function setStatus(
        address account, 
        Status newStatus, 
        bytes memory data
    ) 
        external;

    /**
    * Returns the earliest block the account has held each status for continuously.
    * This is encoded as a uint256 with blocks represented as 8x concatenated u32.
    * I.e. Each 4 bytes of the uint256 represents a u32 status start time.
    * The low bits represent low status and high bits the high status.
    **/
    function statusReport(address account) external view returns (uint256);
}