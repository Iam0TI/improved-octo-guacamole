const {ethers} = require("ethers");

const provider  = new ethers.getDefaultProvider();

const main = async () => {
    const balance = await provider.getBalance(`vitalik.eth`);
    console.log(`\n Vitalik ETH balance is \n${ethers.formatEther(balance)}`);
}
main()