import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { ModuleUpdate, ModuleUpdateInterface } from "../../../modules/commons/ModuleUpdate";
declare type ModuleUpdateConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ModuleUpdate__factory extends ContractFactory {
    constructor(...args: ModuleUpdateConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ModuleUpdate>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ModuleUpdate;
    connect(signer: Signer): ModuleUpdate__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610333806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806301ffc9a71461003b578063025b22bc1461008e575b600080fd5b61007a6004803603602081101561005157600080fd5b50357fffffffff00000000000000000000000000000000000000000000000000000000166100c3565b604080519115158252519081900360200190f35b6100c1600480360360208110156100a457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610128565b005b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f025b22bc00000000000000000000000000000000000000000000000000000000141561011757506001610123565b61012082610249565b90505b919050565b333014610180576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806102d76027913960400191505060405180910390fd5b61019f8173ffffffffffffffffffffffffffffffffffffffff16610293565b6101f4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603981526020018061029e6039913960400191505060405180910390fd5b6101fd81610299565b6040805173ffffffffffffffffffffffffffffffffffffffff8316815290517f310ba5f1d2ed074b51e2eccd052a47ae9ab7c6b800d1fca3db3999d6a592ca039181900360200190a150565b7fffffffff0000000000000000000000000000000000000000000000000000000081167f01ffc9a70000000000000000000000000000000000000000000000000000000014919050565b3b151590565b305556fe4d6f64756c6555706461746523757064617465496d706c656d656e746174696f6e3a20494e56414c49445f494d504c454d454e544154494f4e4d6f64756c6553656c6641757468236f6e6c7953656c663a204e4f545f415554484f52495a4544a2646970667358221220668d00a03e5c4690df8a8ac6cbc85c89c476c71a4d1fa05f2fc36558bf8d3f9264736f6c63430007060033";
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
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ModuleUpdateInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ModuleUpdate;
}
export {};
