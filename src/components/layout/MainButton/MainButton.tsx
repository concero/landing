import classNames from './MainButton.module.pcss'
import { ReactNode } from 'react'

export function MainButton({
  children,
  size = 'sm',
  className = null,
}: {
  children: ReactNode
  size: 'md' | 'lg' | 'sm'
  className?: string | null
}) {
  let classes = classNames[size]
  if (className) {
    classes += ` ${className}`
  }

  return (
    <button className={`${classNames.container} ${classes}`}>
      <div className={classNames.innerContainer}>{children}</div>
    </button>
  )
}
