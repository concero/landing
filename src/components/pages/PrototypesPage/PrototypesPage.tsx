import { MainPrototypesScreen } from '../../screens/MainPrototypesScreen/MainPrototypesScreen'
import { PrototypesBlock } from '../../blocks/PrototypesBlock/PrototypesBlock'
import { BenefitsBlock } from '../../blocks/BenefitsBlock/BenefitsBlock'

export function PrototypesPage() {
  return (
    <div>
      <MainPrototypesScreen />
      <PrototypesBlock />
      <BenefitsBlock />
    </div>
  )
}
