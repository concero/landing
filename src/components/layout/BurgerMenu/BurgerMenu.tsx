import classNames from './BurgerMenu.module.pcss'
import { type KeyboardEvent, useEffect, useState } from 'react'
import { IconArrowUpRight, IconMenu2, IconX } from '@tabler/icons-react'
import { useMediaQuery } from '../../../hooks/useMediaQueryHook'
import { Button } from '../Button/Button'
import { ContactModal } from '../../blocks/PartnersBlock/ContactModal/ContactModal'
import { Logo } from '../Header/Logo'

export function BurgerMenu() {
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const [isModalOpened, setIsModalOpened] = useState(false)
  const [isFadingOut, setIsFadingOut] = useState(false)

  const isMobile = useMediaQuery('mobile')
  console.log(isMobile)
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsMenuOpened(false)
    }
  }
  const handleCloseMenu = () => {
    setIsFadingOut(true)
    setTimeout(() => {
      setIsMenuOpened(false)
      setIsFadingOut(false)
    }, 300) // Match the duration with your CSS animation duration
  }

  const handleClick = (link) => {
    window.open(link, '_blank')
  }

  useEffect(() => {
    if (isMenuOpened) {
      document.body.style.overflowY = 'hidden'
      document.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.removeProperty('overflow-y')
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpened])

  return (
    <div className={classNames.container}>
      <Button
        size={'md'}
        className={classNames.burgerButton}
        onClick={() => {
          setIsMenuOpened((prev) => !prev)
        }}
      >
        <IconMenu2 size={24} color={'#F2F4F7'} strokeWidth={1.5} />
      </Button>

      {isMenuOpened && (
        <div className={`${classNames.overlay} ${isFadingOut ? classNames.fadeOut : classNames.fadeIn}`}>
          <div className={classNames.burgerMenuHeader}>
            <Logo />
            <Button
              className={classNames.closeButton}
              // variant={'secondaryGrey'}
              size={'md'}
              onClick={() => {
                handleCloseMenu()
              }}
              leftIcon={<IconX style={{}} strokeWidth={1.5} height={21} width={21} color={'var(--color-gray-700)'} />}
            />
          </div>

          <div className={classNames.menuContent}>
            {/* First Section */}
            <div className={classNames.menuSection}>
              <p className={classNames.sectionTitle}>Ecosystem</p>
              <ul className={classNames.sectionList}>
                <li onClick={() => handleClick('https://app.concero.io/pool')}>Provide Liquidity</li>
                <li onClick={() => handleClick('https://app.concero.io/rewards')}>Rewards portal</li>
              </ul>
            </div>

            <hr className={classNames.menuDivider} />

            {/* Second Section */}
            <div className={classNames.menuSection}>
              <p className={classNames.sectionTitle}>For Developers</p>
              <ul className={classNames.sectionList}>
                <li>Documentation</li>
                <li onClick={() => handleClick(' https://www.concero.io/whitepaper.pdf')}>Whitepaper</li>
              </ul>
            </div>
            <div className={classNames.buttonContainer}>
              <Button
                variant={'secondary'}
                size={'md'}
                className={classNames.button}
                onClick={() => {
                  setIsModalOpened(true)
                  setIsMenuOpened(false)
                }}
              >
                <h5 style={{ color: '#5925DC', fontWeight: 500 }}>Contact us</h5>
              </Button>
              <Button
                variant={'primary'}
                size={'md'}
                className={classNames.button}
                onClick={() => {
                  window.location.href = 'https://lanca.io'
                }}
              >
                <h5 style={{ color: '#F9FBFB', fontWeight: 500 }}>Launch app</h5>
              </Button>
            </div>
          </div>
        </div>
      )}

      <ContactModal
        show={isModalOpened}
        setShow={setIsModalOpened}
        title={'Sign up to waitlist'}
        isMessageNeeded={false}
      />
    </div>
  )
}
