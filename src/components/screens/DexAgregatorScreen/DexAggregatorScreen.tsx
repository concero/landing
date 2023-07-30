import { CardsGrid } from '../../cards/CardsGrid/CardsGrid'
import classNames from './DexAggregatorScreen.module.pcss'
import { items } from './items'

export const DexAggregatorScreen = () => {
  return (
    <div className={`screenContainer ${classNames.container}`}>
      <CardsGrid items={items} />
    </div>
  )
}
