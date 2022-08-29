import { WarpFactory } from 'warp-contracts'
import fs from 'fs'

/*
*  environment can be 'local' | 'testnet' | 'mainnet' | 'custom';
*/

const environment = process.env.WARPENV || 'local'
let warp

if (environment === 'local') {
  warp = WarpFactory.forLocal()
} else if (environment === 'mainnet') {
  warp = WarpFactory.forMainnet()
} else {
  throw Error('environment not set properly...')
}

async function configureWallet() {
  try {
    if (environment === 'local') {
      return await warp.testing.generateWallet()
    } else if (environment === 'mainnet') {
      return JSON.parse(fs.readFileSync('../wallet.json', 'utf-8'))
    } else {
      throw Error('Wallet not configured properly...')
    }
  } catch (err) {
    throw Error('Wallet not configured properly...', err)
  }
}

export {
  configureWallet,
  warp
}
