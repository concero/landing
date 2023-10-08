import classNames from './MainButton.module.pcss'
import { ReactNode } from 'react'

export function MainButton({ children, size = 'md' }: { children: ReactNode; size: 'md' | 'lg' }) {
  const classes = classNames[size]

  return (
    <button className={`${classNames.container} ${classes}`}>
      <div className={classNames.innerContainer}>{children}</div>
    </button>
  )
}
