import { BlackCard } from '../../cards/BlackCard/BlackCard'
import classNames from './PartnerBlock.module.pcss'
import { items } from './items'
import { Card } from '../../cards/Card/Card'
import { ContactModal } from './ContactModal/ContactModal'
import { useState } from 'react'
import { Button } from '../../layout/Button/Button'
import { IconArrowUpRight } from '@tabler/icons-react'

interface PartnerCardProps {
  title: string
  body: string
  imgSrc: string
  isDisabled?: boolean
}

function PartnerCard({ title, body, imgSrc, isDisabled = false }: PartnerCardProps) {
  return (
    <Card className={classNames.partnerCardContainer}>
      <div className={classNames.imageContainer}>
        <img src={imgSrc} />
      </div>
      <div>
        <p className={`body1 ${classNames.whiteText} ${isDisabled ? classNames.disabled : ''}`}>{title}</p>
        <p className={'body1'}>{body}</p>
      </div>
    </Card>
  )
}

export const PartnersBlock = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <BlackCard>
      <h2 className={`title1 ${classNames.whiteText}`}>Partners</h2>
      <div className={classNames.wrapper}>
        <div className={classNames.cardsContainer}>
          <div className={classNames.column}>
            <PartnerCard title={items[0].title} imgSrc={items[0].imgSrc} body={items[0].body} />
            <PartnerCard title={items[1].title} imgSrc={items[1].imgSrc} body={items[1].body} />
          </div>
          <div className={classNames.column}>
            <PartnerCard title={items[2].title} imgSrc={items[2].imgSrc} body={items[2].body} />
            <PartnerCard title={items[3].title} imgSrc={items[3].imgSrc} body={items[3].body} />
          </div>
        </div>
        <div className={classNames.contactCard}>
          <div className={classNames.contactHeader}>
            <h2>Let’s work together</h2>
            <p className={'body2'}>We are always looking to grow with new partners </p>
          </div>
          <Button
            variant={'primary'}
            size={'lg'}
            rightIcon={<IconArrowUpRight size={20} color={'var(--color-base-white)'} />}
            onClick={() => {
              setIsModalOpen(true)
            }}
            className={classNames.button}
          >
            <h3 className={classNames.buttonTitle}>Sign up</h3>
          </Button>
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
