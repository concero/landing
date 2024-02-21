import classNames from './MainPrototypesScreen.module.pcss'
import mainPageFigureLight from '../../../assets/images/mainScreen/mainPageFigureLight.png'

export function MainPrototypesScreen() {
  return (
    <div className={`screenContainer ${classNames.container}`}>
      <div className={classNames.titleContainer}>
        <h1 className={classNames.header}>Help us get it right</h1>
        <p className={'body3'}>A quicker, safer & easier to use cross-chain infrastructure.</p>
      </div>
      <div className={classNames.figureContainer}>
        <img src={mainPageFigureLight} />
      </div>
    </div>
  )
}
