import { PrimaryCardsGrid } from '../../grids/PrimaryCardsGrid/PrimaryCardsGrid'
import { Block } from '../../layout/Block/Block'
import { items } from './items'

export const ComingSoonBlock = () => {
  return (
    <Block title={'Coming soon'}>
      <PrimaryCardsGrid items={items} />
    </Block>
  )
}
