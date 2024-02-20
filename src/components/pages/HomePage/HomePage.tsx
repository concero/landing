import { MainScreen } from '../../screens/MainScreen/MainScreen'
import { PartnersBlock } from '../../blocks/PartnersBlock/PartnersBlock'
import { JoinBlock } from '../../blocks/JoinBlock/JoinBlock'
import { SolvingProblemsBlock } from '../../blocks/SolvingProblemsBlock/SolvingProblemsBlock'
import { KeyFeaturesBlock } from '../../blocks/KeyFeaturesBlock/KeyFeaturesBlock'
import { OurProductBlock } from '../../blocks/OurProductBlock/OurProductBlock'
import { CcipBlock } from '../../blocks/CcipBlock/CcipBlock'

export const HomePage = () => {
  return (
    <>
      <MainScreen />
      <SolvingProblemsBlock />
      <KeyFeaturesBlock />
      <OurProductBlock />
      {/*<DexAggregatorBlock />*/}
      {/*<YieldAggregatorBlock />*/}
      {/*<ComingSoonBlock />*/}
      {/*<RoadmapBlock />*/}
      {/*<ChainsBlock />*/}
      <CcipBlock />
      <PartnersBlock />
      <JoinBlock />
    </>
  )
}
