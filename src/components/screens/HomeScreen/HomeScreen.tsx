import classNames from './HomeScreen.module.pcss'
import { CardsGrid } from '../../cards/CardsGrid/CardsGrid'

const items = [
  {
    id: '1',
    title: 'Test',
    subtitle: 'test1',
  },
  {
    id: '2',
    title: 'Test',
    subtitle: 'test2',
  },
  {
    id: '3',
    title: 'Test',
    subtitle: 'test3',
  },
  {
    id: '4',
    title: 'Test',
    subtitle: 'test4',
  },
  {
    id: '5',
    title: 'Test',
    subtitle: 'test5',
  },
]

export const HomeScreen = () => {
  return (
    <div className={classNames.container}>
      <CardsGrid items={items} />
    </div>
  )
}
