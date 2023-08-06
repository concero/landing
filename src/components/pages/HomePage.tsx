import { MainScreen } from '../screens/MainScreen/MainScreen'
import classNames from './HomePage.module.pcss'
import { RoadmapBlock } from '../Blocks/RoadmapBlock/RoadmapBlock'

export const HomePage = () => {
  return (
    <div className={classNames.container}>
      <MainScreen />
      <RoadmapBlock />
    </div>
  )
}
