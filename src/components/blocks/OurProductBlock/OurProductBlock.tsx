import { Block } from '../../layout/Block/Block'
import { TopicPicker } from '../../layout/TopicPicker/TopicPicker'
import swap from '../../../assets/images/dexAggregatorBlock/dex.png'
import earn from '../../../assets/images//YieldBlock/earn.png'
import track from '../../../assets/images/common/track.png'

const items = [
  {
    id: '1',
    title: 'Swap',
    body: 'Swap any assets on any chains in one click.',
    icon: swap,
  },
  {
    id: '2',
    title: 'Earn',
    body: 'Deposit into liquidity pools, lending protocols and vaults from any chain.',
    icon: earn,
  },
  {
    id: '3',
    title: 'Track',
    body: 'Track the performance of your portfolio across all chains.',
    icon: track,
  },
]

export function OurProductBlock() {
  return (
    <Block>
      <TopicPicker
        title={'Our Products'}
        body={
          'Our goal is to build products that our users need. Through cross chain aggregation, we are providing a frictionless experience while reducing the barrier of entry to DeFi.'
        }
        items={items}
        cardType={'image'}
      />
    </Block>
  )
}
