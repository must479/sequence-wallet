import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { DelegateCallMock, DelegateCallMockInterface } from "../../mocks/DelegateCallMock";
declare type DelegateCallMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DelegateCallMock__factory extends ContractFactory {
    constructor(...args: DelegateCallMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<DelegateCallMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): DelegateCallMock;
    connect(signer: Signer): DelegateCallMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610258806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063381ba140146100465780639c0e3f7a14610067578063ed2e5a971461008a575b600080fd5b6100656004803603602081101561005c57600080fd5b503515156100a7565b005b6100656004803603604081101561007d57600080fd5b5080359060200135610107565b610065600480360360208110156100a057600080fd5b50356101ba565b806100b35760006100b6565b60015b7f6108217547eb0f6456375f9cad1dc0e5578e94c4334120e3e36fa8a89e5462ce600090815260205260ff167f462254436fc6d6fc89769c1be7cfba1d2f72eac77695d0f0241c9f493adcf1465550565b7f6108217547eb0f6456375f9cad1dc0e5578e94c4334120e3e36fa8a89e5462ce60009081526020527f462254436fc6d6fc89769c1be7cfba1d2f72eac77695d0f0241c9f493adcf14654156101a8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806102006023913960400191505060405180910390fd5b60009182526020829052604090912055565b6000818152602081815260409182902054825190815291517fbc729c7b482904bbcfeab92d0354ccfb7a805b45b9c1f13b723d751d99ac70ff9281900390910190a15056fe44656c656761746543616c6c4d6f636b2377726974653a205245564552545f464c4147a2646970667358221220fc9c6cf7240917b03618208c7d784cc7f1b48ebd3528932128734aa5a160d52c64736f6c63430007060033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): DelegateCallMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DelegateCallMock;
}
export {};
