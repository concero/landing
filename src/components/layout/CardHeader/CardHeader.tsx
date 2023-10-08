import classNames from './CardHeader.module.pcss'

interface CardHeaderProps {
  title: string
  body: string
  size?: 'lg' | 'md'
}

export function CardHeader({ title, body, size = 'lg' }: CardHeaderProps) {
  const classes = classNames[size]
  return (
    <div className={`${classNames.container} ${classes}`}>
      {size === 'lg' ? <h2>{title}</h2> : <h3>{title}</h3>}
      <p className={size === 'lg' ? 'body1' : 'body2'}>{body}</p>
    </div>
  )
}
