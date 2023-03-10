import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { ModuleCreator, ModuleCreatorInterface } from "../../../modules/commons/ModuleCreator";
declare type ModuleCreatorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ModuleCreator__factory extends ContractFactory {
    constructor(...args: ModuleCreatorConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ModuleCreator>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ModuleCreator;
    connect(signer: Signer): ModuleCreator__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061031d806100206000396000f3fe6080604052600436106100295760003560e01c806301ffc9a71461002e57806390042baf1461008e575b600080fd5b34801561003a57600080fd5b5061007a6004803603602081101561005157600080fd5b50357fffffffff000000000000000000000000000000000000000000000000000000001661015d565b604080519115158252519081900360200190f35b610134600480360360208110156100a457600080fd5b8101906020810181356401000000008111156100bf57600080fd5b8201836020820111156100d157600080fd5b803590602001918460018302840111640100000000831117156100f357600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506101c2945050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f90042baf0000000000000000000000000000000000000000000000000000000014156101b1575060016101bd565b6101ba82610276565b90505b919050565b600033301461021c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806102c16027913960400191505060405180910390fd5b81516020830134f06040805173ffffffffffffffffffffffffffffffffffffffff8316815290519192507fa506ad4e7f05eceba62a023c3219e5bd98a615f4fa87e2afb08a2da5cf62bf0c919081900360200190a1919050565b7fffffffff0000000000000000000000000000000000000000000000000000000081167f01ffc9a7000000000000000000000000000000000000000000000000000000001491905056fe4d6f64756c6553656c6641757468236f6e6c7953656c663a204e4f545f415554484f52495a4544a2646970667358221220d669ed848ba5122fb5005aa2b1b3d39f39887cfbb9231db8cce6d67b4861545664736f6c63430007060033";
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
    static createInterface(): ModuleCreatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ModuleCreator;
}
export {};
