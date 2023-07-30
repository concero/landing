import { FC } from 'react'
import { Card } from '../Card/Card'
import classNames from './CardPrimary.module.pcss'

interface CardPrimaryProps {
  title: string
  subtitle: string
  className?: string
  size?: 'lg' | 'md' | 'sm'
}

export const CardPrimary: FC<CardPrimaryProps> = ({ title, subtitle, className = null, size = 'lg' }) => {
  return (
    <div className={`${classNames.container} ${className ? className : ''}`}>
      <Card>
        <div className={classNames.cardContainer}>
          <h2 className={size === 'md' ? classNames.mdHeader : ''}>{title}</h2>
          <p className={`body1 ${classNames.mdBody}`}>{subtitle}</p>
        </div>
      </Card>
    </div>
  )
}
