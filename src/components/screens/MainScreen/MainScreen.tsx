import classNames from './MainScreen.module.pcss'
import objectImg from '../../../assets/images/mainScreen/object.svg'

export const MainScreen = () => {
  return (
    <div className={`screenContainer ${classNames.container}`}>
      <div className={classNames.bgContainer}>
        <div className={classNames.headerContainer}>
          <h1 className={classNames.header}>World’s first cross-chain DEX & Staking aggregator</h1>
        </div>
        <div className={classNames.imgContainer}>
          <img src={objectImg} />
        </div>
      </div>
    </div>
  )
}
