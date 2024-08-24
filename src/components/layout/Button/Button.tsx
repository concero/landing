import { type FC } from 'react'
import { type ButtonProps } from './types'
import { getButtonClasses } from './getButtonClasses'
import classNames from './Button.module.pcss'

export const Button: FC<ButtonProps> = ({
  size = 'md',
  variant = 'primary',
  leftIcon,
  rightIcon,
  isLoading,
  isDisabled,
  children,
  onClick,
  className,
  title = null,
}) => {
  const buttonClasses = getButtonClasses(size, variant, isLoading, isDisabled, className)

  return (
    <button
      className={buttonClasses}
      id={classNames[variant]}
      onClick={!isDisabled ? onClick : undefined}
      aria-label={variant + size}
    >
      {leftIcon}
      {title && <p className={classNames.btnTitle}>{title}</p>}
      {children}
      {rightIcon}
    </button>
  )
}
