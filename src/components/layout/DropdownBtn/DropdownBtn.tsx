// import { useState, type FC } from 'react'
// import { type ButtonProps } from './types'
// import { getButtonClasses } from './getButtonClasses'
// import classNames from './DropdownBtn.module.pcss'

// export const DropdownBtn: FC<ButtonProps> = ({
//   size = 'md',
//   variant = 'primary',
//   leftIcon,
//   rightIcon,
//   isLoading,
//   isDisabled,
//   children,
//   onClick,
//   className,
// }) => {
//   const [isOpen, setIsOpen] = useState(false)
//   const toggleDropdown = () => setIsOpen(!isOpen)

//   return (
//     <div className={classNames.dropdown}>
//       <button className={classNames.dropbtn}>Dropdown</button>
//       <div className={classNames.dropdownContent}>{children}</div>
//     </div>
//   )
// }
import { useState, useRef, useEffect, type FC } from 'react'
import { type ButtonProps } from './types'
import { getButtonClasses } from './getButtonClasses'
import classNames from './DropdownBtn.module.pcss'
import { ChevronDown, ChevronUp } from 'tabler-icons-react'

export const DropdownBtn: FC<ButtonProps> = ({
  size = 'md',
  variant = 'primary',
  title = 'Dropdown',
  leftIcon,
  rightIcon,
  isLoading,
  isDisabled,
  children,
  onClick,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Toggle the dropdown open/close state
  const toggleDropdown = () => setIsOpen(!isOpen)

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={dropdownRef} className={classNames.dropdown}>
      <button
        className={`${classNames.dropbtn} ${isOpen ? classNames.active : ''}`}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
      >
        <div className={classNames.rowCenter}>
          <p>{title}</p>
          {isOpen ? (
            <ChevronUp className={classNames.chevron} width={13} height={15} />
          ) : (
            <ChevronDown className={classNames.chevron} width={13} height={15} />
          )}
        </div>
      </button>
      <div className={`${classNames.dropdownContent} ${isOpen ? classNames.show : ''}`}>{children}</div>
    </div>
  )
}
