import classNames from './MainScreen.module.pcss'
import objectImg from '../../../assets/images/mainScreen/object.svg'
import corner from '../../../assets/images/mainScreen/corner.svg'
import { Header } from '../../layout/Header/Header'
import { MainButton } from '../../layout/MainButton/MainButton'
import { LaunchAppIcon } from '../../icons/LaunchAppIcon/LaunchAppIcon'

export const MainScreen = () => {
  return (
    <div className={`screenContainer ${classNames.container}`}>
      <Header />
      <div className={classNames.bgContainer}>
        <div className={classNames.leftSide}>
          <div className={classNames.headerContainer}>
            <h1 className={classNames.header}>World’s first cross-chain DEX & Staking aggregator</h1>
          </div>
          <div className={classNames.cornerContainer}>
            <div className={classNames.buttonContainer}>
              <MainButton size={'lg'}>
                <h2 className={classNames.buttonTitle}>Launch app</h2>
                <LaunchAppIcon size={'lg'} />
              </MainButton>
            </div>
            <img src={corner} />
          </div>
        </div>
        <div className={classNames.rightSide}>
          <div className={classNames.imgContainer}>
            <img src={objectImg} />
          </div>
        </div>
      </div>
    </div>
  )
}
