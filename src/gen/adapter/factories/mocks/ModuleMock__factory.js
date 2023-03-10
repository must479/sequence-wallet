Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleMock__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [],
        name: "Pong",
        type: "event",
    },
    {
        inputs: [],
        name: "ping",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x6080604052348015600f57600080fd5b5060968061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80635c36b18614602d575b600080fd5b60336035565b005b6040517f4d015fcc2a20c24d7be893b3a525eac864b5a53a5f88ef7201a600465c73314e90600090a156fea26469706673582212201d4403fc62713fef9a01884050dcb3a8fdc4556f1617d27e2024feff5616936364736f6c63430007060033";
const isSuperArgs = (xs) => xs.length > 1;
class ModuleMock__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ModuleMock__factory = ModuleMock__factory;
ModuleMock__factory.bytecode = _bytecode;
ModuleMock__factory.abi = _abi;
