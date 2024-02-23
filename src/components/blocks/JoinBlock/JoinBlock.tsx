import { Block } from '../../layout/Block/Block'
import { Card } from '../../cards/Card/Card'
import classNames from './JoinBlock.module.pcss'
import object1 from '../../../assets/images/mainScreen/mainPageFigure.png'
import { useState } from 'react'
import { Button } from '../../layout/Button/Button'
import { IconArrowUpRight } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import { routes } from '../../../constants/routes'
import { ContactModal } from '../PartnersBlock/ContactModal/ContactModal'

export function JoinBlock() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <Block className={classNames.wrapper}>
      <Card className={classNames.cardContainer}>
        <div className={classNames.titleContainer}>
          <div>
            <h2>Join waitlist</h2>
            <p className={'body1'}>Be among the first ones to participate in Concero testnet.</p>
          </div>
          <div className={classNames.inputContainer}>
            {/*<Input*/}
            {/*  placeholder={'E-mail'}*/}
            {/*  type={'email'}*/}
            {/*  onChange={(e) => setInputs({ ...inputs, email: e.target.value })}*/}
            {/*  value={inputs.email}*/}
            {/*  className={classNames.input}*/}
            {/*/>*/}
            <Button
              variant={'primary'}
              size={'lg'}
              className={classNames.launchAppButton}
              rightIcon={<IconArrowUpRight size={20} color={'var(--color-base-white)'} />}
              onClick={() => {
                setIsModalVisible(true)
              }}
            >
              <h3 className={`${classNames.buttonTitle} ${classNames.buttonTitleSize}`}>Contact us</h3>
            </Button>
            <Link to={routes.prototypes}>
              <Button
                variant={'transparent'}
                size={'lg'}
                className={classNames.launchAppButton}
                rightIcon={<IconArrowUpRight size={20} color={'var(--color-base-black)'} />}
              >
                <h3 className={classNames.buttonTitleSize}>Help us test</h3>
              </Button>
            </Link>
          </div>
        </div>
        <div className={classNames.imgContainer}>
          <img src={object1} />
        </div>
      </Card>
      <ContactModal
        show={isModalVisible}
        setShow={setIsModalVisible}
        title={'Sign up to waitlist'}
        isMessageNeeded={false}
      />
    </Block>
  )
}
