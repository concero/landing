import classNames from './CardHeader.module.pcss'

interface CardHeaderProps {
  title: string
  body: string
  size?: 'lg' | 'md'
  variant?: 'white' | 'black'
}

export function CardHeader({ title, body, size = 'lg', variant = 'black' }: CardHeaderProps) {
  const classes = classNames[size]
  const titleclass = classNames[variant]

  return (
    <div className={`${classNames.container} ${classes}`}>
      {size === 'lg' ? <h2 className={titleclass}>{title}</h2> : <h3 className={titleclass}>{title}</h3>}
      <p className={size === 'lg' ? 'body1' : 'body2'}>{body}</p>
    </div>
  )
}
