import classNames from './MainScreen.module.pcss'
import mainPageFigure from '../../../assets/images/mainScreen/mainPageFigure.webp'
import { Button } from '../../layout/Button/Button'
import { IconArrowUpRight } from '@tabler/icons-react'
import { ContactModal } from '../../blocks/PartnersBlock/ContactModal/ContactModal'
import { useState } from 'react'
import DiscordIcon from '../../icons/DiscordIcon'
import XIcon from '../../icons/XIcon'
import MediumIcon from '../../icons/MediumIcon'
import TelegramIcon from '../../icons/TelegramIcon'

export const MainScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className={`screenContainer ${classNames.container}`}>
      {/* <div className="cf-turnstile" data-sitekey="0x4AAAAAAAWGficfp02MJ5Oe" data-callback="javascriptCallback"></div>
      <div id="captcha" /> */}
      {/* <div className={classNames.bgContainer}> */}
      <div className={classNames.blank} />
      <div className={classNames.titleContainer}>
        <h1 className={classNames.header}>
          Decentralised<p className={classNames.asterisk}>*</p> interoperability protocol
        </h1>
        <h1 className={classNames.subTitle}>Fast, secure, one-click</h1>
        <div className={classNames.captionContainer}>
          <h3 className={classNames.caption}>*And we mean Fully Decentralised</h3>
          <div className={classNames.socialIconsContainer}>
            <div className={classNames.socialIconContainer} style={{ backgroundColor: '#475467' }}>
              <XIcon width={32} height={32} fill="white" />
            </div>
            <div className={classNames.socialIconContainer} style={{ backgroundColor: '#5865F2' }}>
              <DiscordIcon width={32} height={32} fill="white" />
            </div>
            <div className={classNames.socialIconContainer} style={{ backgroundColor: '#475467' }}>
              <MediumIcon width={32} height={32} fill="white" />
            </div>
          </div>
        </div>
      </div>
      <img src="src/assets/images/landing/Desktop.png" alt="Landing Image" />

      {/* </div> */}
      <ContactModal
        show={isModalVisible}
        setShow={setIsModalVisible}
        title={'Sign up to waitlist'}
        isMessageNeeded={false}
      />
    </div>
  )
}
