import { MainScreen } from '../screens/MainScreen/MainScreen'
import { YieldAggregatorBlock } from '../blocks/YieldAggregatorBlock/YieldAggregatorBlock'
import { DexAggregatorBlock } from '../blocks/DexAggregatorBlock/DexAggregatorBlock'
import { ComingSoonBlock } from '../blocks/ComingSoonBlock/ComingSoonBlock'
import { ChainsBlock } from '../blocks/ChainsBlock/ChainsBlock'
import { PartnersBlock } from '../blocks/PartnersBlock/PartnersBlock'
import { JoinBlock } from '../blocks/JoinBlock/JoinBlock'
import { Footer } from '../layout/Footer/Footer'

export const HomePage = () => {
  return (
    <div>
      <MainScreen />
      <DexAggregatorBlock />
      <YieldAggregatorBlock />
      <ComingSoonBlock />
      {/*<RoadmapBlock />*/}
      <ChainsBlock />
      <PartnersBlock />
      <JoinBlock />
      <Footer />
    </div>
  )
}
