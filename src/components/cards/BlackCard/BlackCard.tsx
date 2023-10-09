import { ReactNode } from 'react'
import classNames from './BlackCard.module.pcss'
import { Card } from '../Card/Card'

interface ComingSoonBlockProps {
  children: ReactNode
}

export const BlackCard = ({ children }: ComingSoonBlockProps) => {
  return (
    <div className={classNames.container}>
      <Card color={'black'} className={classNames.cardContainer}>
        <div className={classNames.cardInnerContainer}>{children}</div>
      </Card>
    </div>
  )
}
