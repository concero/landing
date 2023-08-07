import { PartnersCardsGrid } from '../../grids/PartnersCardsGrid/PatrnersCardsGrid'
import { Block } from '../../layout/Block/Block'
import { items } from './items'

export const PartnersBlock = () => {
  return (
    <Block title={'Partners'}>
      <PartnersCardsGrid items={items} />
    </Block>
  )
}
