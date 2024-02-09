import { CardHeader } from '../../layout/CardHeader/CardHeader'
import { Card } from '../Card/Card'
import classNames from './CardSmall.module.pcss'

interface CardSmallProps {
  title: string
  body: string
  imgSrc?: string | null
  Tag?:
    | React.FC
    | React.ComponentClass
    | React.ForwardRefExoticComponent<any>
    | React.FunctionComponent
    | React.FunctionComponentFactory<any>
}

export function CardSmall({ title, body, imgSrc = null, Tag = null }: CardSmallProps) {
  return (
    <Card padding={'xl'} className={classNames.container}>
      {imgSrc && (
        <div className={classNames.imgContainer}>
          <img src={imgSrc} />
        </div>
      )}
      <CardHeader title={title} body={body} size={'md'}>
        {Tag ? <Tag /> : null}
      </CardHeader>
    </Card>
  )
}
