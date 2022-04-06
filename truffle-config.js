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
    ropsten: {
      provider: () => new HDWalletProvider([process.env.PRIVATE_KEY], `https://ropsten.infura.io/v3/${process.env.INFURA_ID}`),
      network_id: 3,
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    },
    kovan: {
      provider: () => new HDWalletProvider([process.env.PRIVATE_KEY], `https://kovan.infura.io/v3/${process.env.INFURA_ID}`),
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