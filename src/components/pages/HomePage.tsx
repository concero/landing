import { MainScreen } from '../screens/MainScreen/MainScreen'
import { DexAggregatorScreen } from '../screens/DexAgregatorScreen/DexAggregatorScreen'
import classNames from './HomePage.module.pcss'

export const HomePage = () => {
  return (
    <div className={classNames.container}>
      <MainScreen />
      <DexAggregatorScreen />
    </div>
  )
}
