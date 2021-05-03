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
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface TVKPrestigeInterface extends ethers.utils.Interface {
  functions: {
    "BRONZE()": FunctionFragment;
    "CHAD()": FunctionFragment;
    "COPPER()": FunctionFragment;
    "DIAMOND()": FunctionFragment;
    "GOLD()": FunctionFragment;
    "JAWAD()": FunctionFragment;
    "PLATINUM()": FunctionFragment;
    "SILVER()": FunctionFragment;
    "TVK()": FunctionFragment;
    "levels()": FunctionFragment;
    "setStatus(address,uint8,bytes)": FunctionFragment;
    "statusReport(address)": FunctionFragment;
    "statuses(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "BRONZE", values?: undefined): string;
  encodeFunctionData(functionFragment: "CHAD", values?: undefined): string;
  encodeFunctionData(functionFragment: "COPPER", values?: undefined): string;
  encodeFunctionData(functionFragment: "DIAMOND", values?: undefined): string;
  encodeFunctionData(functionFragment: "GOLD", values?: undefined): string;
  encodeFunctionData(functionFragment: "JAWAD", values?: undefined): string;
  encodeFunctionData(functionFragment: "PLATINUM", values?: undefined): string;
  encodeFunctionData(functionFragment: "SILVER", values?: undefined): string;
  encodeFunctionData(functionFragment: "TVK", values?: undefined): string;
  encodeFunctionData(functionFragment: "levels", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setStatus",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "statusReport",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "statuses", values: [string]): string;

  decodeFunctionResult(functionFragment: "BRONZE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "CHAD", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "COPPER", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "DIAMOND", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "GOLD", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "JAWAD", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "PLATINUM", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "SILVER", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "TVK", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "levels", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setStatus", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "statusReport",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "statuses", data: BytesLike): Result;

  events: {
    "StatusChange(address,uint8[2])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "StatusChange"): EventFragment;
}

export class TVKPrestige extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: TVKPrestigeInterface;

  functions: {
    BRONZE(overrides?: CallOverrides): Promise<[BigNumber]>;

    "BRONZE()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    CHAD(overrides?: CallOverrides): Promise<[BigNumber]>;

    "CHAD()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    COPPER(overrides?: CallOverrides): Promise<[BigNumber]>;

    "COPPER()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    DIAMOND(overrides?: CallOverrides): Promise<[BigNumber]>;

    "DIAMOND()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    GOLD(overrides?: CallOverrides): Promise<[BigNumber]>;

    "GOLD()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    JAWAD(overrides?: CallOverrides): Promise<[BigNumber]>;

    "JAWAD()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    PLATINUM(overrides?: CallOverrides): Promise<[BigNumber]>;

    "PLATINUM()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    SILVER(overrides?: CallOverrides): Promise<[BigNumber]>;

    "SILVER()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    TVK(overrides?: CallOverrides): Promise<[string]>;

    "TVK()"(overrides?: CallOverrides): Promise<[string]>;

    levels(
      overrides?: CallOverrides
    ): Promise<
      [
        [
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ]
      ]
    >;

    "levels()"(
      overrides?: CallOverrides
    ): Promise<
      [
        [
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ]
      ]
    >;

    setStatus(
      account: string,
      newStatus: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setStatus(address,uint8,bytes)"(
      account: string,
      newStatus: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    statusReport(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "statusReport(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    statuses(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "statuses(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  BRONZE(overrides?: CallOverrides): Promise<BigNumber>;

  "BRONZE()"(overrides?: CallOverrides): Promise<BigNumber>;

  CHAD(overrides?: CallOverrides): Promise<BigNumber>;

  "CHAD()"(overrides?: CallOverrides): Promise<BigNumber>;

  COPPER(overrides?: CallOverrides): Promise<BigNumber>;

  "COPPER()"(overrides?: CallOverrides): Promise<BigNumber>;

  DIAMOND(overrides?: CallOverrides): Promise<BigNumber>;

  "DIAMOND()"(overrides?: CallOverrides): Promise<BigNumber>;

  GOLD(overrides?: CallOverrides): Promise<BigNumber>;

  "GOLD()"(overrides?: CallOverrides): Promise<BigNumber>;

  JAWAD(overrides?: CallOverrides): Promise<BigNumber>;

  "JAWAD()"(overrides?: CallOverrides): Promise<BigNumber>;

  PLATINUM(overrides?: CallOverrides): Promise<BigNumber>;

  "PLATINUM()"(overrides?: CallOverrides): Promise<BigNumber>;

  SILVER(overrides?: CallOverrides): Promise<BigNumber>;

  "SILVER()"(overrides?: CallOverrides): Promise<BigNumber>;

  TVK(overrides?: CallOverrides): Promise<string>;

  "TVK()"(overrides?: CallOverrides): Promise<string>;

  levels(
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ]
  >;

  "levels()"(
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ]
  >;

  setStatus(
    account: string,
    newStatus: BigNumberish,
    arg2: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setStatus(address,uint8,bytes)"(
    account: string,
    newStatus: BigNumberish,
    arg2: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  statusReport(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  "statusReport(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  statuses(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "statuses(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    BRONZE(overrides?: CallOverrides): Promise<BigNumber>;

    "BRONZE()"(overrides?: CallOverrides): Promise<BigNumber>;

    CHAD(overrides?: CallOverrides): Promise<BigNumber>;

    "CHAD()"(overrides?: CallOverrides): Promise<BigNumber>;

    COPPER(overrides?: CallOverrides): Promise<BigNumber>;

    "COPPER()"(overrides?: CallOverrides): Promise<BigNumber>;

    DIAMOND(overrides?: CallOverrides): Promise<BigNumber>;

    "DIAMOND()"(overrides?: CallOverrides): Promise<BigNumber>;

    GOLD(overrides?: CallOverrides): Promise<BigNumber>;

    "GOLD()"(overrides?: CallOverrides): Promise<BigNumber>;

    JAWAD(overrides?: CallOverrides): Promise<BigNumber>;

    "JAWAD()"(overrides?: CallOverrides): Promise<BigNumber>;

    PLATINUM(overrides?: CallOverrides): Promise<BigNumber>;

    "PLATINUM()"(overrides?: CallOverrides): Promise<BigNumber>;

    SILVER(overrides?: CallOverrides): Promise<BigNumber>;

    "SILVER()"(overrides?: CallOverrides): Promise<BigNumber>;

    TVK(overrides?: CallOverrides): Promise<string>;

    "TVK()"(overrides?: CallOverrides): Promise<string>;

    levels(
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ]
    >;

    "levels()"(
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ]
    >;

    setStatus(
      account: string,
      newStatus: BigNumberish,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "setStatus(address,uint8,bytes)"(
      account: string,
      newStatus: BigNumberish,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    statusReport(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "statusReport(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    statuses(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "statuses(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    StatusChange(
      account: null,
      change: null
    ): TypedEventFilter<
      [string, [number, number]],
      { account: string; change: [number, number] }
    >;
  };

  estimateGas: {
    BRONZE(overrides?: CallOverrides): Promise<BigNumber>;

    "BRONZE()"(overrides?: CallOverrides): Promise<BigNumber>;

    CHAD(overrides?: CallOverrides): Promise<BigNumber>;

    "CHAD()"(overrides?: CallOverrides): Promise<BigNumber>;

    COPPER(overrides?: CallOverrides): Promise<BigNumber>;

    "COPPER()"(overrides?: CallOverrides): Promise<BigNumber>;

    DIAMOND(overrides?: CallOverrides): Promise<BigNumber>;

    "DIAMOND()"(overrides?: CallOverrides): Promise<BigNumber>;

    GOLD(overrides?: CallOverrides): Promise<BigNumber>;

    "GOLD()"(overrides?: CallOverrides): Promise<BigNumber>;

    JAWAD(overrides?: CallOverrides): Promise<BigNumber>;

    "JAWAD()"(overrides?: CallOverrides): Promise<BigNumber>;

    PLATINUM(overrides?: CallOverrides): Promise<BigNumber>;

    "PLATINUM()"(overrides?: CallOverrides): Promise<BigNumber>;

    SILVER(overrides?: CallOverrides): Promise<BigNumber>;

    "SILVER()"(overrides?: CallOverrides): Promise<BigNumber>;

    TVK(overrides?: CallOverrides): Promise<BigNumber>;

    "TVK()"(overrides?: CallOverrides): Promise<BigNumber>;

    levels(overrides?: CallOverrides): Promise<BigNumber>;

    "levels()"(overrides?: CallOverrides): Promise<BigNumber>;

    setStatus(
      account: string,
      newStatus: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setStatus(address,uint8,bytes)"(
      account: string,
      newStatus: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    statusReport(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "statusReport(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    statuses(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "statuses(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BRONZE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "BRONZE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CHAD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "CHAD()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    COPPER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "COPPER()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DIAMOND(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "DIAMOND()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    GOLD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "GOLD()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    JAWAD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "JAWAD()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PLATINUM(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "PLATINUM()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SILVER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "SILVER()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TVK(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "TVK()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    levels(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "levels()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setStatus(
      account: string,
      newStatus: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setStatus(address,uint8,bytes)"(
      account: string,
      newStatus: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    statusReport(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "statusReport(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    statuses(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "statuses(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
