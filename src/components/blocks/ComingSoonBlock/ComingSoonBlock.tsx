import { Block } from '../../layout/Block/Block'
import { Card } from '../../cards/Card/Card'
import { CardHeader } from '../../layout/CardHeader/CardHeader'
import portfolioTracker from '../../../assets/images/ComingSoonBlock/portfolioTracker.png'
import classNames from './ComingSoonBlock.module.pcss'
import referralImg from '../../../assets/images/ComingSoonBlock/referral.svg'

export const ComingSoonBlock = () => {
  return (
    <Block title={'Coming soon'}>
      <div className={classNames.container}>
        <Card className={`${classNames.cardContainer} f1`}>
          <div className={classNames.headerContainer}>
            <CardHeader title={'Portfolio Tracker'} body={'Track the performance of your assets'} />
          </div>
          <div className={classNames.imgContainer}>
            <img src={portfolioTracker} />
          </div>
        </Card>
        <Card className={classNames.referralContainer}>
          <div className={classNames.headerContainer}>
            <CardHeader title={'Referral program'} body={'Invite your friends and earn '} />
          </div>
          <div className={classNames.referralImgContainer}>
            <img src={referralImg} />
          </div>
        </Card>
      </div>
    </Block>
  )
}
