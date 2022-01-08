// https://eth-ropsten.alchemyapi.io/v2/mHRfhLTexj81Y_ukVvFMlk1j-24pI95D

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/mHRfhLTexj81Y_ukVvFMlk1j-24pI95D",
      accounts: [
        "559eb1f3b3cc0e2f9944aaaf1417f9cb046f4ad3ddb1c5a6e8a3451e84128d88",
      ],
    },
  },
};
