## Description

This template is for 2025 Memekathon Seoul participants using hardhatV3.<br>
It contains configurations for deploying and verifying contracts on Insectarium (MemeCore testnet).<br>
See `hardhat.config.ts` for details.

## Prerequisites

**Install dependencies**

```bash
npm install
```

## Deploy Contracts

**Set private key**

```bash
 export DEPLOYER_PK="0xaa...cc"
```

**Run deployment script**

```bash
npx hardhat ignition deploy <ModulePath> --network insectarium
```

**_Example:_**

```bash
npx hardhat ignition deploy ./ignition/modules/Counter.ts --network insectarium
```

## Verify Contracts

```bash
npx hardhat verify blockscout <ContractAddress> --network insectarium
```

**_Example:_**

```bash
npx hardhat verify blockscout 0x1234...abcd --network insectarium
```

## Documentation

- https://docs.memecore.com/
- https://hardhat.org/docs/getting-started#getting-started-with-hardhat-3
