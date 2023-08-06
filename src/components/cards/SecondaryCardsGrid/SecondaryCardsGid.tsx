import { FC } from 'react'
import classNames from './SecondaryCardsGrid.module.pcss'
import { CardSecondary } from '../CardSecondary/CardSecondary'
import { SecondaryCardItem } from '../CardSecondary/types'

interface SecondaryCardsGidProps {
  items: SecondaryCardItem[]
  size: 'sm' | 'md'
}

export const SecondaryCardsGid: FC<SecondaryCardsGidProps> = ({ items, size }) => {
  return (
    <div className={classNames.container}>
      {items.map((item: SecondaryCardItem) => (
        <CardSecondary
          key={item.title}
          title={item.title}
          subtitles={item.subtitles}
          size={size}
          imgSrc={item.imgSrc}
        />
      ))}
    </div>
  )
}
