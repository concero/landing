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
import { DropdownBtn } from '../DropdownBtn/DropdownBtn'

export const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const isMobile = useMediaQuery('mobile')
  const isIpad = useMediaQuery('ipad')
  const isHomeMatched = useMatch(routes.home)
  const isPrototypesMatched = useMatch(routes.prototypes)

  return (
    <header className={classNames.container}>
      <Logo />
      {!isMobile && !isIpad ? (
        <>
          <div className={classNames.breadcrumbsContainer}>
            <DropdownBtn title="Ecosystem">
              <a href="#">Provide Liquidity</a>
              <a href="#">Rewards portal</a>
            </DropdownBtn>

            <DropdownBtn title="For developers">
              <a href="#">Documentation</a>
              <a href="#">Whitepaper</a>
            </DropdownBtn>
          </div>
          <div className={classNames.headerBtnContainer}>
            <Button
              variant={'secondary'}
              size={'sm'}
              className={classNames.button}
              isLoading={isLoading}
              onClick={() => {
                setIsModalVisible(true)
              }}
            >
              <h5 className={classNames.contactButtonTitle}>Contact us</h5>
            </Button>
            <Button
              variant={'primary'}
              size={'sm'}
              className={classNames.button}
              isLoading={isLoading}
              onClick={() => {
                window.location.href = 'https://lanca.io'
              }}
            >
              <h5 className={classNames.launchButtonTitle}>Launch app</h5>
            </Button>
          </div>
        </>
      ) : null}
      {isMobile || isIpad ? (
        <div className={'rowCenter'}>
          <Button
            variant={'secondary'}
            size={'sm'}
            className={classNames.button}
            isLoading={isLoading}
            onClick={() => {
              setIsModalVisible(true)
            }}
          >
            <h5 className={classNames.contactButtonTitle}>Contact us</h5>
          </Button>
          <BurgerMenu />
        </div>
      ) : null}
      <ContactModal show={isModalVisible} setShow={setIsModalVisible} title={'Contact us'} isMessageNeeded={false} />
    </header>
  )
}
