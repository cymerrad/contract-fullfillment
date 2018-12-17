// import Web3 = require("web3");
// import contract, { TruffleContract } from "truffle-contract";
// import { ZombieOwnershipInstance } from "../types/truffle-contracts"

// const provider = new Web3.providers.HttpProvider('http://localhost:8545');
// const web3 = new Web3(provider);


// const ZombieArtifact = require('../build/contracts/ZombieOwnership.json');
// const Zombie: TruffleContract<ZombieOwnershipInstance> = contract(ZombieArtifact);
// Zombie.setProvider(provider);


// contract("kurwa jak", () => {
// 	it("should pass", () => {

// 	})
// })

/**
 * @type {import('../types/truffle-contracts').ZombieOwnershipContract}
 */
var Zombie = artifacts.require('ZombieOwnership');

contract("alalala", (accounts) => {
	console.log(accounts);

	it("should not suck", () => {
		return Zombie.deployed().then(instance => {
			console.log(instance.zombies());
		})
	})
})