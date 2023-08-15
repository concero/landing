import { FC } from 'react'
import { CardPrimary } from '../../cards/CardPrimary/CardPrimary'
import classNames from './PrimaryCardsGrid.module.pcss'
import { SecondaryCardsGid } from '../SecondaryCardsGrid/SecondaryCardsGid'

interface CardsGridProps {
  items: Item[]
}

type Item = {
  id: string
  title: string
  subtitles: string[]
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
              subtitles={item.subtitles}
              className={index === 0 ? classNames.firsLineFirstItem : classNames.firstLineSecondItem}
              imgSrc={item.imgSrc}
            />
          )
        })}
      </div>
      {secondLine ? (
        <div className={`${classNames.lineContainer}`}>
          <SecondaryCardsGid items={secondLine} size={'sm'} />
        </div>
      ) : null}
    </div>
  )
}
