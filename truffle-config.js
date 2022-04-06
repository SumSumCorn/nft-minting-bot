require('dotenv').config()
const HDWalletProvider = require('truffle-hdwallet-provider-privkey');
module.exports = {
  // Configure networks (Localhost, Kovan, etc.)
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    kovan: {
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, `${process.env.INFURA_ID}`),
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 42
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: '0.8.9',
      optimizer: {
        enabled: true,
        runs: 200
      },
    },
  },
};