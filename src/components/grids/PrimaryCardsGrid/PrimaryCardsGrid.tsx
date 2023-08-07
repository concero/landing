import { FC } from 'react'
import { CardPrimary } from '../../cards/CardPrimary/CardPrimary'
import classNames from './PrimaryCardsGrid.module.pcss'

interface CardsGridProps {
  items: Item[]
}

type Item = {
  id: string
  title: string
  subtitle: string
}

export const PrimaryCardsGrid: FC<CardsGridProps> = ({ items }) => {
  const firstLine = items.slice(0, 2)
  const secondLine = items.slice(2, items.length)

  return (
    <div className={classNames.container}>
      <div className={`${classNames.lineContainer} ${classNames.firstLineContainer}`}>
        {firstLine.map((item, index) => {
          return (
            <CardPrimary
              key={index.toString()}
              title={item.title}
              subtitle={item.subtitle}
              className={index === 0 ? classNames.firsLineFirstItem : classNames.firstLineSecondItem}
            />
          )
        })}
      </div>
      <div className={`${classNames.lineContainer} ${classNames.secondLineContainer}`}>
        {secondLine.map((item) => {
          return (
            <CardPrimary
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              size={'md'}
              className={classNames.secondLineItems}
            />
          )
        })}
      </div>
    </div>
  )
}
