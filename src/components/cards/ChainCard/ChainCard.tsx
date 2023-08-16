import { FC } from 'react'
import { CryptoIcon } from '../../layout/CryptoIcon/CryptoIcon'
import classNames from './ChainCard.module.pcss'

interface ChainCardProps {
  symbol: string
  className?: string
}

export const ChainCard: FC<ChainCardProps> = ({ symbol, className }) => {
  return (
    <div className={`${classNames.container} ${className}`}>
      <CryptoIcon symbol={symbol} />
    </div>
  )
}
