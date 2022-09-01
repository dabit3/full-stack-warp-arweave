# Full stack blog with Arweave, Warp, and Next.js

This is an example of how to build a full stack application on Arweave with smart contracts running on Smarweave via Warp Protocol

## Getting started

### Prerequisites

To run this app, you should have:

- Node.js installed on your machine
- [ArConnect](https://www.arconnect.io/) wallet extension
  
Optional:
- To deploy to mainnet, retreive Arweave tokens (available from the faucet [here](https://faucet.arweave.net/))

## Running this project

To run the app, follow these steps:

1. Clone the project

```sh
git clone git@github.com:dabit3/full-stack-warp-arweave.git
```

2. Change into the directory and install the dependencies

```sh
cd full-stack-warp-arweave

npm install

# or

yarn
```

3. Deploy the contract to testnet

From the `warp` directory, run the following command:

```
node deploy
```

4. Run the Next.js app

From the root directory, run the following command:

```sh
npm run dev
```