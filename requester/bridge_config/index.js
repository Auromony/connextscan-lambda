const chains = [
  {
    id: 'eth',
    title: 'Ethereum',
    short_name: 'ETH',
    chain_id: 1,
    confirmations: 7,
    provider_params: [
      {
        chainId: '0x1',
        chainName: 'Ethereum Mainnet',
        rpcUrls: ['https://api.mycryptoapi.com/eth', 'https://cloudflare-eth.com'],
        nativeCurrency: {
          name: 'Ether',
          symbol: 'ETH',
          decimals: 18,
        },
        blockExplorerUrls: ['https://etherscan.io'],
      },
    ],
  },
  {
    id: 'bsc',
    title: 'Binance Smart Chain',
    short_name: 'BSC',
    chain_id: 56,
    confirmations: 10,
    provider_params: [
      {
        chainId: '0x38',
        chainName: 'Binance Smart Chain Mainnet',
        rpcUrls: ['https://bsc-dataseed1.ninicoin.io', 'https://bsc-dataseed2.ninicoin.io', 'https://bsc-dataseed3.ninicoin.io', 'https://bsc-dataseed1.binance.org', 'https://bsc-dataseed2.binance.org', 'https://bsc-dataseed3.binance.org', 'https://bsc-dataseed4.binance.org', 'https://bsc-dataseed1.defibit.io', 'https://bsc-dataseed2.defibit.io', 'https://bsc-dataseed3.defibit.io', 'https://bsc-dataseed4.defibit.io', 'wss://bsc-ws-node.nariox.org'],
        nativeCurrency: {
          name: 'Binance Chain Native Token',
          symbol: 'BNB',
          decimals: 18,
        },
        blockExplorerUrls: ['https://bscscan.com'],
      },
    ],
  },
  {
    id: 'matic',
    title: 'Polygon',
    short_name: 'MATIC',
    chain_id: 137,
    confirmations: 60,
    provider_params: [
      {
        chainId: '0x89',
        chainName: 'Matic Mainnet',
        rpcUrls: ['https://polygon-rpc.com', 'https://polygon-mainnet.infura.io/v3/e02a34c8aa5d4156aeed1142ea2173c8'/*, 'https://rpc-mainnet.matic.network'*/, 'wss://ws-mainnet.matic.network'],
        nativeCurrency: {
          name: 'Matic',
          symbol: 'MATIC',
          decimals: 18,
        },
        blockExplorerUrls: ['https://polygonscan.com/'],
      },
    ],
  },
  {
    id: 'arb',
    title: 'Arbitrum',
    short_name: 'ARB',
    chain_id: 42161,
    confirmations: 10,
    provider_params: [
      {
        chainId: '0xa4b1',
        chainName: 'Arbitrum One',
        rpcUrls: ['https://arb1.arbitrum.io/rpc'],
        nativeCurrency: {
          name: 'Arbitrum Ether',
          symbol: 'tETH',
          decimals: 18,
        },
        blockExplorerUrls: ['https://arbiscan.io'],
      },
    ],
  },
  {
    id: 'opt',
    title: 'Optimism',
    short_name: 'OPT',
    chain_id: 10,
    confirmations: 10,
    provider_params: [
      {
        chainId: '0xa',
        chainName: 'Optimism Mainnet',
        rpcUrls: ['https://mainnet.optimism.io'],
        nativeCurrency: {
          name: 'Ether',
          symbol: 'OETH',
          decimals: 18,
        },
        blockExplorerUrls: ['https://optimistic.etherscan.io'],
      },
    ],
  },
  {
    id: 'avax',
    title: 'Avalanche',
    short_name: 'AVAX',
    chain_id: 43114,
    confirmations: 10,
    provider_params: [
      {
        chainId: '0xa86a',
        chainName: 'Avalanche Mainnet C-Chain',
        rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
        nativeCurrency: {
          name: 'Avalanche',
          symbol: 'AVAX',
          decimals: 18,
        },
        blockExplorerUrls: ['https://cchain.explorer.avax.network/'],
      },
    ],
  },
  {
    id: 'ftm',
    title: 'Fantom',
    short_name: 'FTM',
    chain_id: 250,
    confirmations: 20,
    provider_params: [
      {
        chainId: '0xfa',
        chainName: 'Fantom Opera',
        rpcUrls: ['https://rpc.ftm.tools', 'https://rpcapi.fantom.network'],
        nativeCurrency: {
          name: 'Fantom',
          symbol: 'FTM',
          decimals: 18,
        },
        blockExplorerUrls: ['https://ftmscan.com'],
      },
    ],
  },
  {
    id: 'xdai',
    title: 'xDAI Chain',
    short_name: 'xDAI',
    chain_id: 100,
    confirmations: 10,
    provider_params: [
      {
        chainId: '0x64',
        chainName: 'xDAI Chain',
        rpcUrls: ['https://rpc.xdaichain.com', 'https://xdai.poanetwork.dev', 'wss://rpc.xdaichain.com/wss', 'wss://xdai.poanetwork.dev/wss'/*, 'http://xdai.poanetwork.dev'*/, 'https://dai.poa.network', 'ws://xdai.poanetwork.dev:8546'],
        nativeCurrency: {
          name: 'xDAI',
          symbol: 'xDAI',
          decimals: 18,
        },
        blockExplorerUrls: ['https://blockscout.com/poa/xdai/'],
      },
    ],
  },
  {
    id: 'movr',
    title: 'Moonriver',
    short_name: 'MOVR',
    chain_id: 1285,
    confirmations: 10,
    provider_params: [
      {
        chainId: '0x0505',
        chainName: 'Moonriver',
        rpcUrls: ['https://rpc.moonriver.moonbeam.network'],
        nativeCurrency: {
          name: 'Moonriver',
          symbol: 'MOVR',
          decimals: 18,
        },
        blockExplorerUrls: ['https://blockscout.moonriver.moonbeam.network'],
      },
    ],
  },
];

