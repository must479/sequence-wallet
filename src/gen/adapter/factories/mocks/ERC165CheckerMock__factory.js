Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC165CheckerMock__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_contract",
                type: "address",
            },
            {
                internalType: "bytes4",
                name: "_interfaceId",
                type: "bytes4",
            },
        ],
        name: "doesContractImplementInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506101f7806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063e9c5438414610030575b600080fd5b61008b6004803603604081101561004657600080fd5b50803573ffffffffffffffffffffffffffffffffffffffff1690602001357fffffffff000000000000000000000000000000000000000000000000000000001661009f565b604080519115158252519081900360200190f35b600080806100cd857f01ffc9a700000000000000000000000000000000000000000000000000000000610174565b90925090508115806100dd575080155b156100ed5760009250505061016e565b610117857fffffffff00000000000000000000000000000000000000000000000000000000610174565b909250905081158061012857508015155b156101385760009250505061016e565b6101428585610174565b90925090506001821480156101575750806001145b156101675760019250505061016e565b6000925050505b92915050565b6040517f01ffc9a7000000000000000000000000000000000000000000000000000000008082526004820183905260009182919060208160248189617530fa90519096909550935050505056fea2646970667358221220ffd8b9286609a59fb40fbfbdaf44c7adc2c9ebb4c714fe1f5324b9b4a5dd31c064736f6c63430007060033";
const isSuperArgs = (xs) => xs.length > 1;
class ERC165CheckerMock__factory extends ethers_1.ContractFactory {
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
exports.ERC165CheckerMock__factory = ERC165CheckerMock__factory;
ERC165CheckerMock__factory.bytecode = _bytecode;
ERC165CheckerMock__factory.abi = _abi;
