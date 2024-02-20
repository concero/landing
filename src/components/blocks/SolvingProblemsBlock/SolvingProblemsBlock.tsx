import { Block } from '../../layout/Block/Block'
import { TopicPicker } from '../../layout/TopicPicker/TopicPicker'
import rightUpArrows from '../../../assets/icons/rightUpArrows.svg'
import security from '../../../assets/icons/security.svg'
import click from '../../../assets/icons/click.svg'

const items = [
  {
    id: '1',
    title: 'Speed',
    body: 'Minimising time between signing a transaction and execution for ultimate user experience',
    icon: rightUpArrows,
  },
  {
    id: '2',
    title: 'Security',
    body: 'Fully decentralised system with insurance and security features that protects user funds',
    icon: security,
  },
  {
    id: '3',
    title: 'Ease of use',
    body: 'Minimising friction through abstraction to achieve 1 click execution with no hassle',
    icon: click,
  },
]

export function SolvingProblemsBlock() {
  return (
    <Block>
      <TopicPicker
        items={items}
        title={'Solving problems people care about'}
        body={
          'We have spent the last 9 months talking to users and studying the market to understand what the biggest pain points there are in cross chain DeFi and we are working on solving them.'
        }
      />
    </Block>
  )
}
