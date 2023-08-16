import { Card } from '../Card/Card'
import { LinkCard } from '../LinkCard/LinkCard'
import classNames from './SocialMediaCard.module.pcss'
import twitterIcon from '../../../assets/icons/twitter.svg'
import discordIcon from '../../../assets/icons/discordIcon.svg'
import mediumIcon from '../../../assets/icons/medium.svg'

const items = [
  {
    imgSrc: twitterIcon,
    link: 'https://twitter.com/concero_io',
  },
  {
    imgSrc: discordIcon,
  },
  {
    imgSrc: mediumIcon,
  },
]

export const SocialMediaCard = () => {
  return (
    <Card padding={'lg'}>
      <h3>Follow</h3>
      <div className={classNames.container}>
        {items.map((item, index: number) => (
          <LinkCard key={index.toString()} imgSrc={item.imgSrc} link={item.link} />
        ))}
      </div>
    </Card>
  )
}
