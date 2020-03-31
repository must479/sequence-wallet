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

interface WalletInterface extends Interface {
  functions: {};

  events: {};
}

export class Wallet extends Contract {
  connect(signerOrProvider: Signer | Provider | string): Wallet;
  attach(addressOrName: string): Wallet;
  deployed(): Promise<Wallet>;

  on(event: EventFilter | string, listener: Listener): Wallet;
  once(event: EventFilter | string, listener: Listener): Wallet;
  addListener(eventName: EventFilter | string, listener: Listener): Wallet;
  removeAllListeners(eventName: EventFilter | string): Wallet;
  removeListener(eventName: any, listener: Listener): Wallet;

  interface: WalletInterface;

  functions: {};

  filters: {};

  estimate: {};
}