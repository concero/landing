import { Block } from '../../layout/Block/Block'
import { Card } from '../../cards/Card/Card'
import { CardHeader } from '../../layout/CardHeader/CardHeader'
import portfolio1 from '../../../assets/images/ComingSoonBlock/portfolio1.svg'
import portfolio2 from '../../../assets/images/ComingSoonBlock/portfolio2.svg'
import portfolio3 from '../../../assets/images/ComingSoonBlock/portfolio3.svg'
import classNames from './ComingSoonBlock.module.pcss'
import referralImg from '../../../assets/images/ComingSoonBlock/referral.svg'

export const ComingSoonBlock = () => {
  return (
    <Block title={'Coming soon'}>
      <div className={classNames.container}>
        <Card color={'black'} className={`${classNames.cardContainer} f1`}>
          <div className={classNames.headerContainer}>
            <CardHeader title={'Portfolio\n Tracker'} body={'Track the performance of your assets'} variant={'white'} />
          </div>
          <div className={classNames.imagesContainer}>
            <div className={classNames.imgContainer}>
              <img src={portfolio1} />
            </div>
            <div className={classNames.imgContainer}>
              <img src={portfolio2} />
            </div>
            <div className={classNames.imgContainer}>
              <img src={portfolio3} />
            </div>
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
