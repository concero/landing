import classNames from './CardHeader.module.pcss'
import { ReactNode } from 'react'

interface CardHeaderProps {
  title: string
  body?: string
  size?: 'lg' | 'md'
  variant?: 'white' | 'black'
  children?: ReactNode
}

export function CardHeader({ title, body, size = 'lg', variant = 'black', children }: CardHeaderProps) {
  const classes = classNames[size]
  const titleclass = classNames[variant]

  return (
    <div className={`${classNames.container} ${classes}`}>
      <div className={classNames.rowContainer}>
        {size === 'lg' ? <h2 className={titleclass}>{title}</h2> : <h3 className={titleclass}>{title}</h3>}
        {children}
      </div>
      <p className={size === 'lg' ? 'body1' : 'body2'}>{body}</p>
    </div>
  )
}
