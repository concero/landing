import { FC } from 'react'
import classNames from './Header.module.pcss'
import { Logo } from './Logo'
import { Button } from '../Button/Button'
import { IconArrowUpRight } from '@tabler/icons-react'

export interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className={classNames.container}>
      <Logo />
      <a href="https://app.concero.io" target={'_blank'}>
        <Button
          variant={'primary'}
          size={'sm'}
          rightIcon={<IconArrowUpRight size={20} color={'var(--color-base-white)'} />}
          className={classNames.button}
        >
          <h5 className={classNames.buttonTitle}>Launch app</h5>
        </Button>
      </a>
    </header>
  )
}
