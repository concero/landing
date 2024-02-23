import classNames from './BurgerMenu.module.pcss'
import { type KeyboardEvent, useEffect, useState } from 'react'
import { IconArrowUpRight } from '@tabler/icons-react'
import { animated, useSpring } from '@react-spring/web'
import { MobileBreadcrumbs } from './MobileBreadcrumbs/MobileBreadcrumbs'
import { useMediaQuery } from '../../../hooks/useMediaQueryHook'
import burgerMenuIcon from '../../../assets/icons/burgerMenuIcon.svg'
import { Button } from '../Button/Button'

export function BurgerMenu() {
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const isMobile = useMediaQuery('mobile')

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsMenuOpened(false)
    }
  }

  const fadeAnimation = useSpring({
    opacity: isMenuOpened ? 1 : 0,
    translateY: isMenuOpened ? 0 : -100,
    config: { easing: 'spring', mass: 1, tension: 600, friction: 30 },
    pointerEvents: isMenuOpened ? 'auto' : 'none',
    from: { opacity: 0, pointerEvents: 'none' },
  })

  const overlayFadeAnimation = useSpring({
    opacity: isMenuOpened ? 1 : 0,
    config: { easing: 'spring', mass: 1, tension: 600, friction: 30 },
    pointerEvents: isMenuOpened ? 'auto' : 'none',
    from: { opacity: 0, pointerEvents: 'none' },
  })

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
        variant={'black'}
        size={'sq-sm'}
        onClick={() => {
          setIsMenuOpened((prev) => !prev)
        }}
      >
        <div className={classNames.imgContainer}>
          <img src={burgerMenuIcon} />
        </div>
      </Button>
      <animated.div
        style={overlayFadeAnimation}
        className={classNames.overlay}
        onClick={() => {
          setIsMenuOpened(false)
        }}
      >
        <animated.div style={fadeAnimation} className={classNames.menuContainer}>
          {isMobile ? <MobileBreadcrumbs /> : null}
          <ul className={classNames.listContainer}>
            <li>
              <Button
                variant={'black'}
                size={'sq-sm'}
                className={classNames.listButton}
                onClick={(e: MouseEvent) => {
                  window.open('https://app.concero.io', '_blank')
                  e.stopPropagation()
                }}
              >
                <IconArrowUpRight size={18} color={'var(--color-text-secondary)'} />
                <h5>Launch app</h5>
              </Button>
            </li>
          </ul>
        </animated.div>
      </animated.div>
    </div>
  )
}
