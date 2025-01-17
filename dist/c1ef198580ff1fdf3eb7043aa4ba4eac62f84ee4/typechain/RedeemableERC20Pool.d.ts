/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface RedeemableERC20PoolInterface extends ethers.utils.Interface {
  functions: {
    "MIN_BALANCER_POOL_BALANCE()": FunctionFragment;
    "MIN_RESERVE_INIT()": FunctionFragment;
    "UNINITIALIZED()": FunctionFragment;
    "blockNumberForPhase(uint32[8],uint8)": FunctionFragment;
    "crp()": FunctionFragment;
    "currentPhase()": FunctionFragment;
    "finalValuation()": FunctionFragment;
    "finalWeight()": FunctionFragment;
    "minimumTradingDuration()": FunctionFragment;
    "owner()": FunctionFragment;
    "ownerEndDutchAuction()": FunctionFragment;
    "phaseAtBlockNumber(uint32[8],uint32)": FunctionFragment;
    "phaseBlocks(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "reserve()": FunctionFragment;
    "reserveInit()": FunctionFragment;
    "startDutchAuction()": FunctionFragment;
    "token()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "MIN_BALANCER_POOL_BALANCE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MIN_RESERVE_INIT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "UNINITIALIZED",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "blockNumberForPhase",
    values: [
      [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      BigNumberish
    ]
  ): string;
  encodeFunctionData(functionFragment: "crp", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "currentPhase",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "finalValuation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "finalWeight",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minimumTradingDuration",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerEndDutchAuction",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "phaseAtBlockNumber",
    values: [
      [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "phaseBlocks",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "reserve", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "reserveInit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "startDutchAuction",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "MIN_BALANCER_POOL_BALANCE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MIN_RESERVE_INIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "UNINITIALIZED",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "blockNumberForPhase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "crp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentPhase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalValuation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalWeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minimumTradingDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ownerEndDutchAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "phaseAtBlockNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "phaseBlocks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "reserve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reserveInit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startDutchAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "PhaseShiftScheduled(uint32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PhaseShiftScheduled"): EventFragment;
}

export class RedeemableERC20Pool extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: RedeemableERC20PoolInterface;

  functions: {
    MIN_BALANCER_POOL_BALANCE(overrides?: CallOverrides): Promise<[BigNumber]>;

    "MIN_BALANCER_POOL_BALANCE()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    MIN_RESERVE_INIT(overrides?: CallOverrides): Promise<[BigNumber]>;

    "MIN_RESERVE_INIT()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    UNINITIALIZED(overrides?: CallOverrides): Promise<[number]>;

    "UNINITIALIZED()"(overrides?: CallOverrides): Promise<[number]>;

    blockNumberForPhase(
      phaseBlocks_: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      phase_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    "blockNumberForPhase(uint32[8],uint8)"(
      phaseBlocks_: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      phase_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    crp(overrides?: CallOverrides): Promise<[string]>;

    "crp()"(overrides?: CallOverrides): Promise<[string]>;

    currentPhase(overrides?: CallOverrides): Promise<[number]>;

    "currentPhase()"(overrides?: CallOverrides): Promise<[number]>;

    finalValuation(overrides?: CallOverrides): Promise<[BigNumber]>;

    "finalValuation()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    finalWeight(overrides?: CallOverrides): Promise<[BigNumber]>;

    "finalWeight()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    minimumTradingDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    "minimumTradingDuration()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    ownerEndDutchAuction(overrides?: Overrides): Promise<ContractTransaction>;

    "ownerEndDutchAuction()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    phaseAtBlockNumber(
      phaseBlocks_: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    "phaseAtBlockNumber(uint32[8],uint32)"(
      phaseBlocks_: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    phaseBlocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    "phaseBlocks(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    reserve(overrides?: CallOverrides): Promise<[string]>;

    "reserve()"(overrides?: CallOverrides): Promise<[string]>;

    reserveInit(overrides?: CallOverrides): Promise<[BigNumber]>;

    "reserveInit()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    startDutchAuction(overrides?: Overrides): Promise<ContractTransaction>;

    "startDutchAuction()"(overrides?: Overrides): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;

    "token()"(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  MIN_BALANCER_POOL_BALANCE(overrides?: CallOverrides): Promise<BigNumber>;

  "MIN_BALANCER_POOL_BALANCE()"(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_RESERVE_INIT(overrides?: CallOverrides): Promise<BigNumber>;

  "MIN_RESERVE_INIT()"(overrides?: CallOverrides): Promise<BigNumber>;

  UNINITIALIZED(overrides?: CallOverrides): Promise<number>;

  "UNINITIALIZED()"(overrides?: CallOverrides): Promise<number>;

  blockNumberForPhase(
    phaseBlocks_: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ],
    phase_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  "blockNumberForPhase(uint32[8],uint8)"(
    phaseBlocks_: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ],
    phase_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  crp(overrides?: CallOverrides): Promise<string>;

  "crp()"(overrides?: CallOverrides): Promise<string>;

  currentPhase(overrides?: CallOverrides): Promise<number>;

  "currentPhase()"(overrides?: CallOverrides): Promise<number>;

  finalValuation(overrides?: CallOverrides): Promise<BigNumber>;

  "finalValuation()"(overrides?: CallOverrides): Promise<BigNumber>;

  finalWeight(overrides?: CallOverrides): Promise<BigNumber>;

  "finalWeight()"(overrides?: CallOverrides): Promise<BigNumber>;

  minimumTradingDuration(overrides?: CallOverrides): Promise<BigNumber>;

  "minimumTradingDuration()"(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  ownerEndDutchAuction(overrides?: Overrides): Promise<ContractTransaction>;

  "ownerEndDutchAuction()"(overrides?: Overrides): Promise<ContractTransaction>;

  phaseAtBlockNumber(
    phaseBlocks_: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ],
    blockNumber_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  "phaseAtBlockNumber(uint32[8],uint32)"(
    phaseBlocks_: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ],
    blockNumber_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  phaseBlocks(arg0: BigNumberish, overrides?: CallOverrides): Promise<number>;

  "phaseBlocks(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  reserve(overrides?: CallOverrides): Promise<string>;

  "reserve()"(overrides?: CallOverrides): Promise<string>;

  reserveInit(overrides?: CallOverrides): Promise<BigNumber>;

  "reserveInit()"(overrides?: CallOverrides): Promise<BigNumber>;

  startDutchAuction(overrides?: Overrides): Promise<ContractTransaction>;

  "startDutchAuction()"(overrides?: Overrides): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  "token()"(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    MIN_BALANCER_POOL_BALANCE(overrides?: CallOverrides): Promise<BigNumber>;

    "MIN_BALANCER_POOL_BALANCE()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    MIN_RESERVE_INIT(overrides?: CallOverrides): Promise<BigNumber>;

    "MIN_RESERVE_INIT()"(overrides?: CallOverrides): Promise<BigNumber>;

    UNINITIALIZED(overrides?: CallOverrides): Promise<number>;

    "UNINITIALIZED()"(overrides?: CallOverrides): Promise<number>;

    blockNumberForPhase(
      phaseBlocks_: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      phase_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    "blockNumberForPhase(uint32[8],uint8)"(
      phaseBlocks_: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      phase_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    crp(overrides?: CallOverrides): Promise<string>;

    "crp()"(overrides?: CallOverrides): Promise<string>;

    currentPhase(overrides?: CallOverrides): Promise<number>;

    "currentPhase()"(overrides?: CallOverrides): Promise<number>;

    finalValuation(overrides?: CallOverrides): Promise<BigNumber>;

    "finalValuation()"(overrides?: CallOverrides): Promise<BigNumber>;

    finalWeight(overrides?: CallOverrides): Promise<BigNumber>;

    "finalWeight()"(overrides?: CallOverrides): Promise<BigNumber>;

    minimumTradingDuration(overrides?: CallOverrides): Promise<BigNumber>;

    "minimumTradingDuration()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    ownerEndDutchAuction(overrides?: CallOverrides): Promise<void>;

    "ownerEndDutchAuction()"(overrides?: CallOverrides): Promise<void>;

    phaseAtBlockNumber(
      phaseBlocks_: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    "phaseAtBlockNumber(uint32[8],uint32)"(
      phaseBlocks_: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    phaseBlocks(arg0: BigNumberish, overrides?: CallOverrides): Promise<number>;

    "phaseBlocks(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    reserve(overrides?: CallOverrides): Promise<string>;

    "reserve()"(overrides?: CallOverrides): Promise<string>;

    reserveInit(overrides?: CallOverrides): Promise<BigNumber>;

    "reserveInit()"(overrides?: CallOverrides): Promise<BigNumber>;

    startDutchAuction(overrides?: CallOverrides): Promise<void>;

    "startDutchAuction()"(overrides?: CallOverrides): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;

    "token()"(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    PhaseShiftScheduled(newPhaseBlock_: BigNumberish | null): EventFilter;
  };

  estimateGas: {
    MIN_BALANCER_POOL_BALANCE(overrides?: CallOverrides): Promise<BigNumber>;

    "MIN_BALANCER_POOL_BALANCE()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    MIN_RESERVE_INIT(overrides?: CallOverrides): Promise<BigNumber>;

    "MIN_RESERVE_INIT()"(overrides?: CallOverrides): Promise<BigNumber>;

    UNINITIALIZED(overrides?: CallOverrides): Promise<BigNumber>;

    "UNINITIALIZED()"(overrides?: CallOverrides): Promise<BigNumber>;

    blockNumberForPhase(
      phaseBlocks_: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      phase_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "blockNumberForPhase(uint32[8],uint8)"(
      phaseBlocks_: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      phase_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    crp(overrides?: CallOverrides): Promise<BigNumber>;

    "crp()"(overrides?: CallOverrides): Promise<BigNumber>;

    currentPhase(overrides?: CallOverrides): Promise<BigNumber>;

    "currentPhase()"(overrides?: CallOverrides): Promise<BigNumber>;

    finalValuation(overrides?: CallOverrides): Promise<BigNumber>;

    "finalValuation()"(overrides?: CallOverrides): Promise<BigNumber>;

    finalWeight(overrides?: CallOverrides): Promise<BigNumber>;

    "finalWeight()"(overrides?: CallOverrides): Promise<BigNumber>;

    minimumTradingDuration(overrides?: CallOverrides): Promise<BigNumber>;

    "minimumTradingDuration()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    ownerEndDutchAuction(overrides?: Overrides): Promise<BigNumber>;

    "ownerEndDutchAuction()"(overrides?: Overrides): Promise<BigNumber>;

    phaseAtBlockNumber(
      phaseBlocks_: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "phaseAtBlockNumber(uint32[8],uint32)"(
      phaseBlocks_: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    phaseBlocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "phaseBlocks(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    reserve(overrides?: CallOverrides): Promise<BigNumber>;

    "reserve()"(overrides?: CallOverrides): Promise<BigNumber>;

    reserveInit(overrides?: CallOverrides): Promise<BigNumber>;

    "reserveInit()"(overrides?: CallOverrides): Promise<BigNumber>;

    startDutchAuction(overrides?: Overrides): Promise<BigNumber>;

    "startDutchAuction()"(overrides?: Overrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    "token()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MIN_BALANCER_POOL_BALANCE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "MIN_BALANCER_POOL_BALANCE()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MIN_RESERVE_INIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "MIN_RESERVE_INIT()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    UNINITIALIZED(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "UNINITIALIZED()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    blockNumberForPhase(
      phaseBlocks_: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      phase_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "blockNumberForPhase(uint32[8],uint8)"(
      phaseBlocks_: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      phase_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    crp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "crp()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentPhase(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "currentPhase()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    finalValuation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "finalValuation()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    finalWeight(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "finalWeight()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minimumTradingDuration(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "minimumTradingDuration()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerEndDutchAuction(overrides?: Overrides): Promise<PopulatedTransaction>;

    "ownerEndDutchAuction()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    phaseAtBlockNumber(
      phaseBlocks_: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "phaseAtBlockNumber(uint32[8],uint32)"(
      phaseBlocks_: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      blockNumber_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    phaseBlocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "phaseBlocks(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    reserve(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "reserve()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reserveInit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "reserveInit()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    startDutchAuction(overrides?: Overrides): Promise<PopulatedTransaction>;

    "startDutchAuction()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "token()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
