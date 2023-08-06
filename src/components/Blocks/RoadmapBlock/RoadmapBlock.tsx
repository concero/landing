import { Block } from '../../layout/Block/Block'
import { SecondaryCardsGid } from '../../cards/SecondaryCardsGrid/SecondaryCardsGid'
import walletIcon from '../../../assets/icons/wallet.svg'

const items = [
  {
    title: 'Q3 ‘23',
    subtitles: ['X-chain DEX aggregator', 'X-chain Staking aggregator'],
    imgSrc: walletIcon,
  },
  {
    title: 'Q4 ‘23',
    subtitles: ['Portfolio tracker', 'Referral scheme'],
    imgSrc: walletIcon,
  },
  {
    title: 'Q1 ‘24',
    subtitles: ['Borrowing aggregator', 'Concero DAO launch'],
    imgSrc: walletIcon,
  },
]

export const RoadmapBlock = () => {
  return (
    <Block title={'Roadmap'}>
      <SecondaryCardsGid items={items} size={'sm'} />
    </Block>
  )
}
