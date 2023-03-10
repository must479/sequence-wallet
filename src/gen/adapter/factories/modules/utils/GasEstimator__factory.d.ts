import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { GasEstimator, GasEstimatorInterface } from "../../../modules/utils/GasEstimator";
declare type GasEstimatorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GasEstimator__factory extends ContractFactory {
    constructor(...args: GasEstimatorConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GasEstimator>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GasEstimator;
    connect(signer: Signer): GasEstimator__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610208806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80630eb34cd314610030575b600080fd5b6100bd6004803603604081101561004657600080fd5b73ffffffffffffffffffffffffffffffffffffffff823516919081019060408101602082013564010000000081111561007e57600080fd5b82018360208201111561009057600080fd5b803590602001918460018302840111640100000000831117156100b257600080fd5b509092509050610145565b60405180841515815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b838110156101085781810151838201526020016100f0565b50505050905090810190601f1680156101355780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b600060606000805a90508673ffffffffffffffffffffffffffffffffffffffff168686604051808383808284376040519201945060009350909150508083038183865af19150503d80600081146101b8576040519150601f19603f3d011682016040523d82523d6000602084013e6101bd565b606091505b5090945092505a81039150509350935093905056fea26469706673582212202294382602e928b6c962b89f8f706713a73b32b446a191ebcfa9b77f7004d19064736f6c63430007060033";
    static readonly abi: {
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
    }[];
    static createInterface(): GasEstimatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GasEstimator;
}
export {};
