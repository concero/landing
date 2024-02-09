import { Card } from '../Card/Card'
import { CardHeader } from '../../layout/CardHeader/CardHeader'
import classNames from './CardSecondary.module.pcss'

interface CardSecondaryProps {
  title: string
  body: string
  imgSrc?: string | null
  isDivForIconNeeded?: boolean
}

export function CardSecondary({ title, body, imgSrc = null, isDivForIconNeeded = false }: CardSecondaryProps) {
  return (
    <Card padding={'xl'} className={classNames.container}>
      {imgSrc && (
        <div className={`${classNames.imgContainer} ${isDivForIconNeeded ? classNames.iconContainer : null}`}>
          <img src={imgSrc} />
        </div>
      )}
      <CardHeader title={title} body={body} size={'md'} />
    </Card>
  )
}
