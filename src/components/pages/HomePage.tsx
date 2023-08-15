import { MainScreen } from '../screens/MainScreen/MainScreen'
import classNames from './HomePage.module.pcss'
import { RoadmapBlock } from '../blocks/RoadmapBlock/RoadmapBlock'
import { ChainsBlock } from '../blocks/ChainsBlock/ChainsBlock'
import { PartnersBlock } from '../blocks/PartnersBlock/PartnersBlock'
import { DexAggregatorBlock } from '../blocks/DexAggregatorBlock/DexAggregatorBlock'
import { StackingAggregatorBlock } from '../blocks/StackingAggregatorBlock/StackingAggregatorBlock'
import { ComingSoonBlock } from '../blocks/ComingSoonBlock/ComingSoonBlock'
import { ContactsBlock } from '../blocks/ContactsBlock/ContactsBlock'

export const HomePage = () => {
  return (
    <div className={classNames.container}>
      <MainScreen />
      <DexAggregatorBlock />
      <StackingAggregatorBlock />
      <ComingSoonBlock />
      <RoadmapBlock />
      <ChainsBlock />
      <PartnersBlock />
      <ContactsBlock />
    </div>
  )
}
