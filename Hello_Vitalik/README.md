# Hello Vitalik

What is learnt ?

1.  how to connect to the blockchain with ethers.provider . How?
    using the ethers default rpc provider
    `const provider  = new ethers.getDefaultProvider();`
    or using my own rpc
    ````
    const ALCHEMY_MAINNET_URL = https://eth-mainnet.g.alchemy.com/v2/MY_API_KEY';
        const provider = new ethers.JsonRpcProvider(ALCHEMY_MAINNET_URL);
        ```
    ````
2.  how to convert wei to ETH with the ethers.formatEther(); method
