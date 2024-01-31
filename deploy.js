const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
    const { PRIVATE_KEY, SEPOLIA_RPC_URL, CONTRACT_NAME } = process.env;
    const provider = new ethers.JsonRpcProvider(SEPOLIA_RPC_URL);
    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

    // The ABI and binary files of the compiled contract
    const abi = fs.readFileSync(`./File_sol_${CONTRACT_NAME}.abi`, "utf-8");
    const binary = fs.readFileSync(`./File_sol_${CONTRACT_NAME}.bin`, "utf-8");

    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);

    console.log("Deploying, please wait...");
    const contract = await contractFactory.deploy();
    const deploymentReceipt = await contract.waitForDeployment();
    console.log(deploymentReceipt);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
