import classNames from './DexAggregatorScreen.module.pcss'
import { CardSecondary } from '../../cards/CardSecondary/CardSecondary'
import walletIcon from '../../../assets/icons/wallet.svg'
import { Block } from '../../layout/Block/Block'

export const DexAggregatorScreen = () => {
  return (

      {/*<div className={'headerContainer'}>*/}
      {/*  <h1 className={'title1'}>Dex Aggregator</h1>*/}
      {/*</div>*/}
      {/*/!*<PrimaryCardsGrid items.ts={items.ts} />*!/*/}
      {/*<CardSecondary*/}
      {/*  title={'Q3 ‘23'}*/}
      {/*  subtitle={'X-chain DEX aggregator\n' + 'X-chain Staking aggregator'}*/}
      {/*  size={'sm'}*/}
      {/*  imgSrc={walletIcon}*/}
      {/*/>*/}
      <Block title={'Dex Aggregator'}>
        <CardSecondary
          title={'Q3 ‘23'}
          subtitle={'X-chain DEX aggregator\n' + 'X-chain Staking aggregator'}
          size={'sm'}
          imgSrc={walletIcon}
        />
      </Block>
  )
}
