import { FC } from 'react'
import classNames from './CardSecondary.module.pcss'
import { SecondaryCardItem } from './types'

export const CardSecondary: FC<SecondaryCardItem> = ({ title, subtitles, imgSrc = null, size = 'md' }) => {
  const classes = classNames[size]
  return (
    <div className={`card ${classNames.container} ${classes}`}>
      <div className={classNames.titleContainer}>
        <h3>{title}</h3>
        <div>
          {subtitles.map((subtitle) => (
            <p className={'body2'}>{subtitle}</p>
          ))}
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
