/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface MainModuleInterface extends Interface {
  functions: {
    FACTORY: TypedFunctionDescription<{ encode([]: []): string }>;

    INIT_CODE_HASH: TypedFunctionDescription<{ encode([]: []): string }>;

    addHook: TypedFunctionDescription<{
      encode([_signature, _implementation]: [Arrayish, string]): string;
    }>;

    createContract: TypedFunctionDescription<{
      encode([_code]: [Arrayish]): string;
    }>;

    execute: TypedFunctionDescription<{
      encode([_txs, _nonce, _signature]: [
        {
          delegateCall: boolean;
          revertOnError: boolean;
          gasLimit: BigNumberish;
          target: string;
          value: BigNumberish;
          data: Arrayish;
        }[],
        BigNumberish,
        Arrayish
      ]): string;
    }>;

    isValidSignature: TypedFunctionDescription<{
      encode([_hash, _signatures]: [Arrayish, Arrayish]): string;
    }>;

    nonce: TypedFunctionDescription<{ encode([]: []): string }>;

    onERC1155BatchReceived: TypedFunctionDescription<{
      encode([, , , ,]: [
        string,
        string,
        BigNumberish[],
        BigNumberish[],
        Arrayish
      ]): string;
    }>;

    onERC1155Received: TypedFunctionDescription<{
      encode([, , , ,]: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        Arrayish
      ]): string;
    }>;

    onERC721Received: TypedFunctionDescription<{
      encode([, , ,]: [string, string, BigNumberish, Arrayish]): string;
    }>;

    readHook: TypedFunctionDescription<{
      encode([_signature]: [Arrayish]): string;
    }>;

    readNonce: TypedFunctionDescription<{
      encode([_space]: [BigNumberish]): string;
    }>;

    removeHook: TypedFunctionDescription<{
      encode([_signature]: [Arrayish]): string;
    }>;

    updateImplementation: TypedFunctionDescription<{
      encode([_implementation]: [string]): string;
    }>;

    supportsInterface: TypedFunctionDescription<{
      encode([_interfaceID]: [Arrayish]): string;
    }>;
  };

  events: {
    CreatedContract: TypedEventDescription<{
      encodeTopics([_contract]: [null]): string[];
    }>;

    NonceChange: TypedEventDescription<{
      encodeTopics([_space, _newNonce]: [null, null]): string[];
    }>;

    TxFailed: TypedEventDescription<{
      encodeTopics([_index, _reason]: [null, null]): string[];
    }>;
  };
}

export class MainModule extends Contract {
  connect(signerOrProvider: Signer | Provider | string): MainModule;
  attach(addressOrName: string): MainModule;
  deployed(): Promise<MainModule>;

  on(event: EventFilter | string, listener: Listener): MainModule;
  once(event: EventFilter | string, listener: Listener): MainModule;
  addListener(eventName: EventFilter | string, listener: Listener): MainModule;
  removeAllListeners(eventName: EventFilter | string): MainModule;
  removeListener(eventName: any, listener: Listener): MainModule;

  interface: MainModuleInterface;

  functions: {
    FACTORY(): Promise<string>;

    INIT_CODE_HASH(): Promise<string>;

    addHook(
      _signature: Arrayish,
      _implementation: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    createContract(
      _code: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    execute(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: Arrayish;
      }[],
      _nonce: BigNumberish,
      _signature: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    isValidSignature(_hash: Arrayish, _signatures: Arrayish): Promise<string>;

    nonce(): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    readHook(_signature: Arrayish): Promise<string>;

    readNonce(_space: BigNumberish): Promise<BigNumber>;

    removeHook(
      _signature: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    updateImplementation(
      _implementation: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    supportsInterface(_interfaceID: Arrayish): Promise<boolean>;
  };

  FACTORY(): Promise<string>;

  INIT_CODE_HASH(): Promise<string>;

  addHook(
    _signature: Arrayish,
    _implementation: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  createContract(
    _code: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  execute(
    _txs: {
      delegateCall: boolean;
      revertOnError: boolean;
      gasLimit: BigNumberish;
      target: string;
      value: BigNumberish;
      data: Arrayish;
    }[],
    _nonce: BigNumberish,
    _signature: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  isValidSignature(_hash: Arrayish, _signatures: Arrayish): Promise<string>;

  nonce(): Promise<BigNumber>;

  onERC1155BatchReceived(
    arg0: string,
    arg1: string,
    arg2: BigNumberish[],
    arg3: BigNumberish[],
    arg4: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  onERC1155Received(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BigNumberish,
    arg4: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  onERC721Received(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  readHook(_signature: Arrayish): Promise<string>;

  readNonce(_space: BigNumberish): Promise<BigNumber>;

  removeHook(
    _signature: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  updateImplementation(
    _implementation: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  supportsInterface(_interfaceID: Arrayish): Promise<boolean>;

  filters: {
    CreatedContract(_contract: null): EventFilter;

    NonceChange(_space: null, _newNonce: null): EventFilter;

    TxFailed(_index: null, _reason: null): EventFilter;
  };

  estimate: {
    FACTORY(): Promise<BigNumber>;

    INIT_CODE_HASH(): Promise<BigNumber>;

    addHook(_signature: Arrayish, _implementation: string): Promise<BigNumber>;

    createContract(_code: Arrayish): Promise<BigNumber>;

    execute(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: Arrayish;
      }[],
      _nonce: BigNumberish,
      _signature: Arrayish
    ): Promise<BigNumber>;

    isValidSignature(
      _hash: Arrayish,
      _signatures: Arrayish
    ): Promise<BigNumber>;

    nonce(): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: Arrayish
    ): Promise<BigNumber>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: Arrayish
    ): Promise<BigNumber>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: Arrayish
    ): Promise<BigNumber>;

    readHook(_signature: Arrayish): Promise<BigNumber>;

    readNonce(_space: BigNumberish): Promise<BigNumber>;

    removeHook(_signature: Arrayish): Promise<BigNumber>;

    updateImplementation(_implementation: string): Promise<BigNumber>;

    supportsInterface(_interfaceID: Arrayish): Promise<BigNumber>;
  };
}
