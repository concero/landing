import classNames from './MainButton.module.pcss'
import { ReactNode } from 'react'

export function MainButton({
  children,
  size = 'sm',
  className = null,
  onClick = null,
}: {
  children: ReactNode
  size: 'md' | 'lg' | 'sm'
  className?: string | null
  onClick?: () => void
}) {
  let classes = classNames[size]
  if (className) {
    classes += ` ${className}`
  }

  return (
    <button className={`${classNames.container} ${classes}`} onClick={onClick && onClick}>
      {children}
    </button>
  )
}
