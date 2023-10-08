import { MainScreen } from '../screens/MainScreen/MainScreen'
import { YieldAggregatorBlock } from '../blocks/YieldAggregatorBlock/YieldAggregatorBlock'
import { DexAggregatorBlock } from '../blocks/DexAggregatorBlock/DexAggregatorBlock'

export const HomePage = () => {
  return (
    <div>
      <MainScreen />
      <YieldAggregatorBlock />
      <DexAggregatorBlock />
    </div>
  )
}
