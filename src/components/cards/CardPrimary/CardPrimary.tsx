import { FC } from 'react'
import { Card } from '../Card/Card'
import classNames from './CardPrimary.module.pcss'

interface CardPrimaryProps {
  title: string
  subtitles: string[]
  className?: string
  size?: 'lg' | 'md' | 'sm'
  imgSrc?: string
}

export const CardPrimary: FC<CardPrimaryProps> = ({ title, subtitles, className = null, size = 'lg', imgSrc }) => {
  let imgContainerClasses = `${classNames.imgContainer} `
  const fileName = imgSrc?.split('/').pop()
  if (fileName === 'hexagons.svg') {
    imgContainerClasses = imgContainerClasses.concat(`${classNames.hexagonsImage}`)
  } else if (fileName === 'news.svg') {
    imgContainerClasses = imgContainerClasses.concat(`${classNames.newsImage}`)
  } else if (fileName === 'arrows-minimize.svg') {
    imgContainerClasses = imgContainerClasses.concat(`${classNames.arrowsMinimizeImage}`)
  }

  return (
    <div className={`${classNames.container} ${className ? className : ''}`}>
      <Card className={classNames.card}>
        <div className={classNames.innerContainer}>
          <div className={classNames.cardContainer}>
            <h2 className={size === 'md' ? classNames.mdHeader : ''}>{title}</h2>
            {subtitles.map((subtitle) => (
              <p className={`body1 ${classNames.mdBody}`}>{subtitle}</p>
            ))}
          </div>
          {imgSrc ? (
            <div className={classNames.imageWrapper}>
              <div className={imgContainerClasses}>
                <img src={imgSrc} className={classNames.img} />
              </div>
            </div>
          ) : null}
        </div>
      </Card>
    </div>
  )
}
