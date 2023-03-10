/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IModuleAuthUpgradable,
  IModuleAuthUpgradableInterface,
} from "../../../../modules/commons/interfaces/IModuleAuthUpgradable";

const _abi = [
  {
    inputs: [],
    name: "imageHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_imageHash",
        type: "bytes32",
      },
    ],
    name: "updateImageHash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IModuleAuthUpgradable__factory {
  static readonly abi = _abi;
  static createInterface(): IModuleAuthUpgradableInterface {
    return new utils.Interface(_abi) as IModuleAuthUpgradableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IModuleAuthUpgradable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IModuleAuthUpgradable;
  }
}
