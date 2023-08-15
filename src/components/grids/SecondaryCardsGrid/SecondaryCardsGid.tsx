import { FC } from 'react'
import classNames from './SecondaryCardsGrid.module.pcss'
import { CardSecondary } from '../../cards/CardSecondary/CardSecondary'
import { SecondaryCardItem } from '../../cards/CardSecondary/types'

interface SecondaryCardsGidProps {
  items: SecondaryCardItem[]
  size: 'sm' | 'md'
}

export const SecondaryCardsGid: FC<SecondaryCardsGidProps> = ({ items, size }) => {
  return (
    <div className={classNames.container}>
      {items.map((item: SecondaryCardItem, index: number) => (
        <CardSecondary
          key={index.toString()}
          title={item.title}
          subtitles={item.subtitles}
          size={size}
          imgSrc={item.imgSrc}
        />
      ))}
    </div>
  )
}
