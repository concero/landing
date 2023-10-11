import { CardHeader } from '../../layout/CardHeader/CardHeader'
import { Card } from '../Card/Card'
import classNames from './CardSmall.module.pcss'

interface CardSmallProps {
  title: string
  body: string
  imgSrc?: string | null
}

export function CardSmall({ title, body, imgSrc = null }: CardSmallProps) {
  return (
    <Card padding={'xl'} className={classNames.container}>
      {imgSrc && (
        <div className={classNames.imgContainer}>
          <img src={imgSrc} />
        </div>
      )}
      <CardHeader title={title} body={body} size={'md'} />
    </Card>
  )
}
