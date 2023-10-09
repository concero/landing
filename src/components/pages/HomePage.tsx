import { MainScreen } from '../screens/MainScreen/MainScreen'
import { YieldAggregatorBlock } from '../blocks/YieldAggregatorBlock/YieldAggregatorBlock'
import { DexAggregatorBlock } from '../blocks/DexAggregatorBlock/DexAggregatorBlock'
import { ComingSoonBlock } from '../blocks/ComingSoonBlock/ComingSoonBlock'
import { RoadmapBlock } from '../blocks/RoadmapBlock/RoadmapBlock'
import { ChainsBlock } from '../blocks/ChainsBlock/ChainsBlock'

export const HomePage = () => {
  return (
    <div>
      <MainScreen />
      <YieldAggregatorBlock />
      <DexAggregatorBlock />
      <ComingSoonBlock />
      <RoadmapBlock />
      <ChainsBlock />
    </div>
  )
}
