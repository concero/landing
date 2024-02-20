import classNames from './CcipBlock.module.pcss'
import { Block } from '../../layout/Block/Block'
import { MainCard } from '../../cards/MainCard/MainCard'
import arrowsUpRight from '../../../assets/icons/rightUpArrows.svg'
import road from '../../../assets/icons/road.svg'
import blob from '../../../assets/icons/blob.svg'

export function CcipBlock() {
  return (
    <Block title={'Making CCIP more competitive'} body={'Designed and Built in collaboration with Chainlink'}>
      <div className={classNames.container}>
        <MainCard
          type={'big'}
          title={'Speed'}
          body={'Reducing transaction time from an average of 26 minutes down to less than a minute'}
          icon={arrowsUpRight}
          className={'f1'}
        />
        <MainCard
          type={'big'}
          title={'Cross-chain pathfinding'}
          body={'Interact with any protocol on any supported chain from a single point of entry'}
          icon={road}
          className={'f1'}
        />
        <MainCard
          type={'big'}
          title={'Liquidity Maximisation'}
          body={'Maximising on-chain liquidity through aggregating liquidity pools for capital efficient transactions'}
          icon={blob}
          className={'f1'}
        />
      </div>
    </Block>
  )
}
