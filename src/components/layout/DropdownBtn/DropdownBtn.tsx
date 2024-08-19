import { useState, type FC } from 'react'
import { type ButtonProps } from './types'
import { getButtonClasses } from './getButtonClasses'
import classNames from './DropdownBtn.module.pcss'

export const DropdownBtn: FC<ButtonProps> = ({
  size = 'md',
  variant = 'primary',
  leftIcon,
  rightIcon,
  isLoading,
  isDisabled,
  children,
  onClick,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <div className={classNames.dropdown}>
      <button className={classNames.dropbtn}>Dropdown</button>
      <div className={classNames.dropdownContent}>{children}</div>
    </div>
  )
}
