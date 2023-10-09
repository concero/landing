import classNames from './MainButton.module.pcss'
import { ReactNode } from 'react'

export function MainButton({ children, size = 'sm' }: { children: ReactNode; size: 'md' | 'lg' | 'sm' }) {
  const classes = classNames[size]

  return (
    <button className={`${classNames.container} ${classes}`}>
      <div className={classNames.innerContainer}>{children}</div>
    </button>
  )
}
