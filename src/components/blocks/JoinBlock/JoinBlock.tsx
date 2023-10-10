import { Block } from '../../layout/Block/Block'
import { Card } from '../../cards/Card/Card'
import classNames from './JoinBlock.module.pcss'
import { MainButton } from '../../layout/MainButton/MainButton'
import object1 from '../../../assets/images/JoinBlock/object1.svg'

export function JoinBlock() {
  return (
    <Block>
      <Card className={classNames.cardContainer}>
        <div className={classNames.titleContainer}>
          <div>
            <h2>Join newsletter</h2>
            <p className={'body1'}>Be the first to know about progress, trading competitions, new features and more.</p>
          </div>
          <MainButton size={'md'}>
            <h4>Submit</h4>
          </MainButton>
        </div>
        <div className={classNames.imgContainer}>
          <img src={object1} />
        </div>
      </Card>
    </Block>
  )
}
