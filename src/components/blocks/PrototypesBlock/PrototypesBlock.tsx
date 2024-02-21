import classNames from './PrototypesBlock.module.pcss'
import { Block } from '../../layout/Block/Block'
import { Prototype, PrototypeProps } from '../../layout/Prototype/Prototype'
import dex from '../../../assets/images/dexAggregatorBlock/dex.png'
import staking from '../../../assets/images/YieldBlock/stakingAggregaror.png'
import Icosahedron from '../../../assets/images/common/Icosahedron.png'

const items = [
  {
    title: 'Cross-chain Swap',
    body: 'Testing and iterating user interface. Prototype built with integrations of Li.Fi and Rango',
    srcImg: dex,
    buttons: [
      {
        title: 'Launch app',
        link: 'https://app.concero.io',
      },
      {
        title: 'Survey',
        link: 'https://app.concero.io',
      },
    ],
  },
  {
    title: 'Cross-chain Staking',
    body: 'Testing and iterating user interface. Prototype built with integration of Enso',
    srcImg: staking,
    buttons: [
      {
        title: 'Launch app',
        link: 'https://app.concero.io',
      },
    ],
  },
  {
    title: 'General feedback',
    body: 'Please fill out the form to let us know your needs and requirements. This will greatly help us in building the next generation of products',
    srcImg: Icosahedron,
    buttons: [
      {
        title: 'Survey',
        link: 'https://app.concero.io',
      },
    ],
  },
]

export function PrototypesBlock() {
  return (
    <>
      {items.map((item: PrototypeProps, index) => {
        return (
          <Block className={classNames.container} key={index.toString()}>
            <Prototype title={item.title} body={item.body} srcImg={item.srcImg} buttons={item.buttons} />
          </Block>
        )
      })}
    </>
  )
}
