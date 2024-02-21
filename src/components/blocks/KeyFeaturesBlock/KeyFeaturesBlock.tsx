import classNames from './KeyFeaturesBlock.module.pcss'
import { Block } from '../../layout/Block/Block'
import { MainCard } from '../../cards/MainCard/MainCard'
import click from '../../../assets/icons/click.svg'
import security from '../../../assets/icons/security.svg'
import chain from '../../../assets/icons/chain.svg'
import clock from '../../../assets/icons/clock.svg'
import antiFraud from '../../../assets/icons/antiFraud.svg'
import blob from '../../../assets/icons/blob.svg'
import gasStation from '../../../assets/icons/gasStation.svg'
import eth from '../../../assets/icons/eth.svg'
import road from '../../../assets/icons/road.svg'

export function KeyFeaturesBlock() {
  return (
    <Block
      className={classNames.container}
      title={'Key Features'}
      body={'Designed and Built in collaboration with Chainlink'}
    >
      <div className={classNames.horizontalContainer}>
        <div className={`${classNames.topLeftContainer} f1`}>
          <div className={classNames.verticalContainer} style={{ flex: 0.5 }}>
            <MainCard type={'small'} title={'1-click transactions'} icon={click} className={'f1'} />
            <MainCard type={'small'} title={'Insurance'} icon={security} className={'f1'} />
          </div>
          <MainCard
            type={'big'}
            title={'Chainlink CCIP'}
            body={'Chainlink CCIP at the core of Concero’s cross chain infrastructure'}
            icon={chain}
            className={'f1'}
          />
        </div>
        <div className={`${classNames.verticalContainer} f1`}>
          <MainCard
            type={'horizontal'}
            title={'< 1 min transactions'}
            icon={clock}
            body={'Ultra quick end-to-end transactions with no centralisation risk.'}
            className={'f1'}
          />
          <MainCard
            type={'horizontal'}
            title={'Anti-Fraud'}
            icon={antiFraud}
            body={'Active security monitoring system verifying every transaction.'}
            className={'f1'}
          />
        </div>
      </div>
      <div className={classNames.bottomHorizontalContainer}>
        <MainCard
          type={'horizontal'}
          title={'Liquidity maximisation'}
          icon={blob}
          body={'Aggregation of liquidity pools for deepest on-chain liquidity.'}
          className={'f1'}
        />
        <div className={classNames.smallCardsContainer}>
          <MainCard type={'small'} title={'Anti-Fraud'} icon={gasStation} className={classNames.f05} />
          <MainCard type={'small'} title={'Native tokens'} icon={eth} className={classNames.f05} />
          <MainCard type={'small'} title={'Cross-chain\n' + 'pathfinding'} icon={road} className={classNames.f05} />
        </div>
      </div>
    </Block>
  )
}
