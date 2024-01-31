const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
    const { PRIVATE_KEY, SEPOLIA_RPC_URL, CONTRACT_ADDRESS, CONTRACT_NAME } =
        process.env;
    const provider = new ethers.JsonRpcProvider(SEPOLIA_RPC_URL);
    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

    // The ABI and binary files of the compiled contract
    const abi = fs.readFileSync(`./File_sol_${CONTRACT_NAME}.abi`, "utf-8");
    const binary = fs.readFileSync(`./File_sol_${CONTRACT_NAME}.bin`, "utf-8");

    // To load a deployed contract
    const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, wallet);
    // Call contract functions
    let storage = await contract.retrieve();
    console.log(`Store value : ${storage}`);

    console.log("Set value to 4 ...");
    const tx = await contract.store(4);
    await tx.wait();

    const flag = await getStorage(CONTRACT_ADDRESS, 0, provider);
    console.log(`Kaccak Flag : ${flag}`);
}

// To get storage datas of a contract
async function getStorage(contractAddress, slotNumber, provider) {
    return await provider.getStorage(contractAddress, slotNumber);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
