---
marp: true
---

# Hello Vitalik

What is learnt ?

1. how to connect to the blockchain with ethers.provider . How?

using the ethers default rpc provider

`const provider = new ethers.getDefaultProvider();`

or using my own rpc

```

const ALCHEMY_MAINNET_URL = https://eth-mainnet.g.alchemy.com/v2/MY_API_KEY';

const provider = new ethers.JsonRpcProvider(ALCHEMY_MAINNET_URL);

```

It also allow us read the blockchain state . Below is the definition from the docs

```
A Provider is a read-only connection to the blockchain, which allows querying the blockchain state, such as account, block or transaction details, querying event logs or evaluating read-only code using call.
```

2.  how to convert wei to ETH with the ethers.formatEther(); method
