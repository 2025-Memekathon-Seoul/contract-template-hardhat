import hardhatToolboxMochaEthersPlugin from "@nomicfoundation/hardhat-toolbox-mocha-ethers";
import { configVariable, defineConfig } from "hardhat/config";

export default defineConfig({
  plugins: [hardhatToolboxMochaEthersPlugin],
  solidity: {
    profiles: {
      default: {
        version: "0.8.24", // You can use the other version, but we recommend 0.8.24 because its default EVM version is shanghai.
        settings: {
          evmVersion: "shanghai", // Memecore evm version is shanghai.
        },
      },
      production: {
        version: "0.8.24", // You can use the other version, but we recommend 0.8.24 because its default EVM version is shanghai.
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          evmVersion: "shanghai", // Memecore evm version is shanghai.
        },
      },
    },
  },
  networks: {
    hardhatMainnet: {
      type: "edr-simulated",
      chainType: "l1",
    },
    insectarium: {
      type: "http",
      chainType: "l1",
      url: "https://rpc.insectarium.memecore.net",
      accounts: [configVariable("DEPLOYER_PK")],
      chainId: 43522,
    },
  },
  chainDescriptors: {
    43522: {
      name: "insecatrium",
      blockExplorers: {
        blockscout: {
          name: "Insectarium",
          apiUrl: "https://insectarium.blockscout.memecore.com/api",
          url: "https://insectarium.blockscout.memecore.com",
        },
      },
    },
  },
});
