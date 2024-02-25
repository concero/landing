import { MainPrototypesScreen } from '../../screens/MainPrototypesScreen/MainPrototypesScreen'
import { PrototypesBlock } from '../../blocks/PrototypesBlock/PrototypesBlock'
import { BenefitsBlock } from '../../blocks/BenefitsBlock/BenefitsBlock'
import classNames from './PrototypesPage.module.pcss'

export function PrototypesPage() {
  return (
    <div className={classNames.container}>
      <MainPrototypesScreen />
      <PrototypesBlock />
      <BenefitsBlock />
    </div>
  )
}
