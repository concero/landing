import { CardHeader } from '../../layout/CardHeader/CardHeader'
import classNames from './ImageCard.module.pcss'
import { Card } from '../Card/Card'

interface CardMainProps {
  title: string
  body: string
  imgSrc: string
  className?: string
  imgWidth?: number | string
  imgHeight?: number | string
}

export function ImageCard({ title, body, imgSrc, className, imgWidth, imgHeight }: CardMainProps) {
  return (
    <Card padding={'xxl'} className={className}>
      <CardHeader title={title} body={body} />
      <div className={classNames.innerContainer}>
        <div className={classNames.imgContainer} style={{ width: imgWidth, height: imgHeight }}>
          <img src={imgSrc} />
        </div>
      </div>
    </Card>
  )
}
