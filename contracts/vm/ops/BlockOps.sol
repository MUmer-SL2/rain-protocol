// SPDX-License-Identifier: CAL
pragma solidity =0.8.10;

import {State} from "../RainVM.sol";

/// @title BlockOps
/// @notice RainVM opcode pack to access the current block number.
library BlockOps {
    /// Opcode for the block number.
    uint256 private constant BLOCK_NUMBER = 0;
    /// Number of provided opcodes for `BlockOps`.
    uint256 internal constant OPS_LENGTH = 1;

    function applyOp(
        bytes memory,
        State memory state_,
        uint256 opcode_,
        uint256
    ) internal view {
        unchecked {
            require(opcode_ < OPS_LENGTH, "MAX_OPCODE");
            // There's only one opcode.
            // Stack the current `block.number`.
            state_.stack[state_.stackIndex] = block.number;
            state_.stackIndex++;
        }
    }
}
