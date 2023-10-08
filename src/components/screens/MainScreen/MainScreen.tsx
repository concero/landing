import classNames from './MainScreen.module.pcss'
import objectImg from '../../../assets/images/mainScreen/object.svg'
import { Header } from '../../layout/Header/Header'

export const MainScreen = () => {
  return (
    <div className={`screenContainer ${classNames.container}`}>
      <Header />
      <div className={classNames.bgContainer}>
        <div className={classNames.leftSide}>
          <div className={classNames.headerContainer}>
            <h1 className={classNames.header}>World’s first cross-chain DEX & Staking aggregator</h1>
          </div>
          <div className={classNames.leftConor}></div>
        </div>
        <div className={classNames.rightSide}>
          <div className={classNames.rightSideInnerContainer}>
            <div className={classNames.imgContainer}>
              <img src={objectImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
