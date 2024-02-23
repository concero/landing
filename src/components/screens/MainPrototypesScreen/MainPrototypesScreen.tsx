import classNames from './MainPrototypesScreen.module.pcss'
import mainPageFigure from '../../../assets/images/mainScreen/mainPageFigureLight.png'

export const MainPrototypesScreen = () => {
  return (
    <div className={`screenContainer ${classNames.container}`}>
      <div className={classNames.bgContainer}>
        <div className={classNames.leftSide}>
          <div className={classNames.headerContainer}>
            <div className={classNames.titleContainer}>
              <h1 className={classNames.header}>Help us get it right</h1>
              <h3 className={`body1 ${classNames.subTitle}`}>
                A quicker, safer & easier to use cross-chain infrastructure.
              </h3>
            </div>
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
