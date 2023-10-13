import { BlackCard } from '../../cards/BlackCard/BlackCard'
import { BlackCardHeader } from '../../cards/BlackCard/BlackCardHeader'
import classNames from './PartnerBlock.module.pcss'
import { items } from './items'
import { Card } from '../../cards/Card/Card'
import { MainButton } from '../../layout/MainButton/MainButton'
import { ContactModal } from './ContactModal/ContactModal'
import { useState } from 'react'

interface PartnerCardProps {
  title: string
  imgSrc: string
  isDisabled?: boolean
}

function PartnerCard({ title, imgSrc, isDisabled = false }: PartnerCardProps) {
  return (
    <Card className={classNames.partnerCardContainer}>
      <div className={classNames.imageContainer}>
        <img src={imgSrc} />
      </div>
      <p className={`body1 ${isDisabled ? classNames.disabled : ''}`}>{title}</p>
    </Card>
  )
}

export const PartnersBlock = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <BlackCard>
      <BlackCardHeader title={'Partners'} />
      <div className={classNames.wrapper}>
        <div className={classNames.cardsContainer}>
          <div className={classNames.column}>
            <PartnerCard title={items[0].title} imgSrc={items[0].imgSrc} />
            <PartnerCard title={items[1].title} imgSrc={items[1].imgSrc} />
            <PartnerCard title={items[2].title} imgSrc={items[2].imgSrc} />
          </div>
          <div className={classNames.column}>
            <PartnerCard title={items[3].title} imgSrc={items[3].imgSrc} />
            <PartnerCard title={items[4].title} imgSrc={items[4].imgSrc} />
            <PartnerCard title={items[5].title} imgSrc={items[5].imgSrc} isDisabled={true} />
          </div>
        </div>
        <div className={classNames.contactCard}>
          <div className={classNames.contactHeader}>
            <h2>Let’s work together</h2>
            <p className={'body2'}>We are always looking to grow with new partners </p>
          </div>
          <MainButton size={'md'} onClick={() => setIsModalOpen(true)}>
            <p>Let’s Chat</p>
          </MainButton>
        </div>
      </div>
      <ContactModal
        show={isModalOpen}
        setShow={setIsModalOpen}
        title={'Let’s work together '}
        body={'We are always looking to grow with new partners '}
      />
    </BlackCard>
  )
}
