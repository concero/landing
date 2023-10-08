import { Block } from '../../layout/Block/Block'
import classNames from './YieldAggregatorBlock.module.pcss'
import yieldImg from '../../../assets/images/YieldBlock/YieldImg.svg'
import fireImg from '../../../assets/images/YieldBlock/Fire.svg'
import aaveLogo from '../../../assets/images/YieldBlock/AaveLogo.svg'
import lidoLogo from '../../../assets/images/YieldBlock/LidoLogo.svg'
import uniswapLogo from '../../../assets/images/YieldBlock/UniswapLogo.svg'
import { CardMain } from '../../cards/CardMain/CardMain'
import { CardSecondary } from '../../cards/CardSecondary/CardSecondary'

const items = [
  {
    title: 'Find the best APR',
    body: 'Find the best rates among 1000+ pools',
    imgSrc: fireImg,
  },
  {
    title: 'Lending protocols',
    body: 'Stake into Lending protocols like Aave and Compound',
    imgSrc: aaveLogo,
  },
  {
    title: 'Liquid Staking',
    body: 'Stake your assets with protocols like LIDO',
    imgSrc: lidoLogo,
  },
  {
    title: 'Liquidity Provision',
    body: 'Provide liquidity into DEXes like Uniswap',
    imgSrc: uniswapLogo,
  },
]

export function YieldAggregatorBlock() {
  return (
    <Block
      title="Yield Aggregator"
      body={
        'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent.'
      }
    >
      <div className={classNames.cardsContainer}>
        <CardMain
          title={'All-in-one staking'}
          body={'Stake effortlessly to over 35 protocols across 9 chains'}
          imgSrc={yieldImg}
          className={classNames.flex1}
        />
        <div className={classNames.secondaryCardsContainer}>
          <div className={classNames.line}>
            <CardSecondary title={items[0].title} body={items[0].body} imgSrc={items[0].imgSrc} />
            <CardSecondary title={items[1].title} body={items[1].body} imgSrc={items[1].imgSrc} />
          </div>
          <div className={classNames.line}>
            <CardSecondary title={items[2].title} body={items[2].body} imgSrc={items[2].imgSrc} />
            <CardSecondary title={items[3].title} body={items[3].body} imgSrc={items[3].imgSrc} />
          </div>
        </div>
      </div>
    </Block>
  )
}
