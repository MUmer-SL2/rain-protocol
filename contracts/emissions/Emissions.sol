// SPDX-License-Identifier: CAL

pragma solidity ^0.8.10;

import "../vm/RainVM.sol";
import "../vm/ImmutableSource.sol";
import { BlockOps } from "../vm/ops/BlockOps.sol";

contract Emissions is RainVM, ImmutableSource, BlockOps {

    constructor(Source memory source_)
        ImmutableSource(source_)
        BlockOps(VM_OPS_LENGTH)
    { } // solhint-disable-line no-empty-blocks

    function applyOp(
        bytes memory context_,
        Stack memory stack_,
        Op memory op_
    )
        internal
        override(RainVM, BlockOps)
        view
        returns (Stack memory)
    {
        if (op_.code < blockOpsStart + BLOCK_OPS_LENGTH) {
            return BlockOps.applyOp(
                context_,
                stack_,
                op_
            );
        }

        return stack_;
    }

    function run()
        external
        view
        virtual
        returns (uint256)
    {
        Stack memory stack_;
        bytes memory context_ = new bytes(0);
        stack_ = eval(
            context_,
            source(),
            stack_
        );

        return stack_.vals[stack_.index - 1];
    }

    function eval(Source memory source_)
        external
        view
        virtual
        returns (uint256)
    {
        Stack memory stack_;
        bytes memory context_ = new bytes(0);
        stack_ = eval(
            context_,
            source_,
            stack_
        );

        return stack_.vals[stack_.index - 1];
    }

    function evalStack(Source memory source_)
        external
        view
        virtual
        returns (Stack memory)
    {
        Stack memory stack_;
        bytes memory context_ = new bytes(0);
        stack_ = eval(
            context_,
            source_,
            stack_
        );

        return stack_;
    }
}