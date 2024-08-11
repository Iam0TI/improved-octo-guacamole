const {ethers} = require("ethers");

const provider  = new ethers.getDefaultProvider();

const main = async () => {
    const balance = await provider.getBalance(`vitalik.eth`);
    const transaction = await provider.getTransaction("0xee017c84f5e2bbf0ea86f676b6da27c68c50410327c76f4956b15c5c7d226624");
    const transactionr = await provider.getTransactionReceipt("0xee017c84f5e2bbf0ea86f676b6da27c68c50410327c76f4956b15c5c7d226624");
    const block = await provider.getBlock("0x4cd5711fecc0d1cd1919bef41e0f434be640a7a2b452b5e4d3dd5a7aa8538505");
    const network = await provider.getNetwork();
    console.log(network.toJson());
    console.log(`\n Vitalik ETH balance is \n${ethers.formatEther(balance)}`);
    console.log(transaction);
    console.log(transactionr);
    console.log(block);
}
main()