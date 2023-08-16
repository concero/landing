import { Card } from '../Card/Card'
import classNames from './LinkCard.module.pcss'

interface LinkCardProps {
  imgSrc: string
  link: string
}

export const LinkCard: FC<LinkCardProps> = ({ imgSrc, link }) => {
  return (
    <a href={link} target={'_blank'}>
      <Card color={'white'} className={classNames.container}>
        <div className={classNames.iconContainer}>
          <img src={imgSrc} className={classNames.icon} />
        </div>
      </Card>
    </a>
  )
}
