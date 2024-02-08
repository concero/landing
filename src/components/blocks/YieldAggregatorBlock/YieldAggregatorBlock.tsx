import { Block } from '../../layout/Block/Block'
import classNames from './YieldAggregatorBlock.module.pcss'
import fireImg from '../../../assets/images/YieldBlock/fire.svg'
import aaveLogo from '../../../assets/images/YieldBlock/aaveLogo.svg'
import stakinAggregator from '../../../assets/images/YieldBlock/stakingAggregaror.png'
import lidoLogo from '../../../assets/images/YieldBlock/lidoLogo.svg'
import uniswapLogo from '../../../assets/images/YieldBlock/UniswapLogo.svg'
import { CardMain } from '../../cards/CardMain/CardMain'
import { CardSecondary } from '../../cards/CardSecondary/CardSecondary'

const items = [
  {
    title: 'Highest earnings',
    body: 'Access the highest ARR rates from thousands of pools.',
    imgSrc: fireImg,
  },
  {
    title: 'Lending protocols',
    body: 'Lend in reliable protocols like Aave and Compound.',
    imgSrc: aaveLogo,
  },
  {
    title: 'Liquid Staking',
    body: 'Enhance your staking flexibility with services like LIDO.',
    imgSrc: lidoLogo,
  },
  {
    title: 'Liquidity Provision',
    body: 'Supply liquidity to leading DEXes like Uniswap or Curve.',
    imgSrc: uniswapLogo,
  },
]

export function YieldAggregatorBlock() {
  return (
    <Block title="Yield Aggregator" body={'Discover top yield opportunities across 17 Blockchains, all in one place.'}>
      <div className={classNames.cardsContainer}>
        <CardMain
          title={'All-in-one staking'}
          body={'Engage with over 35 protocols across 17 chains effortlessly.'}
          imgSrc={stakinAggregator}
          className={classNames.flex1}
          imgWidth={'100%'}
        />
        <div className={classNames.secondaryCardsContainer}>
          <div className={classNames.line}>
            <CardSecondary
              title={items[0].title}
              body={items[0].body}
              imgSrc={items[0].imgSrc}
              isDivForIconNeeded={true}
            />
            <CardSecondary
              title={items[1].title}
              body={items[1].body}
              imgSrc={items[1].imgSrc}
              isDivForIconNeeded={true}
            />
          </div>
          <div className={classNames.line}>
            <CardSecondary
              title={items[2].title}
              body={items[2].body}
              imgSrc={items[2].imgSrc}
              isDivForIconNeeded={true}
            />
            <CardSecondary
              title={items[3].title}
              body={items[3].body}
              imgSrc={items[3].imgSrc}
              isDivForIconNeeded={true}
            />
          </div>
        </div>
      </div>
    </Block>
  )
}
