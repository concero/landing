import { FC, ReactNode } from 'react'
import classNames from './Card.module.pcss'

interface CardProps {
  children: ReactNode
  padding?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}

export const Card: FC<CardProps> = ({ children, padding }) => {
  const classes = `${classNames.container} ${padding ? classNames[`padding${padding}`] : ''}`

  return <div className={classes}>{children}</div>
}
