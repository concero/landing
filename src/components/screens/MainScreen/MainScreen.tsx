import classNames from './MainScreen.module.pcss'
import mainPageFigure from '../../../assets/images/mainScreen/mainPageFigure.webp'
import { Button } from '../../layout/Button/Button'
import { IconArrowUpRight } from '@tabler/icons-react'
import { ContactModal } from '../../blocks/PartnersBlock/ContactModal/ContactModal'
import { useState } from 'react'

export const MainScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className={`screenContainer ${classNames.container}`}>
      <div className="cf-turnstile" data-sitekey="0x4AAAAAAAWGficfp02MJ5Oe" data-callback="javascriptCallback"></div>
      <div id="captcha" />
      <div className={classNames.bgContainer}>
        <div className={classNames.leftSide}>
          <div className={classNames.headerContainer}>
            <div className={classNames.titleContainer}>
              <h1 className={classNames.header}>Making cross-chain effortless</h1>
              <h3 className={classNames.subTitle}>A quicker, safer & easier to use cross-chain infrastructure.</h3>
            </div>
            <Button
              variant={'primary'}
              size={'lg'}
              className={classNames.launchAppButton}
              rightIcon={<IconArrowUpRight size={20} color={'var(--color-base-white)'} />}
              isLoading={isLoading}
              onClick={() => {
                setIsLoading(true)
                turnstile.render('#captcha', {
                  sitekey: process.env.CLOUDFLARE_SITEKEY as string,
                  callback: function (token) {
                    console.log(`Challenge Success ${token}`)
                    window.location.href = 'https://send.concero.io/s/cltzo34650007yl7a1qah623z';
                    setIsLoading(false)
                  },
                })
              }}
            >
              <h3 className={classNames.buttonTitle}>Join testnet</h3>
            </Button>
          </div>
        </div>
        <div className={classNames.rightSide}>
          <div className={classNames.imgContainer}>
            <img src={mainPageFigure} />
          </div>
        </div>
      </div>
      <ContactModal
        show={isModalVisible}
        setShow={setIsModalVisible}
        title={'Sign up to waitlist'}
        isMessageNeeded={false}
      />
    </div>
  )
}
