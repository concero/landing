import classNames from './Header.module.pcss'
import { Logo } from './Logo'
import { Button } from '../Button/Button'
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
  const handleClick = (link) => {
    window.open(link, '_blank')
  }

  return (
    <header className={classNames.container}>
      <Logo />
      {!isMobile && !isIpad ? (
        <div className={classNames.breadcrumbsContainer}>
          <DropdownBtn title="Ecosystem">
            <a onClick={() => handleClick('https://app.concero.io/pool')}>Provide Liquidity</a>
            <a onClick={() => handleClick('https://app.concero.io/rewards')}>Rewards portal</a>
          </DropdownBtn>

          <DropdownBtn title="For developers">
            <a onClick={() => handleClick('https://docs.concero.io')}>Documentation</a>
            <a onClick={() => handleClick(' https://www.concero.io/whitepaper.pdf')}>Whitepaper</a>
          </DropdownBtn>
        </div>
      ) : null}
      <div className={classNames.headerBtnContainer}>
        <Button
          variant={'secondary'}
          size={'md'}
          title={'Contact us'}
          className={classNames.contactButton}
          isLoading={isLoading}
          onClick={() => {
            setIsModalVisible(true)
          }}
        />
        {isMobile || isIpad ? (
          <BurgerMenu />
        ) : (
          <Button
            variant={'primary'}
            size={'md'}
            title={'Launch app'}
            className={classNames.button}
            isLoading={isLoading}
            onClick={() => {
              window.location.href = 'https://lanca.io'
            }}
          />
        )}
      </div>

      {/* <div className={'rowCenter'}>
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
          </Button> */}
      {/* </div> */}
      {/* // ) : null} */}
      <ContactModal show={isModalVisible} setShow={setIsModalVisible} title={'Contact us'} isMessageNeeded={false} />
    </header>
  )
}
