import { FC, ReactNode } from 'react'
import classNames from './Block.module.pcss'

interface BlockProps {
  title: string
  children: ReactNode
}

export const Block: FC<BlockProps> = ({ children, title }) => {
  return (
    <div className={`block ${classNames.container}`}>
      <div className={'headerContainer'}>
        <h2 className={'title1'}>{title}</h2>
      </div>
      {children}
    </div>
  )
}
