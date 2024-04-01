import classNames from './MainScreen.module.pcss'
import mainPageFigure from '../../../assets/images/mainScreen/mainPageFigure.webp'
import { Button } from '../../layout/Button/Button'
import { IconArrowUpRight } from '@tabler/icons-react'
import { ContactModal } from '../../blocks/PartnersBlock/ContactModal/ContactModal'
import { useState } from 'react'

export const MainScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <div className={`screenContainer ${classNames.container}`}>
      <div className="cf-turnstile" data-sitekey="0x4AAAAAAAWGficfp02MJ5Oe" data-callback="javascriptCallback"></div>
      <div id="captcha" style={{width: "100vw", height: "100vh", position: "absolute"}}></div>
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
              onClick={() => {
                // setIsModalVisible(true)
                turnstile.render('#captcha', {
                  sitekey: '1x00000000000000000000BB',
                  callback: function(token) {
                    console.log(`Challenge Success ${token}`);
                    window.open('https://send.concero.io/s/cltzo34650007yl7a1qah623z', '_blank')
                  },
                });
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
