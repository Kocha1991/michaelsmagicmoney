import { SwapWidget } from '@uniswap/widgets'
import React, { useCallback, useRef, useEffect, useState } from 'react'
import { useActiveProvider } from '../../connectors'
import { JSON_RPC_URL } from '../../constants'
import Web3Connectors from '../Web3Connectors'

// ↓↓↓ Don't forget to import the widgets' fonts! ↓↓↓
import '@uniswap/widgets/fonts.css'
// ↑↑↑
import './UniswapWidget.scss'

interface Token {
  chainId: number
  address: string
  name: string
  symbol: string
  decimals: number
  logoURI: string
}

const TOKEN_LIST_URL = 'https://ipfs.io/ipns/tokens.uniswap.org'
const UNI = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'
const CUSTOM_TOKENS: Token[] = [
  {
    chainId: 8453, // Base Chain ID
    address: '0x7910737759C35533f1fd6C49aDEad1869573cDFC',
    name: 'Michael Scott',
    symbol: 'PAPER',
    decimals: 18,
    logoURI: 'https://imgproxy-mainnet.avascan.com/UqQfiSG5RD8FMjANsTt-DZUbgc7WqCtPJ2N674nb1nk/pr:thumb_32/aHR0cHM6Ly9jbXMtY2RuLmF2YXNjYW4uY29tL2NtczIvTWljaGFlbCBTY290dC43OWIzMTliMzE4NjM',
  },
  {
    "chainId": 1,
    "name": "Dope Wars Paper",
    "address": "0x7ae1d57b58fa6411f32948314badd83583ee0e8c",
    "decimals": 18,
    "symbol": "PAPER",
    "logoURI": "https://s2.coinmarketcap.com/static/img/coins/64x64/11675.png"
  }
]

const UniswapWidget: React.FC = () => {
  const [tokens, setTokens] = useState<Token[]>(CUSTOM_TOKENS)
  const connectors = useRef<HTMLDivElement>(null)
  const focusConnectors = useCallback(() => connectors.current?.focus(), [])
  const provider = useActiveProvider()

  useEffect(() => {
    const controller = new AbortController();
    fetch(TOKEN_LIST_URL, { signal: controller.signal })
      .then(response => response.json())
      .then(tokenList => {
        const mergedTokens = [...tokenList.tokens, ...CUSTOM_TOKENS]
        setTokens(mergedTokens)
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          console.error(err);
        }
      });
    return () => controller.abort();
  }, [])

  return (
    <div>
      <h2 className="swap-title">Swap</h2>
      <div className="swap-block">
        <SwapWidget
          jsonRpcEndpoint={JSON_RPC_URL}
          tokenList={tokens}
          provider={provider}
          locale="en-Us"
          onConnectWallet={focusConnectors}
          defaultInputTokenAddress="0x7910737759c35533f1fd6c49adead1869573cdfc"
          defaultInputAmount="1"
          defaultOutputTokenAddress={UNI}
          width="100%"
        />
      </div>
      <div ref={connectors} tabIndex={-1}>
        <Web3Connectors />
      </div>
    </div>
  )
}

export default UniswapWidget
