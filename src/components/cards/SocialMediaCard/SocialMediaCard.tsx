import { Card } from '../Card/Card'
import classNames from './SocialMediaCard.module.pcss'

export const SocialMediaCard = () => {
  return (
    <Card padding={'lg'}>
      <h3>Follow</h3>
      <div className={classNames.container}></div>
    </Card>
  )
}
