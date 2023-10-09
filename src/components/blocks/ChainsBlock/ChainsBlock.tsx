import { Block } from '../../layout/Block/Block'
import classNames from './ChainsBlock.module.pcss'
import optimism from '../../../assets/images/chains/optimism.svg'
import x from '../../../assets/images/chains/x.svg'
import polygon from '../../../assets/images/chains/polygon.svg'
import image47 from '../../../assets/images/chains/image47.svg'
import avalanche from '../../../assets/images/chains/avalanche.svg'
import card from '../../../assets/images/chains/card.svg'
import Layer from '../../../assets/images/chains/Layer.svg'
import BSC from '../../../assets/images/chains/BSC.svg'
import ethereum from '../../../assets/images/chains/ethereum.svg'
import image44 from '../../../assets/images/chains/image44.svg'
import ProtocolIcon from '../../../assets/images/chains/ProtocolIcon.svg'
import solana from '../../../assets/images/chains/solana.svg'
import image21 from '../../../assets/images/chains/image21.svg'
import bitcoin from '../../../assets/images/chains/bitcoin.svg'
import image11 from '../../../assets/images/chains/image11.svg'
import Group4 from '../../../assets/images/chains/Group4.svg'
import gnosis from '../../../assets/images/chains/gnosis.svg'
import icon from '../../../assets/images/chains/icon.svg'
import vector from '../../../assets/images/chains/vector.svg'
import image23 from '../../../assets/images/chains/image23.svg'

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
  optimism,
  x,
  polygon,
  image47,
  avalanche,
  card,
  Layer,
  BSC,
  ethereum,
  image44,
  ProtocolIcon,
  solana,
  image21,
  bitcoin,
  image11,
  Group4,
  gnosis,
  icon,
  vector,
  image23,
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
