import { SwapWidget } from '@uniswap/widgets'
import React, { useCallback, useRef } from 'react'
import { useActiveProvider } from '../../connectors'
import { JSON_RPC_URL } from '../../constants'
import Web3Connectors from '../Web3Connectors'

// ↓↓↓ Don't forget to import the widgets' fonts! ↓↓↓
import '@uniswap/widgets/fonts.css'
// ↑↑↑
import './UniswapWidget.scss';

const TOKEN_LIST = 'https://ipfs.io/ipns/tokens.uniswap.org'
const UNI = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'

const UniswapWidget = () => {
  // When a user clicks "Connect your wallet" in the SwapWidget, this callback focuses the connectors.
  const connectors = useRef<HTMLDivElement>(null)
  const focusConnectors = useCallback(() => connectors.current?.focus(), [])

  // The provider to pass to the SwapWidget.
  // This is a Web3Provider (from @ethersproject) supplied by @web3-react; see ./connectors.ts.
  const provider = useActiveProvider()

  return (
    <div>
      <h2 className="swap-title">Swap</h2>
      <div className='swap-block'>
        <SwapWidget 
          jsonRpcEndpoint={JSON_RPC_URL}
          tokenList={TOKEN_LIST}
          provider={provider}
          locale="en-Us"
          onConnectWallet={focusConnectors}
          defaultInputTokenAddress='0x7910737759c35533f1fd6c49adead1869573cdfc'
          defaultInputAmount="1"
          defaultOutputTokenAddress={UNI}
          width='100%'
        />
      </div>
      <div ref={connectors} tabIndex={-1}>
        <Web3Connectors />
      </div>
    </div>
  )
}

export default UniswapWidget
