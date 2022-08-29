import { warp } from './configureWarpServer.js'
import { transactionId } from '../transactionid.js'

async function read() {
  const contract = warp.contract(transactionId).connect();
  const { cachedValue: value1 } = await contract.readState();

  console.log('value1: ', JSON.stringify(value1))
}
read()