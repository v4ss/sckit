# Generic script to Deploy & Interact with smart contracts

| Author | v4ss[https://github.com/v4ss] |
| ------ | ----------------------------- |

## Install

1. Clone this repo on your computer

```bash
git clone https://github.com/v4ss/sckit.git
cd sckit
```

2. Install the dependencies :

```bash
yarn
#OR
npm install
```

3. You can update the package with the command :

```bash
yarn update-dep
#OR
npm run update-dep
```

## Setting up the kit

1. Rename the `.env.exemple` to `.env` and write your private key, RPC URL (blockchain network) you want to use and the name of the contract you want to deploy/interact

2. Paste the code of the smart contract in the `File.sol`.

3. Compile your contract with :

```bash
yarn compile
#OR
npm run compile
```

## Deployment

Run the `deploy.js` script with :

```bash
node deploy.js
```

## Interaction

Write the contract address you want to interact in the `.env` file.
Write your code in `interact.js`. You can using the code example to help you.

To launch the script, run :

```bash
node interact.js
```
