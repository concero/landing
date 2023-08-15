import { Block } from '../../layout/Block/Block'
import { PrimaryCardsGrid } from '../../grids/PrimaryCardsGrid/PrimaryCardsGrid'
import { items } from './items'

export const StackingAggregatorBlock = () => {
  return (
    <Block title={'Staking aggregator'}>
      <PrimaryCardsGrid items={items} />
    </Block>
  )
}
