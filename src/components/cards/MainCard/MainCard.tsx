import classNames from './MainCard.module.pcss'
import { Card } from '../Card/Card'

interface MainCardProps {
  type: 'big' | 'small' | 'vertical'
  title: string
  body: string
  icon: string
}

export function MainCard({ type, title, body, icon }: MainCardProps) {
  return (
    <Card className={classNames.container}>
      <div className={classNames.iconContainer}>
        <img src={icon} />
      </div>
      <div className={classNames.textContainer}>
        <h2>{title}</h2>
        <p className={'body1'}>{body}</p>
      </div>
    </Card>
  )
}
