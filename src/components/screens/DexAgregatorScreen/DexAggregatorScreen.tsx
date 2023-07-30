import { CardsGrid } from '../../cards/CardsGrid/CardsGrid'
import classNames from './DexAggregatorScreen.module.pcss'
import { items } from './items'

export const DexAggregatorScreen = () => {
  return (
    <div className={`screenContainer ${classNames.container}`}>
      <div className={'headerContainer'}>
        <h1 className={'title1'}>Dex Aggregator</h1>
      </div>
      <CardsGrid items={items} />
    </div>
  )
}
