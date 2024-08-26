import { MainScreen } from '../../screens/MainScreen/MainScreen'
import classNames from './HomePage.module.pcss'

export const HomePage = () => {
  return (
    <div className={classNames.container}>
      <MainScreen />
      {/* <SolvingProblemsBlock />
      <KeyFeaturesBlock />
      <OurProductBlock />
      <DexAggregatorBlock />
      <YieldAggregatorBlock />
      <ComingSoonBlock />
      <RoadmapBlock />
      <ChainsBlock />
      <CcipBlock />
      <PartnersBlock />
      <JoinBlock /> */}
    </div>
  )
}
