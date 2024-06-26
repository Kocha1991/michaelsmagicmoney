export interface NativeCurrency {
  name: string;
  symbol: string;
  decimals: number;
}

export interface ChainInfo {
  explorer: string;
  label: string;
  nativeCurrency: NativeCurrency;
  rpcUrl: string;
}

export const MAINNET_CHAIN_ID = '1';
export const ARBITRUM_CHAIN_ID = '42161';
export const BASE_CHAIN_ID = '8453';

export const CHAIN_INFO: { [key: string]: ChainInfo } = {
  [MAINNET_CHAIN_ID]: {
    explorer: 'https://mainnet.base.org',
    label: 'Ethereum',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrl: 'https://cloudflare-eth.com', // Замініть на ваш RPC URL
  },
  [ARBITRUM_CHAIN_ID]: {
    explorer: 'https://polygonscan.com/',
    label: 'Polygon',
    nativeCurrency: { name: 'Polygon Matic', symbol: 'MATIC', decimals: 18 },
    rpcUrl: 'https://arb1.arbitrum.io/rpc', // Замініть на ваш RPC URL
  },
  [BASE_CHAIN_ID]: {
    explorer: 'https://basescan.org/',
    label: 'Base',
    nativeCurrency: { name: 'Base Mainnet', symbol: 'ETH', decimals: 18 },
    rpcUrl: 'https://mainnet.base.org', // Замініть на ваш RPC URL
  },
};
