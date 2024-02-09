import { FC, ReactNode } from 'react'
import classNames from './Block.module.pcss'

interface BlockProps {
  title?: string
  body?: string
  children: ReactNode
  className?: string
}

export const Block: FC<BlockProps> = ({ children, title = null, body = null, className = null }) => {
  return (
    <div className={`block ${classNames.container} ${className ? className : null}`}>
      {title ? (
        <div className={'headerContainer'}>
          <h2 className={'title1'}>{title}</h2>
          {body && <p className={'body1'}>{body}</p>}
        </div>
      ) : null}
      {children}
    </div>
  )
}
