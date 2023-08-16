import { Block } from '../../layout/Block/Block'
import { ChainCardsGrid } from '../../grids/ChainCardsGrid/ChainCardsGrid'
import { items } from './items'

export const ChainsBlock = () => {
  return (
    <Block title={'Supported chains'}>
      <ChainCardsGrid items={items} />
    </Block>
  )
}