const chains_testnet = [
  {
    id: 'rop',
    title: 'Ropsten',
    short_name: 'ROP',
    chain_id: 3,
    confirmations: 1,
    provider_params: [
      {
        chainId: '0x3',
        chainName: 'Ethereum Testnet Ropsten',
        rpcUrls: ['https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
        nativeCurrency: {
          name: 'Ropsten Ether',
          symbol: 'ROP',
          decimals: 18,
        },
        blockExplorerUrls: ['https://ropsten.etherscan.io'],
      },
    ],
  },
  {
    id: 'rin',
    title: 'Rinkeby',
    short_name: 'RIN',
    chain_id: 4,
    confirmations: 1,
    provider_params: [
      {
        chainId: '0x4',
        chainName: 'Ethereum Testnet Rinkeby',
        rpcUrls: ['https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
        nativeCurrency: {
          name: 'Rinkeby Ether',
          symbol: 'RIN',
          decimals: 18,
        },
        blockExplorerUrls: ['https://rinkeby.etherscan.io'],
      },
    ],
  },
  {
    id: 'gor',
    title: 'Görli',
    short_name: 'GOR',
    chain_id: 5,
    confirmations: 1,
    provider_params: [
      {
        chainId: '0x5',
        chainName: 'Ethereum Testnet Görli',
        rpcUrls: ['https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
        nativeCurrency: {
          name: 'Görli Ether',
          symbol: 'GOR',
          decimals: 18,
        },
        blockExplorerUrls: ['https://goerli.etherscan.io'],
      },
    ],
  },
  {
    id: 'kov',
    title: 'Kovan',
    short_name: 'KOV',
    chain_id: 42,
    confirmations: 1,
    provider_params: [
      {
        chainId: '0x2a',
        chainName: 'Ethereum Testnet Kovan',
        rpcUrls: ['https://kovan.poa.network', 'http://kovan.poa.network:8545', 'ws://kovan.poa.network:8546'],
        nativeCurrency: {
          name: 'Kovan Ether',
          symbol: 'KOV',
          decimals: 18,
        },
        blockExplorerUrls: ['https://kovan.etherscan.io'],
      },
    ],
  },
  {
    id: 'bsct',
    title: 'Binance Smart Chain Testnet',
    short_name: 'BSCT',
    chain_id: 97,
    confirmations: 1,
    provider_params: [
      {
        chainId: '0x61',
        chainName: 'Binance Smart Chain Testnet',
        rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545', 'https://data-seed-prebsc-2-s1.binance.org:8545', 'https://data-seed-prebsc-1-s2.binance.org:8545', 'https://data-seed-prebsc-2-s2.binance.org:8545', 'https://data-seed-prebsc-1-s3.binance.org:8545', 'https://data-seed-prebsc-2-s3.binance.org:8545'],
        nativeCurrency: {
          name: 'Binance Chain Native Token',
          symbol: 'BNB',
          decimals: 18,
        },
        blockExplorerUrls: ['https://testnet.bscscan.com'],
      },
    ],
  },
  {
    id: 'mum',
    title: 'Mumbai',
    short_name: 'MUM',
    chain_id: 80001,
    confirmations: 1,
    provider_params: [
      {
        chainId: '0x13881',
        chainName: 'Matic Testnet Mumbai',
        rpcUrls: ['https://rpc-mumbai.maticvigil.com/', 'https://rpc-mumbai.matic.today', 'wss://ws-mumbai.matic.today'],
        nativeCurrency: {
          name: 'Matic',
          symbol: 'MATIC',
          decimals: 18,
        },
        blockExplorerUrls: ['https://explorer-mumbai.maticvigil.com'],
      },
    ],
  },
  {
    id: 'arbr',
    title: 'Arbitrum Rinkeby',
    short_name: 'ARBR',
    chain_id: 421611,
    confirmations: 1,
    provider_params: [
      {
        chainId: '0x66eeb',
        chainName: 'Arbitrum Testnet Rinkeby',
        rpcUrls: ['https://rinkeby.arbitrum.io/rpc'],
        nativeCurrency: {
          name: 'Arbitrum Ether',
          symbol: 'tETH',
          decimals: 18,
        },
        blockExplorerUrls: ['https://rinkeby-explorer.arbitrum.io/#/'],
      },
    ],
  },
  {
    id: 'optk',
    title: 'Optimism Kovan',
    short_name: 'OPTK',
    chain_id: 69,
    confirmations: 1,
    provider_params: [
      {
        chainId: '0x45',
        chainName: 'Optimism Testnet Kovan',
        rpcUrls: ['https://kovan.optimism.io'],
        nativeCurrency: {
          name: 'Ether',
          symbol: 'ETH',
          decimals: 18,
        },
        blockExplorerUrls: ['https://kovan-optimistic.etherscan.io'],
      },
    ],
  },
];

const assets = [
  {
    id: 'usdt',
    symbol: 'USDT',
    contracts: [
      {
        contract_address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        chain_id: 1,
        contract_decimals: 6,
      },
      {
        contract_address: '0x55d398326f99059ff775485246999027b3197955',
        chain_id: 56,
        contract_decimals: 18,
      },
      {
        contract_address: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
        chain_id: 137,
        contract_decimals: 6,
      },
      {
        contract_address: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
        chain_id: 42161,
        contract_decimals: 6,
      },
      {
        contract_address: '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58',
        chain_id: 10,
        contract_decimals: 6,
      },
      {
        contract_address: '0xc7198437980c041c805a1edcba50c1ce5db95118',
        chain_id: 43114,
        contract_decimals: 6,
      },
      {
        contract_address: '0x049d68029688eabf473097a2fc38ef61633a3c7a',
        chain_id: 250,
        contract_decimals: 6,
      },
      {
        contract_address: '0x4ecaba5870353805a9f068101a40e0f32ed605c6',
        chain_id: 100,
        contract_decimals: 6,
      },
      {
        contract_address: '0xb44a9b6905af7c801311e8f4e76932ee959c663c',
        chain_id: 1285,
        contract_decimals: 6,
      },
    ],
  },
  {
    id: 'usdc',
    symbol: 'USDC',
    contracts: [
      {
        contract_address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        chain_id: 1,
        contract_decimals: 6,
      },
      {
        contract_address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
        chain_id: 56,
        contract_decimals: 18,
      },
      {
        contract_address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
        chain_id: 137,
        contract_decimals: 6,
      },
      {
        contract_address: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
        chain_id: 42161,
        contract_decimals: 6,
      },
      {
        contract_address: '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
        chain_id: 10,
        contract_decimals: 6,
      },
      {
        contract_address: '0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664',
        chain_id: 43114,
        contract_decimals: 6,
      },
      {
        contract_address: '0x04068da6c83afcfa0e13ba15a6696662335d5b75',
        chain_id: 250,
        contract_decimals: 6,
      },
      {
        contract_address: '0xddafbb505ad214d7b80b1f830fccc89b60fb7a83',
        chain_id: 100,
        contract_decimals: 6,
      },
      {
        contract_address: '0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d',
        chain_id: 1285,
        contract_decimals: 6,
      },
    ],
  },
  {
    id: 'dai',
    symbol: 'DAI',
    contracts: [
      {
        contract_address: '0x6b175474e89094c44da98b954eedeac495271d0f',
        chain_id: 1,
        contract_decimals: 18,
      },
      {
        contract_address: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
        chain_id: 56,
        contract_decimals: 18,
      },
      {
        contract_address: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
        chain_id: 137,
        contract_decimals: 18,
      },
      {
        contract_address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
        chain_id: 42161,
        contract_decimals: 18,
      },
      {
        contract_address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
        chain_id: 10,
        contract_decimals: 18,
      },
      {
        contract_address: '0xd586e7f844cea2f87f50152665bcbc2c279d8d70',
        chain_id: 43114,
        contract_decimals: 18,
      },
      {
        contract_address: '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e',
        chain_id: 250,
        contract_decimals: 18,
      },
      {
        contract_address: '0x0000000000000000000000000000000000000000',
        chain_id: 100,
        contract_decimals: 18,
      },
    ],
  },
  {
    id: 'eth',
    symbol: 'ETH',
    contracts: [
      {
        contract_address: '0x0000000000000000000000000000000000000000',
        chain_id: 1,
        contract_decimals: 18,
      },
      {
        contract_address: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
        chain_id: 56,
        contract_decimals: 18,
      },
      {
        contract_address: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
        chain_id: 137,
        contract_decimals: 18,
      },
      {
        contract_address: '0x0000000000000000000000000000000000000000',
        chain_id: 42161,
        contract_decimals: 18,
      },
      {
        contract_address: '0x0000000000000000000000000000000000000000',
        chain_id: 10,
        contract_decimals: 18,
      },
      {
        contract_address: '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab',
        chain_id: 43114,
        contract_decimals: 18,
      },
      {
        contract_address: '0x74b23882a30290451a17c44f4f05243b6b58c76d',
        chain_id: 250,
        contract_decimals: 18,
      },
    ],
  },
];

const assets_testnet = [
  {
    id: 'test',
    symbol: 'TEST',
    contracts: [
      {
        contract_address: '0xe71678794fff8846bff855f716b0ce9d9a78e844',
        chain_id: 3,
        contract_decimals: 18,
      },
      {
        contract_address: '0x9ac2c46d7acc21c881154d57c0dc1c55a3139198',
        chain_id: 4,
        contract_decimals: 18,
      },
      {
        contract_address: '0x8a1cad3703e0beae0e0237369b4fcd04228d1682',
        chain_id: 5,
        contract_decimals: 18,
      },
      {
        contract_address: '0xe71678794fff8846bff855f716b0ce9d9a78e844',
        chain_id: 42,
        contract_decimals: 18,
      },
      {
        contract_address: '0xd86bcb7d85163fbc81756bb9cc22225d6abccadb',
        chain_id: 97,
        contract_decimals: 18,
      },
      {
        contract_address: '0xe71678794fff8846bff855f716b0ce9d9a78e844',
        chain_id: 80001,
        contract_decimals: 18,
      },
      {
        contract_address: '0xe71678794fff8846bff855f716b0ce9d9a78e844',
        chain_id: 421611,
        contract_decimals: 18,
      },
      {
        contract_address: '0x29fbdcf834d3f85dd5d25adedba19380837cdf21',
        chain_id: 69,
        contract_decimals: 6,
      },
    ],
  },
];

module.exports = { chains, chains_testnet, assets, assets_testnet };