import { FC } from 'react'
import { CryptoIcon } from '../../layout/CryptoIcon/CryptoIcon'
import classNames from './ChainCard.module.pcss'

interface ChainCardProps {
  symbol: string
}

export const ChainCard: FC<ChainCardProps> = ({ symbol }) => {
  return (
    <div>
      <div className={classNames.container}>
        <CryptoIcon symbol={symbol} />
      </div>
    </div>
  )
}
