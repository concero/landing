import { Block } from '../../layout/Block/Block'
import { SendFrom } from '../../cards/SendFormCard/SendFormCard'
import { SocialMediaCard } from '../../cards/SocialMediaCard/SocialMediaCard'
import classNames from './ContactsBlock.module.pcss'

export const ContactsBlock = () => {
  return (
    <Block>
      <div className={classNames.container}>
        <SendFrom />
        <SocialMediaCard />
      </div>
    </Block>
  )
}
