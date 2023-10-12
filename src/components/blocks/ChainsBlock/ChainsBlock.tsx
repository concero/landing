import { Block } from '../../layout/Block/Block'
import classNames from './ChainsBlock.module.pcss'

interface ChainCardProps {
  imgSrc: string
}

function ChainCard({ imgSrc }: ChainCardProps) {
  return (
    <div className={classNames.chainCardContainer}>
      <img src={imgSrc} />
    </div>
  )
}

const chainsImg = [
  'https://s2.coinmarketcap.com/static/img/coins/128x128/1027.png',
  'https://s2.coinmarketcap.com/static/img/coins/128x128/11840.png',
  'https://s2.coinmarketcap.com/static/img/coins/128x128/3513.png',
  'https://s2.coinmarketcap.com/static/img/coins/128x128/1839.png',
  'https://s2.coinmarketcap.com/static/img/coins/128x128/1.png',
  'https://s3.coinmarketcap.com/static-gravity/image/8b8447abcb1949ab9f426b1521cdc70f.png',
  'https://s2.coinmarketcap.com/static/img/coins/128x128/11841.png',
  'https://s2.coinmarketcap.com/static/img/coins/128x128/52.png',
  'https://s2.coinmarketcap.com/static/img/coins/128x128/3890.png',
  'https://s2.coinmarketcap.com/static/img/coins/128x128/6636.png',
  'https://s2.coinmarketcap.com/static/img/coins/128x128/5805.png',
  'https://s2.coinmarketcap.com/static/img/coins/128x128/9285.png',
  'https://s2.coinmarketcap.com/static/img/coins/128x128/1958.png',
  'https://s2.coinmarketcap.com/static/img/coins/128x128/512.png',
  'https://s2.coinmarketcap.com/static/img/coins/128x128/2010.png',
  'https://s2.coinmarketcap.com/static/img/coins/128x128/1975.png',
  'https://s2.coinmarketcap.com/static/img/coins/128x128/5426.png',
  'https://s2.coinmarketcap.com/static/img/coins/128x128/5034.png',
  'https://s2.coinmarketcap.com/static/img/coins/128x128/3945.png',
  'https://s2.coinmarketcap.com/static/img/coins/128x128/3635.png',
  'https://s2.coinmarketcap.com/static/img/coins/128x128/1659.png',
  'https://s2.coinmarketcap.com/static/img/coins/128x128/3794.png',
  'https://s2.coinmarketcap.com/static/img/coins/128x128/12220.png',
  'https://s2.coinmarketcap.com/static/img/coins/128x128/2.png',
]

export const ChainsBlock = () => {
  return (
    <Block title={'Supported chains'}>
      <div className={classNames.chainsContainer}>
        {chainsImg.map((imgSrc, index) => (
          <ChainCard key={index.toString()} imgSrc={imgSrc} />
        ))}
      </div>
    </Block>
  )
}
