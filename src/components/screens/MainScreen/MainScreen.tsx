import classNames from './MainScreen.module.pcss'
import mainPageFigure from '../../../assets/images/mainScreen/mainPageFigure.png'
import { Button } from '../../layout/Button/Button'
import { IconArrowUpRight } from '@tabler/icons-react'

export const MainScreen = () => {
  return (
    <div className={`screenContainer ${classNames.container}`}>
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
                window.open('`https://app.concero.io`', '_blank')
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
        </div>
      </div>
    </div>
  )
}
