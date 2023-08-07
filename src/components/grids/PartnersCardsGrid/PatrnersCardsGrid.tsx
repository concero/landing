import { CardSecondary } from '../../cards/CardSecondary/CardSecondary'
import classNames from './PartnersCardsGrid.module.pcss'
import { Button } from '../../layout/Button/Button'

export const PartnersCardsGrid = ({ items }) => {
  return (
    <div className={classNames.container}>
      {items.map((item, index) => {
        return (
          <CardSecondary key={index.toString()} title={item.title} subtitles={item.subtitles} imgSrc={item.imgSrc} />
        )
      })}
      <div className={`${classNames.contactCard} card`}>
        <h3>Let’s work together</h3>
        <p className={`body2 ${classNames.subtitle}`}>We are always looking to grow with new partners</p>
        <Button variant={'secondary'} size={'lg'}>
          <p className={`${classNames.buttonText}`}>Let’s Chat</p>
        </Button>
      </div>
    </div>
  )
}
