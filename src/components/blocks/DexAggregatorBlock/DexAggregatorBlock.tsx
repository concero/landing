import { PrimaryCardsGrid } from '../../grids/PrimaryCardsGrid/PrimaryCardsGrid'
import { items } from './items'
import { Block } from '../../layout/Block/Block'

export const DexAggregatorBlock = () => {
  return (
    <Block title={'X-Chain DEX Aggregator'}>
      <PrimaryCardsGrid items={items} />
    </Block>
  )
}
