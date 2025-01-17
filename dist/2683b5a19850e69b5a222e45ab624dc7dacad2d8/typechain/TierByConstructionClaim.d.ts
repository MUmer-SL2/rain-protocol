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

interface TierByConstructionClaimInterface extends ethers.utils.Interface {
  functions: {
    "claim(address,bytes)": FunctionFragment;
    "claims(address)": FunctionFragment;
    "constructionBlock()": FunctionFragment;
    "isTier(address,uint8)": FunctionFragment;
    "minimumTier()": FunctionFragment;
    "tierContract()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "claim",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "claims", values: [string]): string;
  encodeFunctionData(
    functionFragment: "constructionBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isTier",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "minimumTier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tierContract",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claims", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "constructionBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isTier", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "minimumTier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tierContract",
    data: BytesLike
  ): Result;

  events: {
    "Claim(address,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
}

export class TierByConstructionClaim extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TierByConstructionClaimInterface;

  functions: {
    claim(
      account_: string,
      data_: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "claim(address,bytes)"(
      account_: string,
      data_: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    claims(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    "claims(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    constructionBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    "constructionBlock()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    isTier(
      account_: string,
      minimumTier_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isTier(address,uint8)"(
      account_: string,
      minimumTier_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    minimumTier(overrides?: CallOverrides): Promise<[number]>;

    "minimumTier()"(overrides?: CallOverrides): Promise<[number]>;

    tierContract(overrides?: CallOverrides): Promise<[string]>;

    "tierContract()"(overrides?: CallOverrides): Promise<[string]>;
  };

  claim(
    account_: string,
    data_: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "claim(address,bytes)"(
    account_: string,
    data_: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  claims(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "claims(address)"(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  constructionBlock(overrides?: CallOverrides): Promise<BigNumber>;

  "constructionBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

  isTier(
    account_: string,
    minimumTier_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isTier(address,uint8)"(
    account_: string,
    minimumTier_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  minimumTier(overrides?: CallOverrides): Promise<number>;

  "minimumTier()"(overrides?: CallOverrides): Promise<number>;

  tierContract(overrides?: CallOverrides): Promise<string>;

  "tierContract()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    claim(
      account_: string,
      data_: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "claim(address,bytes)"(
      account_: string,
      data_: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    claims(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "claims(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    constructionBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "constructionBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    isTier(
      account_: string,
      minimumTier_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isTier(address,uint8)"(
      account_: string,
      minimumTier_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    minimumTier(overrides?: CallOverrides): Promise<number>;

    "minimumTier()"(overrides?: CallOverrides): Promise<number>;

    tierContract(overrides?: CallOverrides): Promise<string>;

    "tierContract()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    Claim(account: string | null, data_: null): EventFilter;
  };

  estimateGas: {
    claim(
      account_: string,
      data_: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "claim(address,bytes)"(
      account_: string,
      data_: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    claims(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "claims(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    constructionBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "constructionBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    isTier(
      account_: string,
      minimumTier_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isTier(address,uint8)"(
      account_: string,
      minimumTier_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    minimumTier(overrides?: CallOverrides): Promise<BigNumber>;

    "minimumTier()"(overrides?: CallOverrides): Promise<BigNumber>;

    tierContract(overrides?: CallOverrides): Promise<BigNumber>;

    "tierContract()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    claim(
      account_: string,
      data_: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "claim(address,bytes)"(
      account_: string,
      data_: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    claims(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "claims(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    constructionBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "constructionBlock()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTier(
      account_: string,
      minimumTier_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isTier(address,uint8)"(
      account_: string,
      minimumTier_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minimumTier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "minimumTier()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tierContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "tierContract()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
