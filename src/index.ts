import Web3 = require("web3");
import contract from "truffle-contract";

const provider = new Web3.providers.HttpProvider('http://localhost:8545');
const web3 = new Web3(provider);

const ZombieArtifact = require('../build/contracts/ZombieOwnership.json');
const Zombie = contract(ZombieArtifact);

interface ZombieInterface {

}

(async () => {
	console.log("version:", web3.version);
	const addresses = await web3.eth.getAccounts();
	const addr = addresses[0];

	// Zombie.deployed().then((instance: ZombieInterface) => {

	// })
	console.log(addr);

})()