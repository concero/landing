import { FC, ReactNode } from 'react'
import classNames from './Card.module.pcss'

interface CardProps {
  children: ReactNode
  padding?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  color?: 'white' | 'main' | 'black'
  className?: string
}

export const Card: FC<CardProps> = ({ children, padding, color, className }) => {
  let classes = `${classNames.container} ${padding ? classNames[`padding${padding}`] : ''}`
  if (color) classes = classes.concat(` ${classNames[color]}`)
  if (className) classes = classes.concat(` ${className}`)

  return <div className={classes}>{children}</div>
}
