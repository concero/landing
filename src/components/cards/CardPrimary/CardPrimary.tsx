import { FC } from 'react'
import { Card } from '../Card/Card'
import classNames from './CardPrimary.module.pcss'

interface CardPrimaryProps {
  title: string
  subtitle: string
  className?: string
}

export const CardPrimary: FC<CardPrimaryProps> = ({ title, subtitle, className = null }) => {
  return (
    <div className={`${classNames.container} ${className ? className : ''}`}>
      <Card>
        <h2>{title}</h2>
        <p className={'body1'}>{subtitle}</p>
      </Card>
    </div>
  )
}
