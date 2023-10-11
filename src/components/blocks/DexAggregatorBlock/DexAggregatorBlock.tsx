import classNames from './DexAggregatorContainer.module.pcss'
import { CardMain } from '../../cards/CardMain/CardMain'
import chartImg from '../../../assets/images/dexAggregatorBlock/chartImg.svg'
import swapImg from '../../../assets/images/dexAggregatorBlock/SwapImg.svg'
import { Block } from '../../layout/Block/Block'
import { useMediaQuery } from '../../../hooks/useMediaQueryHook'
import { CardSmall } from '../../cards/CardSmall/CardSmall'
import egg from '../../../assets/images/dexAggregatorBlock/egg.svg'
import fire from '../../../assets/images/dexAggregatorBlock/fire.svg'
import coin from '../../../assets/images/dexAggregatorBlock/coin.svg'

const items = [
  {
    title: 'Maximum liquidity',
    body: 'Access maximum decentralised liquidity',
    imgSrc: egg,
  },
  {
    title: 'Swap Insurance',
    body: 'Insure your cross-chain swaps for peace of mind',
    imgSrc: fire,
  },
  {
    title: 'Cheapest Routes',
    body: 'Find most optimised routes with cheapest rates',
    imgSrc: coin,
  },
]

export function DexAggregatorBlock() {
  const isMobile = useMediaQuery('mobile')

  return (
    <Block
      title="DEX aggregator"
      body={
        'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent.'
      }
    >
      <div className={classNames.cardsContainer}>
        <CardMain
          title={'Live news & transactions'}
          body={'Stay updated with live news & transactions'}
          imgSrc={chartImg}
          className={classNames.flex1}
          imgWidth={'100%'}
        />
        <CardMain
          title={'Cross-chain'}
          body={'Swap across 16 chains, 13 bridges & 34 DEXes.'}
          imgSrc={swapImg}
          className={classNames.flex1}
          imgWidth={isMobile ? '100%' : 478}
        />
        <div className={classNames.secondaryCardsContainer}>
          {items.map((item, index) => (
            <CardSmall key={index.toString()} title={item.title} body={item.body} imgSrc={item.imgSrc} />
          ))}
        </div>
      </div>
    </Block>
  )
}
