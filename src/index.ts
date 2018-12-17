import Web3 = require("web3");
import contract, { TruffleContract } from "truffle-contract";
import { ZombieOwnershipInstance } from "../types/truffle-contracts"

const provider = new Web3.providers.HttpProvider('http://localhost:8545');
const web3 = new Web3(provider);

const ZombieArtifact = require('../build/contracts/ZombieOwnership.json');
const Zombie: TruffleContract<ZombieOwnershipInstance> = contract(ZombieArtifact);
Zombie.setProvider(provider);

(async () => {
	console.log("version:", web3.version);
	const addresses = await web3.eth.getAccounts();
	const addr = addresses[0];

	Zombie.deployed().then(instance => {
		instance.createRandomZombie("dupa", { from: addr })
			.then((val) => {
				console.log("fullfilled", val);
			})
	})


})()