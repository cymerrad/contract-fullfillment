"use strict";
/**
 * @type {import('../types/truffle-contracts').ZombieOwnershipContract}
 */
var Zombie = artifacts.require('ZombieOwnership');

contract("ZombieOwnership", (accounts) => {
	it("Contract should be created with first available account", async () => {
		const instance = await Zombie.deployed();
		const owner = await instance.owner();
		assert.equal(owner, accounts[0], "or maybe not?");
	});


})