import classNames from './Footer.module.pcss'
import LogoWhite from '../../../assets/images/Footer/LogoWhite.svg'
import { ContactModal } from '../../blocks/PartnersBlock/ContactModal/ContactModal'
import { useState } from 'react'

export function Footer() {
  const [isModalOpened, setIsModalOpened] = useState(false)

  return (
    <footer className={classNames.footer}>
      <div className={classNames.logoContainer}>
        <img src={LogoWhite} />
        {/*<div className={classNames.linksContainer}>*/}
        {/*  <a href="https://discord.gg/nBMAdxYTZK" target={'_blank'}>*/}
        {/*    <img src={discord} />*/}
        {/*  </a>*/}
        {/*  <a href="https://twitter.com/concero_io" target={'_blank'}>*/}
        {/*    <img src={twitter} />*/}
        {/*  </a>*/}
        {/*  <a href="https://medium.com/@concero" target={'_blank'}>*/}
        {/*    <img src={linkedin} />*/}
        {/*  </a>*/}
        {/*</div>*/}
      </div>
      <div className={classNames.aboutContainer}>
        <div className={classNames.columnContainer}>
          <h4 className={classNames.columnTitle}>Socials</h4>
          <div className={classNames.column}>
            <a href="https://discord.gg/nBMAdxYTZK" target={'_blank'}>
              <p className={'body2'}>Discord</p>
            </a>
            <a href="https://twitter.com/concero_io" target={'_blank'}>
              <p className={'body2'}>Twitter</p>
            </a>
            <a href="https://medium.com/@concero" target={'_blank'}>
              <p className={'body2'}>Medium</p>
            </a>
          </div>
        </div>
        <div className={classNames.columnContainer}>
          <h4 className={classNames.columnTitle}>Company</h4>
          <div className={classNames.column}>
            <p className={'body2'}>What is Concero</p>
            <p className={'body2'}>P2P Protocol</p>
            <p className={'body2'}>Help us</p>
          </div>
        </div>
        <div className={classNames.columnContainer}>
          <h4 className={classNames.columnTitle}>About</h4>
          <div className={classNames.column}>
            <p className={'body2'}>Terms & Conditions</p>
            <p className={'body2'}>Privacy Policy</p>
          </div>
        </div>

        {/*<div className={classNames.columnContainer}>*/}
        {/*  <div>*/}
        {/*    <MainButton size={'md'} onClick={() => setIsModalOpened(true)}>*/}
        {/*      <p>Contact us</p>*/}
        {/*    </MainButton>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
      <ContactModal
        show={isModalOpened}
        setShow={setIsModalOpened}
        title={'Сontact us'}
        body={'Reach out if you have any requests, questions, problems or just want to chat.'}
      />
    </footer>
  )
}
