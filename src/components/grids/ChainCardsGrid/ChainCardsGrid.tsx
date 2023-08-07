import { ChainCard } from '../../cards/ChainCard/ChainCard'
import classNames from './ChainCardsGrid.module.pcss'

export const ChainCardsGrid = ({ items }) => {
  return (
    <div className={classNames.container}>
      {items.map((item, index) => (
        <ChainCard symbol={item.symbol} key={index.toString()} />
      ))}
    </div>
  )
}
