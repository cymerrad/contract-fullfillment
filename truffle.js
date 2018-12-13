module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  },
  compilers: {
    solc: {
      version: "native",
      optimizer: {
        enabled: true, // Default: false
        runs: 300     // Default: 200
      },
    }
  }
};
