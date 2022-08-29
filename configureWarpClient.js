import { WarpFactory } from 'warp-contracts'
import { transactionId } from './transactionid'

const environment = process.env.NEXT_PUBLIC_WARPENV || 'local'
let contract 
let warp

async function getContract() {
  if (environment == 'local') {
    warp = WarpFactory.forLocal()
    const wallet = await warp.testing.generateWallet()
    contract = warp.contract(transactionId).connect(wallet)
  } else if (environment === 'mainnet') {
    warp = WarpFactory.forMainnet()
    contract = warp.contract(transactionId).connect()
  } else {
    throw new Error('Environment configured improperly...')
  }
  return contract
}

export {
  getContract
}
