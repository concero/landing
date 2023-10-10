import classNames from './DexAggregatorContainer.module.pcss'
import { CardMain } from '../../cards/CardMain/CardMain'
import chartImg from '../../../assets/images/dexAggregatorBlock/chartImg.svg'
import swapImg from '../../../assets/images/dexAggregatorBlock/SwapImg.svg'
import { Block } from '../../layout/Block/Block'
import { CardSecondary } from '../../cards/CardSecondary/CardSecondary'
import { useMediaQuery } from '../../../hooks/useMediaQueryHook'

const items = [
  {
    title: 'Maximum liquidity',
    body: 'Access maximum decentralised liquidity',
  },
  {
    title: 'Swap Insurance',
    body: 'Insure your cross-chain swaps for peace of mind',
  },
  {
    title: 'Cheapest Routes',
    body: 'Find most optimised routes with cheapest rates',
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
          imgWidth={isMobile ? '100%' : 430}
        />
        <div className={classNames.secondaryCardsContainer}>
          {items.map((item, index) => (
            <CardSecondary title={item.title} body={item.body} key={index.toString()} />
          ))}
        </div>
      </div>
    </Block>
  )
}
