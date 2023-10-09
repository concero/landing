import classNames from './BlackCard.module.pcss'
import { ReactNode } from 'react'

interface BlackCardProps {
  title: string
  children?: ReactNode
}

export function BlackCardHeader({ title, children }: BlackCardProps) {
  return (
    <div className={classNames.header}>
      <h2 className={`title1 ${classNames.headerTitle}`}>{title}</h2>
      {children && <div>{children}</div>}
    </div>
  )
}
