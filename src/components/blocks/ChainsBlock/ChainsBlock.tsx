import { Block } from '../../layout/Block/Block'
import { ChainCardsGrid } from '../../grids/ChainCardsGrid/ChainCardsGrid'

const items = [
  {
    title: 'Binance Smart Chain',
    symbol: 'BinanceSmartChain',
    imgSrc: 'https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png?1547034615',
  },
  {
    title: 'Ethereum',
    symbol: 'ETH',
    imgSrc: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880',
  },
  {
    title: 'Solana',
    symbol: 'SOL',
    imgSrc: 'https://assets.coingecko.com/coins/images/4128/small/coinmarketcap-solana-200.png?1616489452',
  },
  {
    title: 'Optimism',
    symbol: 'OPTIMISM',
    imgSrc: 'https://assets.coingecko.com/coins/images/14570/small/optimism.png?1617142620',
  },
  {
    title: 'Polygon',
    symbol: 'MATIC',
    imgSrc: 'https://assets.coingecko.com/coins/images/4713/small/matic___polygon.jpg?1612939050',
  },
  {
    title: 'Avalanche',
    symbol: 'AVAX',
    imgSrc: 'https://assets.coingecko.com/coins/images/12559/small/coin-round-red.png?1604021818',
  },
  {
    title: 'Fantom',
    symbol: 'Fantom',
    imgSrc: 'https://assets.coingecko.com/coins/images/4001/small/Fantom.png?1558015016',
  },
  {
    title: 'Harmony',
    symbol: 'ONE',
    imgSrc: 'https://assets.coingecko.com/coins/images/4344/small/Y88JAze.png?1608111978',
  },
  {
    title: 'xDai',
    symbol: 'STAKE',
    imgSrc: 'https://assets.coingecko.com/coins/images/11375/small/xdai.png?1620827593',
  },
  {
    title: 'Binance Chain',
    symbol: 'BNB',
    imgSrc: 'https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png?1547034615',
  },

  {
    title: 'Heco',
    symbol: 'HT',
    imgSrc: 'https://assets.coingecko.com/coins/images/12467/small/111.png?1609807856',
  },
  {
    title: 'Celo',
    symbol: 'CELO',
    imgSrc: 'https://assets.coingecko.com/coins/images/11090/small/icon-celo-CELO-color-500.png?1592293590',
  },
  {
    title: 'Tron',
    symbol: 'TRX',
    imgSrc: 'https://assets.coingecko.com/coins/images/1094/small/tron-logo.png?1547035066',
  },
  {
    title: 'Near',
    symbol: 'NEAR',
    imgSrc: 'https://assets.coingecko.com/coins/images/10365/small/near_icon.png?1601359077',
  },
  {
    title: 'Aave',
    symbol: 'AAVE',
    imgSrc: 'https://assets.coingecko.com/coins/images/12645/small/AAVE.png?1601374110',
  },
  {
    title: 'Compound',
    symbol: 'COMP',
    imgSrc: 'https://assets.coingecko.com/coins/images/10775/small/COMP.png?1592625425',
  },
  {
    title: 'Moonriver',
    symbol: 'MOVR',
    imgSrc: 'https://assets.coingecko.com/coins/images/17760/small/moonriver.png?1629480328',
  },
  {
    title: 'Moonbeam',
    symbol: 'GLMR',
    imgSrc: 'https://assets.coingecko.com/coins/images/14375/small/moonbeam.png?1615555160',
  },
  {
    title: 'KCC',
    symbol: 'KCS',
    imgSrc: 'https://assets.coingecko.com/coins/images/956/small/KuCoin.png?1605778731',
  },
  {
    title: 'Acala',
    symbol: 'ACA',
    imgSrc: 'https://assets.coingecko.com/coins/images/14375/small/moonbeam.png?1615555160',
  },
]

export const ChainsBlock = () => {
  return (
    <Block title={'Supported chains'}>
      <ChainCardsGrid items={items} />
    </Block>
  )
}
