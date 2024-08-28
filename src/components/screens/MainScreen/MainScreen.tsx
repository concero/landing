import classNames from './MainScreen.module.pcss'
import { useEffect, useState } from 'react'
import DiscordIcon from '../../icons/DiscordIcon'
import XIcon from '../../icons/XIcon'
import MediumIcon from '../../icons/MediumIcon'
import MobileImg from '../../../assets/images/landing/Mobile.png'
import Desktop from '../../../assets/images/landing/Desktop.png'
import Tablet from '../../../assets/images/landing/Tablet.png'

export const MainScreen = () => {
  const [imageSrc, setImageSrc] = useState(Desktop)

  const handleClick = (link) => {
    window.open(link, '_blank')
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageSrc(MobileImg)
      } else if (window.innerWidth <= 1024) {
        setImageSrc(Tablet)
      } else {
        setImageSrc(Desktop)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <div className={classNames.screenContainer}>
      <div className={classNames.blank} />
      <div className={classNames.titleContainer}>
        <div>
          <h1 className={classNames.header}>
            Decentralised<p className={classNames.asterisk}>*</p> interoperability protocol
          </h1>
          <h1 className={classNames.subTitle}>Fast, secure, one-click</h1>
          <h3 className={classNames.caption}>*And we mean Fully Decentralised</h3>
        </div>

        <div className={classNames.socialIconsContainer}>
          <div className={classNames.darkIconContainer} onClick={() => handleClick('https://x.com/concero_io')}>
            <XIcon width={24} height={24} fill="white" />
          </div>
          <div className={classNames.discrodIconContainer} onClick={() => handleClick('https://discord.gg/nBMAdxYTZK')}>
            <DiscordIcon width={24} height={24} fill="white" />
          </div>
          <div className={classNames.darkIconContainer} onClick={() => handleClick('https://medium.com/@concero')}>
            <MediumIcon width={24} height={24} fill="white" />
          </div>
        </div>
      </div>
      <div className={classNames.imgContainer}>
        <img src={imageSrc} alt="Landing Image" />
      </div>
    </div>
  )
}
