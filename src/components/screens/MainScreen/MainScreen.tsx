import classNames from './MainScreen.module.pcss'
import mainPageFigure from '../../../assets/images/mainScreen/mainPageFigure.png'
import { useMediaQuery } from '../../../hooks/useMediaQueryHook'
import { Button } from '../../layout/Button/Button'
import { IconArrowUpRight } from '@tabler/icons-react'
import { Header } from '../../layout/Header/Header'

export const MainScreen = () => {
  const isMobile = useMediaQuery('mobile')
  const slideUpLeft = {
    from: { x: 50, y: 50 },
    to: { x: 0, y: 0 },
  }
  // const [ref, springs] = useInView(() => fadeInUp)
  // const [imgRef, imgSprings] = useInView(() => slideUpLeft)

  return (
    <div className={`screenContainer ${classNames.container}`}>
      <Header />
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
                window.open('https://app.concero.io', '_blank')
              }}
            >
              <h3 className={classNames.buttonTitle}>Launch app</h3>
            </Button>
          </div>
        </div>
        <div className={classNames.rightSide}>
          <div className={classNames.imgContainer}>
            <img src={mainPageFigure} />
          </div>
          {isMobile ? (
            <div className={classNames.imgContainer2}>
              <img src={mainPageFigure} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
