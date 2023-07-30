import { FC, ReactNode } from 'react'
import classNames from './Card.module.pcss'

interface CardProps {
  children: ReactNode
}

export const Card: FC<CardProps> = ({ children }) => {
  return <div className={classNames.container}>{children}</div>
}
