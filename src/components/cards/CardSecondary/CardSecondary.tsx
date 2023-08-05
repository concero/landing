import { FC } from 'react'
import classNames from './CardSecondary.module.pcss'

interface CardSecondaryProps {
  title: string
  subtitle: string
  imgSrc?: string | null
  size?: 'sm' | 'md' | 'lg'
}

export const CardSecondary: FC<CardSecondaryProps> = ({ title, subtitle, imgSrc = null, size = 'md' }) => {
  const classes = classNames[size]
  return (
    <div className={`card ${classNames.container} ${classes}`}>
      <div className={classNames.titleContainer}>
        <h3>{title}</h3>
        <div>
          <p className={'body2'}>{subtitle}</p>
        </div>
      </div>
      {imgSrc ? (
        <div className={classNames.imgContainer}>
          <img src={imgSrc} />
        </div>
      ) : null}
    </div>
  )
}
