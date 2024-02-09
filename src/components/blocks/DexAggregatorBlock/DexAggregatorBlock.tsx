import classNames from './DexAggregatorContainer.module.pcss'
import { CardMain } from '../../cards/CardMain/CardMain'
import dex from '../../../assets/images/dexAggregatorBlock/dex.png'
import bestRoute from '../../../assets/images/dexAggregatorBlock/bestRoute.png'
import { Block } from '../../layout/Block/Block'
import { useMediaQuery } from '../../../hooks/useMediaQueryHook'
import { CardSmall } from '../../cards/CardSmall/CardSmall'

const items = [
  {
    title: 'Swap Insurance',
    body: 'Enjoy peace of mind with swap insurance, powered by InsurAce.',
  },
  {
    title: 'Liquidity maximisation',
    body: 'Tap into unparalleled decentralised liquidity through our advanced LMP.',
  },
  {
    title: 'Gas abstraction',
    body: 'No more low gas issues with abstracted gas.',
  },
]

function Tag() {
  return (
    <div className={classNames.tagContainer}>
      <p className={'body1'}>Coming soon</p>
    </div>
  )
}

export function DexAggregatorBlock() {
  const isMobile = useMediaQuery('mobile')

  return (
    <Block title="DEX aggregator" body={'Swap seamlessly across 18 blockchains, 100+ DEXes and Bridges.'}>
      <div className={classNames.cardsContainer}>
        <CardMain
          title={'Cross-chain'}
          body={'Swap effortlessly across 16 chains, 13 bridges & 34 DEXes.'}
          imgSrc={dex}
          className={classNames.flex1}
          imgWidth={isMobile ? '100%' : 478}
        />
        <CardMain
          title={'Best routes'}
          body={'Secure the best swapping rates with our optimised routing algorithm.'}
          imgSrc={bestRoute}
          className={classNames.flex1}
          imgWidth={isMobile ? '100%' : 478}
        />
        <div className={classNames.secondaryCardsContainer}>
          {items.map((item, index) => (
            <CardSmall
              key={index.toString()}
              title={item.title}
              body={item.body}
              imgSrc={item.imgSrc}
              Tag={index === items.length - 1 ? () => <Tag /> : null}
            />
          ))}
        </div>
      </div>
    </Block>
  )
}
