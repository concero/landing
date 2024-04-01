import classNames from './Header.module.pcss'
import { Logo } from './Logo'
import { Button } from '../Button/Button'
import { IconArrowUpRight } from '@tabler/icons-react'
import { Link, useMatch } from 'react-router-dom'
import { routes } from '../../../constants/routes'
import { useMediaQuery } from '../../../hooks/useMediaQueryHook'
import { BurgerMenu } from '../BurgerMenu/BurgerMenu'
import { ContactModal } from '../../blocks/PartnersBlock/ContactModal/ContactModal'
import { useState } from 'react'

export const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const isMobile = useMediaQuery('mobile')
  const isHomeMatched = useMatch(routes.home)
  const isPrototypesMatched = useMatch(routes.prototypes)

  return (
    <header className={classNames.container}>
      <Logo />
      {!isMobile ? (
        <>
          <div className={classNames.breadcrumbsContainer}>
            <Link to={routes.home}>
              <p className={`body1 ${isHomeMatched ? classNames.selected : ''}`}>Home</p>
            </Link>
            <Link to={routes.prototypes}>
              <p className={`body1 ${isPrototypesMatched ? classNames.selected : ''}`}>Prototypes</p>
            </Link>
          </div>
          <Button
            variant={'primary'}
            size={'sm'}
            rightIcon={<IconArrowUpRight size={20} color={'var(--color-base-white)'} />}
            className={classNames.button}
            isLoading={isLoading}
            onClick={() => {
              setIsLoading(true)
              turnstile.render('#captcha', {
                sitekey: process.env.CLOUDFLARE_SITEKEY as string,
                callback: function (token) {
                  console.log(`Challenge Success ${token}`)
                  window.open('https://send.concero.io/s/cltzo34650007yl7a1qah623z', '_blank')
                  setIsLoading(false)
                },
              })
            }}
          >
            <h5 className={classNames.buttonTitle}>Join testnet</h5>
          </Button>
        </>
      ) : null}
      {isMobile ? <BurgerMenu /> : null}
      <ContactModal
        show={isModalVisible}
        setShow={setIsModalVisible}
        title={'Sign up to waitlist'}
        isMessageNeeded={false}
      />
    </header>
  )
}
