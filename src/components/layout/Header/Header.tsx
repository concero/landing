import {FC} from 'react'
import classNames from './Header.module.pcss'
import {Button} from '../Button/Button'
import Icon from "../../Icon";
import {Logo} from "./Logo";

export interface HeaderProps {
}

export const Header: FC<HeaderProps> = () => {
  return <header className={classNames.container}>
    <Logo/>
    <Button variant={"secondary"}
      // leftIcon={{name: "ArrowsDiff", iconProps: {size: 18, transform: "", color: colors.primary.main}}}
    >
      <Icon name={"ArrowsDiff"} size={18} className={classNames.buttonIcon}/>
      <p className={`body1 ${classNames.buttonText}`}>Try now</p>
    </Button>
  </header>
}
