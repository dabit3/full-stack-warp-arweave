import { warp } from './configureWarpServer.js'
import { transactionId } from '../transactionid.js'

async function read() {
  const contract = warp.contract(transactionId).connect();
  const { cachedValue } = await contract.readState();

  console.log('state: ', JSON.stringify(cachedValue))
}
read()