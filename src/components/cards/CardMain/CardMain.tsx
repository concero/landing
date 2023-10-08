import { CardHeader } from '../../layout/CardHeader/CardHeader'
import classNames from './CardMain.module.pcss'
import { Card } from '../Card/Card'

interface CardMainProps {
  title: string
  body: string
  imgSrc: string
  className?: string
  imgWidth?: number | string
}

export function CardMain({ title, body, imgSrc, className, imgWidth }: CardMainProps) {
  return (
    <Card padding={'xxl'} className={className}>
      <CardHeader title={title} body={body} />
      <div className={classNames.innerContainer}>
        <div className={classNames.imgContainer} style={{ width: imgWidth }}>
          <img src={imgSrc} />
        </div>
      </div>
    </Card>
  )
}
