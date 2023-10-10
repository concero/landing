import { FC } from 'react'
import classNames from './Header.module.pcss'
import { Logo } from './Logo'
import { MainButton } from '../MainButton/MainButton'
import { LaunchAppIcon } from '../../icons/LaunchAppIcon/LaunchAppIcon'

export interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className={classNames.container}>
      <Logo />
      <MainButton className={classNames.mainButton}>
        <h4>Launch app</h4>
        <LaunchAppIcon className={classNames.anime} />
      </MainButton>
    </header>
  )
}
