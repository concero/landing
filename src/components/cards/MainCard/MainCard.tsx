import classNames from './MainCard.module.pcss'
import { Card } from '../Card/Card'

interface MainCardProps {
  type: 'big' | 'small' | 'horizontal'
  title: string
  body?: string | null
  icon: string
  className?: string
}

export function MainCard({ type, title, body = null, icon, className }: MainCardProps) {
  return (
    <Card className={`${classNames.container} ${classNames[type]} ${className}`}>
      <div className={`${classNames.iconContainer} ${classNames[type]}`}>
        <img src={icon} />
      </div>
      <div className={`${classNames.textContainer} ${classNames[type]}`}>
        <h2>{title}</h2>
        {body ? <p className={'body1'}>{body}</p> : null}
      </div>
    </Card>
  )
}
