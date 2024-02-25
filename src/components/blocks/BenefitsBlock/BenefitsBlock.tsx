import { Block } from '../../layout/Block/Block'
import { TopicPicker } from '../../layout/TopicPicker/TopicPicker'
import rightUpArrows from '../../../assets/icons/rightUpArrows.svg'
import copy from '../../../assets/icons/copy.svg'
import user from '../../../assets/icons/user.svg'

const items = [
  {
    id: '1',
    title: 'Points',
    body: 'Concero Points will be awarded to participants. Number of points directly correlates to feedback quality (flattery is not quality).',
    icon: rightUpArrows,
  },
  {
    id: '2',
    title: 'NFTs',
    body: 'Exclusive NFTs will be awarded. Reward tier will be directly correlated to feedback quality (flattery is not quality).',
    icon: copy,
  },
  {
    id: '3',
    title: 'Role',
    body: 'Exclusive role will be awarded. You will be able to participate in future product developments and influence decision making.',
    icon: user,
  },
]

export function BenefitsBlock() {
  return (
    <Block>
      <TopicPicker
        title={'Benefits of participating in user testing'}
        body={
          'Users that participate in testing are one of the most valued community members. We are extending exclusive rewards to those who choose to participate. All rewards are distributed at mainnet launch.'
        }
        items={items}
      />
    </Block>
  )
}
