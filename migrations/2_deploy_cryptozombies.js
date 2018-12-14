var ZombieOwnership = artifacts.require("ZombieOwnership");

// note to future self: 
// no linking is necessary when using libraries via internal calls

module.exports = function (deployer) {
	deployer.deploy(ZombieOwnership);
};
