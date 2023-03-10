/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface HookCallerMockInterface extends utils.Interface {
  functions: {
    "callERC1155BatchReceived(address)": FunctionFragment;
    "callERC1155Received(address)": FunctionFragment;
    "callERC1271isValidSignatureData(address,bytes,bytes)": FunctionFragment;
    "callERC1271isValidSignatureHash(address,bytes32,bytes)": FunctionFragment;
    "callERC223Received(address)": FunctionFragment;
    "callERC721Received(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "callERC1155BatchReceived"
      | "callERC1155Received"
      | "callERC1271isValidSignatureData"
      | "callERC1271isValidSignatureHash"
      | "callERC223Received"
      | "callERC721Received"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "callERC1155BatchReceived",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "callERC1155Received",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "callERC1271isValidSignatureData",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "callERC1271isValidSignatureHash",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "callERC223Received",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "callERC721Received",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "callERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callERC1271isValidSignatureData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callERC1271isValidSignatureHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callERC223Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callERC721Received",
    data: BytesLike
  ): Result;

  events: {};
}

export interface HookCallerMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HookCallerMockInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    callERC1155BatchReceived(
      _addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    callERC1155Received(
      _addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    callERC1271isValidSignatureData(
      _addr: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[void]>;

    callERC1271isValidSignatureHash(
      _addr: PromiseOrValue<string>,
      _hash: PromiseOrValue<BytesLike>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[void]>;

    callERC223Received(
      _addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    callERC721Received(
      _addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  callERC1155BatchReceived(
    _addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callERC1155Received(
    _addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callERC1271isValidSignatureData(
    _addr: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    _signature: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<void>;

  callERC1271isValidSignatureHash(
    _addr: PromiseOrValue<string>,
    _hash: PromiseOrValue<BytesLike>,
    _signature: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<void>;

  callERC223Received(
    _addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callERC721Received(
    _addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    callERC1155BatchReceived(
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    callERC1155Received(
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    callERC1271isValidSignatureData(
      _addr: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    callERC1271isValidSignatureHash(
      _addr: PromiseOrValue<string>,
      _hash: PromiseOrValue<BytesLike>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    callERC223Received(
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    callERC721Received(
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    callERC1155BatchReceived(
      _addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    callERC1155Received(
      _addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    callERC1271isValidSignatureData(
      _addr: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    callERC1271isValidSignatureHash(
      _addr: PromiseOrValue<string>,
      _hash: PromiseOrValue<BytesLike>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    callERC223Received(
      _addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    callERC721Received(
      _addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    callERC1155BatchReceived(
      _addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    callERC1155Received(
      _addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    callERC1271isValidSignatureData(
      _addr: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    callERC1271isValidSignatureHash(
      _addr: PromiseOrValue<string>,
      _hash: PromiseOrValue<BytesLike>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    callERC223Received(
      _addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    callERC721Received(
      _addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
