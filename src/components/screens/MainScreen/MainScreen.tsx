import classNames from './MainScreen.module.pcss'
import { Button } from '../../layout/Button/Button'
import Icon from '../../Icon'
import { colors } from '../../../constants/colors'

export const MainScreen = () => {
  return (
    <div className={`screenContainer ${classNames.container}`}>
      <div className={classNames.mainContainer}>
        <div className={classNames.titleContainer}>
          <h1 className={classNames.title}>World’s first cross-chain DEX & Staking aggregator</h1>
          <div className={classNames.subtitleContainer}>
            <p className={'body1'}>Any token</p>
            <p className={'body1'}>Any blockchain</p>
            <p className={'body1'}>One place</p>
          </div>
          <div className={classNames.buttonContainer}>
            <Button variant="primary" className={classNames.button}>
              <Icon name={'ArrowsDiff'} size={18} className={classNames.buttonIcon} />
              <p className={'body2'}>Launch app</p>
            </Button>
          </div>
        </div>
        <div className={classNames.imgContainer}>
          <img src={'src/assets/images/mainScreen/img.png'} />
        </div>
      </div>
      <div className={classNames.learnMoreContainer}>
        <p className={'body2'}>Learn more</p>
        <Icon name={'ChevronDown'} size={18} color={colors.text.secondary} />
      </div>
    </div>
  )
}
