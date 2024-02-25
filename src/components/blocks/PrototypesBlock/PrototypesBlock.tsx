import classNames from './PrototypesBlock.module.pcss'
import { Block } from '../../layout/Block/Block'
import { Prototype, PrototypeProps } from '../../layout/Prototype/Prototype'
import dex from '../../../assets/images/dexAggregatorBlock/dex.png'
import staking from '../../../assets/images/YieldBlock/earn.png'

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
        link: 'https://forms.gle/cooNJZ5jTmtb4PLr7',
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
        link: 'https://app.concero.io/earn',
      },
      {
        title: 'Survey',
        link: 'https://forms.gle/XkpPeRp5FcnyKpq6A',
      },
    ],
  },
]

export function PrototypesBlock() {
  return (
    <div className={classNames.container}>
      {items.map((item: PrototypeProps, index) => {
        return (
          <Block className={classNames.container} key={index.toString()}>
            <Prototype title={item.title} body={item.body} srcImg={item.srcImg} buttons={item.buttons} />
          </Block>
        )
      })}
    </div>
  )
}
