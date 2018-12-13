pragma solidity ^0.5.0;

import "./zombiehelper.sol";

contract ZombieAttack is ZombieHelper {
  uint randNonce = 0;
  uint attackVictoryProbability = 70;

  function randMod(uint _modulus) internal returns(uint) {
    randNonce++;
    bytes memory data = new bytes(32 + 20 + 32);
    bytes32 tstamp = bytes32(now);
    bytes20 addr = bytes20(uint160(msg.sender));
    bytes32 nonce = bytes32(randNonce);
    // ignore-next-line
    assembly {
      let first := mload(tstamp)
      let second := mload(addr)
      let third := mload(nonce)

      // skip over the length field?
      let start := add(data, 0x20)

      codecopy(start, first, 32)
      start := add(start, mul(0x20, 0x20))
      codecopy(start, second, 20)
      start := add(start, mul(0x20, 0x14))
      codecopy(start, third, 32)
    }
    return uint(keccak256(data)) % _modulus;
  }

  function attack(uint _zombieId, uint _targetId) external onlyOwnerOf(_zombieId) {
    Zombie storage myZombie = zombies[_zombieId];
    Zombie storage enemyZombie = zombies[_targetId];
    uint rand = randMod(100);
    if (rand <= attackVictoryProbability) {
      myZombie.winCount++;
      myZombie.level++;
      enemyZombie.lossCount++;
      feedAndMultiply(_zombieId, enemyZombie.dna, "zombie");
    } else {
      myZombie.lossCount++;
      enemyZombie.winCount++;
      _triggerCooldown(myZombie);
    }
  }
}
