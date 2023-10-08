import { Card } from '../Card/Card'
import { CardHeader } from '../../layout/CardHeader/CardHeader'
import classNames from './CardSecondary.module.pcss'

interface CardSecondaryProps {
  title: string
  body: string
  imgSrc?: string | null
}

export function CardSecondary({ title, body, imgSrc = null }: CardSecondaryProps) {
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
