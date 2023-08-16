import React from 'react'
import { ChainCard } from '../../cards/ChainCard/ChainCard'
import classNames from './ChainCardsGrid.module.pcss'

export const ChainCardsGrid = ({ items }) => {
  const data = [...items, ...items]

  return (
    <div className={classNames.container}>
      <div className={classNames.firstLine}>
        {data.map((item, index) => (
          <ChainCard symbol={item.symbol} key={index.toString()} className={classNames.item} />
        ))}
      </div>
      <div className={classNames.secondLine}>
        {data.map((item, index) => (
          <ChainCard symbol={item.symbol} key={index.toString()} className={classNames.item} />
        ))}
      </div>
    </div>
  )
}
