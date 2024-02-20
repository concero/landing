import { MainScreen } from '../screens/MainScreen/MainScreen'
import { YieldAggregatorBlock } from '../blocks/YieldAggregatorBlock/YieldAggregatorBlock'
import { DexAggregatorBlock } from '../blocks/DexAggregatorBlock/DexAggregatorBlock'
import { ComingSoonBlock } from '../blocks/ComingSoonBlock/ComingSoonBlock'
import { ChainsBlock } from '../blocks/ChainsBlock/ChainsBlock'
import { PartnersBlock } from '../blocks/PartnersBlock/PartnersBlock'
import { JoinBlock } from '../blocks/JoinBlock/JoinBlock'
import { Footer } from '../layout/Footer/Footer'
import classNames from './HomePage.module.pcss'
import { SolvingProblemsBlock } from '../blocks/SolvingProblemsBlock/SolvingProblemsBlock'

export const HomePage = () => {
  return (
    <div className={classNames.container}>
      <MainScreen />
      <SolvingProblemsBlock />
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
