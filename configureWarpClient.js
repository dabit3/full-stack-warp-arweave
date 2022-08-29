import { WarpFactory } from 'warp-contracts'
import { transactionId } from './transactionid'

const environment = process.env.NEXT_PUBLIC_WARPENV || 'local'
let warp = WarpFactory.forLocal()
if (environment == 'mainnet') {
  warp = WarpFactory.forMainnet()
} 

const contract = warp.contract(transactionId).connect();

export {
  contract
}
