import { ChainId } from '@ggbbest/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x81F58E4FA323926E772886C93B5570420DFC4169', // TODO
  [ChainId.TESTNET]: '0x81F58E4FA323926E772886C93B5570420DFC4169'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
