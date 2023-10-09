import classNames from './Footer.module.pcss'
import LogoWhite from '../../../assets/images/Footer/LogoWhite.svg'
import discord from '../../../assets/images/Footer/discord.svg'
import twitter from '../../../assets/images/Footer/twitter.svg'
import linkedin from '../../../assets/images/Footer/linkedin.svg'

export function Footer() {
  return (
    <footer className={classNames.footer}>
      <div className={classNames.logoContainer}>
        <img src={LogoWhite} />
        <div className={classNames.linksContainer}>
          <img src={discord} />
          <img src={twitter} />
          <img src={linkedin} />
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
      </div>
    </footer>
  )
}
