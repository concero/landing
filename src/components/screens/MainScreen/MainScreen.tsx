import classNames from './MainScreen.module.pcss'
import objectImg from '../../../assets/images/mainScreen/blob.png'
import corner from '../../../assets/images/mainScreen/corner.svg'
import { MainButton } from '../../layout/MainButton/MainButton'
import { LaunchAppIcon } from '../../icons/LaunchAppIcon/LaunchAppIcon'
import { useMediaQuery } from '../../../hooks/useMediaQueryHook'
import { animated, useInView } from '@react-spring/web'
import { fadeInUp, popUp } from '../../../constants/animations'
import logoImg from '../../../assets/images/Footer/LogoWhite.svg'

export const MainScreen = () => {
  const isIpad = useMediaQuery('ipad')
  const isMobile = useMediaQuery('mobile')

  const slideUpLeft = {
    from: { x: 50, y: 50 },
    to: { x: 0, y: 0 },
  }
  const [ref, springs] = useInView(() => fadeInUp)
  const [buttonRef, buttonSprings] = useInView(() => popUp)
  const [imgRef, imgSprings] = useInView(() => slideUpLeft)

  return (
    <div className={`screenContainer ${classNames.container}`}>
      {/*<Header />*/}
      <div className={classNames.bgContainer}>
        <div className={classNames.leftSide}>
          <div className={classNames.headerContainer}>
            <img src={logoImg} className={classNames.logoImg} />
            <animated.h1 ref={ref} style={springs} className={classNames.header}>
              World’s first cross-chain DEX & Staking aggregator
            </animated.h1>
          </div>
          <div className={classNames.cornerContainer}>
            <animated.div className={classNames.buttonContainer} ref={buttonRef} style={buttonSprings}>
              <a href="https://dex.concero.io/exchange" target={'_blank'}>
                <MainButton size={isMobile ? 'sm' : 'lg'} className={classNames.mainButton}>
                  <h2 className={classNames.buttonTitle}>Launch app</h2>
                  <LaunchAppIcon size={isMobile ? 'sm' : isIpad ? 'md' : 'lg'} className={classNames.anime} />
                </MainButton>
              </a>
            </animated.div>
            <img src={corner} />
          </div>
        </div>
        <div className={classNames.rightSide}>
          <animated.div className={classNames.imgContainer} ref={imgRef} style={imgSprings}>
            <img src={objectImg} />
          </animated.div>
          {isMobile ? (
            <div className={classNames.imgContainer2}>
              <img src={objectImg} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
