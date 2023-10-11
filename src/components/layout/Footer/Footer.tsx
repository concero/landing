import classNames from './Footer.module.pcss'
import LogoWhite from '../../../assets/images/Footer/LogoWhite.svg'
import discord from '../../../assets/images/Footer/discord.svg'
import twitter from '../../../assets/images/Footer/twitter.svg'
import linkedin from '../../../assets/images/Footer/linkedin.svg'
import { MainButton } from '../MainButton/MainButton'
import { ContactModal } from '../../blocks/PartnersBlock/ContactModal/ContactModal'
import { useState } from 'react'

export function Footer() {
  const [isModalOpened, setIsModalOpened] = useState(false)

  return (
    <footer className={classNames.footer}>
      <div className={classNames.logoContainer}>
        <img src={LogoWhite} />
        <div className={classNames.linksContainer}>
          <a href="https://discord.gg/nBMAdxYTZK" target={'_blank'}>
            <img src={discord} />
          </a>
          <a href="https://twitter.com/concero_io" target={'_blank'}>
            <img src={twitter} />
          </a>
          <a href="https://medium.com/@concero" target={'_blank'}>
            <img src={linkedin} />
          </a>
        </div>
      </div>
      <div className={classNames.aboutContainer}>
        <div className={classNames.columnContainer}>
          <h4 className={classNames.columnTitle}>COMPANY</h4>
          <div className={classNames.column}>
            <p className={'body2'}>What is Concero</p>
            <p className={'body2'}>P2P Protocol</p>
            <p className={'body2'}>Help us</p>
          </div>
        </div>
        <div className={classNames.columnContainer}>
          <h4 className={classNames.columnTitle}>ABOUT</h4>
          <div className={classNames.column}>
            <p className={'body2'}>Terms & Conditions</p>
            <p className={'body2'}>Privacy Policy</p>
          </div>
        </div>
        <div className={classNames.columnContainer}>
          <div>
            <MainButton size={'md'} onClick={() => setIsModalOpened(true)}>
              Contact us
            </MainButton>
          </div>
        </div>
      </div>
      <ContactModal
        show={isModalOpened}
        setShow={setIsModalOpened}
        title={'Сontact us'}
        body={'Etiam eu turpis molestie, dictum est a, mattis tellus.'}
      />
    </footer>
  )
}
