import { Block } from '../../layout/Block/Block'

import aurora from '../../../assets/images/Chains/aurora.svg'
import classNames from './ChainsBlock.module.pcss'
import zkevm from '../../../assets/images/Chains/zkevm.svg'
import arb from '../../../assets/images/Chains/arb.svg'
import eth from '../../../assets/images/Chains/eth.svg'
import optimism from '../../../assets/images/Chains/optimism.svg'
import avalanche from '../../../assets/images/Chains/avalanche.svg'
import pol from '../../../assets/images/Chains/pol.svg'
import bcs from '../../../assets/images/Chains/bsc.svg'
import zkSync from '../../../assets/images/Chains/zkSync.svg'
import base from '../../../assets/images/Chains/base.svg'
import linea from '../../../assets/images/Chains/linea.svg'
import crow from '../../../assets/images/Chains/crow.svg'
import fantom from '../../../assets/images/Chains/fantom.svg'
import moonriver from '../../../assets/images/Chains/moonriver.svg'
import moonbeam from '../../../assets/images/Chains/moonbeam.svg'
import gnosis from '../../../assets/images/Chains/gnosis.svg'
import fuse from '../../../assets/images/Chains/fuse.svg'
import okx from '../../../assets/images/Chains/okx.svg'
import boba from '../../../assets/images/Chains/boba.svg'

interface ChainCardProps {
  imgSrc: string
}

function ChainCard({ imgSrc }: ChainCardProps) {
  return (
    <div className={classNames.chainCardContainer}>
      <img src={imgSrc} />
    </div>
  )
}

const chainsImg = [
  eth,
  optimism,
  arb,
  pol,
  bcs,
  avalanche,
  zkSync,
  zkevm,
  base,
  aurora,
  linea,
  crow,
  fantom,
  moonriver,
  moonbeam,
  gnosis,
  fuse,
  okx,
  boba,
]

export const ChainsBlock = () => {
  return (
    <Block title={'Supported chains'}>
      <div className={classNames.chainsContainer}>
        {chainsImg.map((imgSrc, index) => (
          <ChainCard key={index.toString()} imgSrc={imgSrc} />
        ))}
      </div>
    </Block>
  )
}
