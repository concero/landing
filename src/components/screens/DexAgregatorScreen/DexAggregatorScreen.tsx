import classNames from './DexAggregatorScreen.module.pcss'
import { CardSecondary } from '../../cards/CardSecondary/CardSecondary'
import walletIcon from '../../../assets/icons/wallet.svg'

export const DexAggregatorScreen = () => {
  return (
    <div className={`screenContainer ${classNames.container}`}>
      <div className={'headerContainer'}>
        <h1 className={'title1'}>Dex Aggregator</h1>
      </div>
      {/*<CardsGrid items={items} />*/}
      <CardSecondary
        title={'Q3 ‘23'}
        subtitle={'X-chain DEX aggregator\n' + 'X-chain Staking aggregator'}
        size={'sm'}
        imgSrc={walletIcon}
      />
    </div>
  )
}
