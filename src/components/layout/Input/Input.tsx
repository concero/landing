import React, { FC } from 'react'
import classNames from './Input.module.pcss'

interface InputProps {
  type?: string
  placeholder?: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  title?: string
  inputType?: 'input' | 'textarea'
  className?: string
  error?: boolean // Indicates if there is an error
  errorMessage?: string // Error message to display
}

export const Input: FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  title,
  inputType = 'input',
  className,
  error = false, // Default to no error
  errorMessage = 'Hint', // Default to an empty error message
}) => {
  return (
    <div className={`${classNames.container} ${error ? classNames.errorContainer : ''}`}>
      {title ? <p className={`body2 ${classNames.title}`} dangerouslySetInnerHTML={{ __html: title }} /> : null}
      {inputType === 'textarea' ? (
        <textarea
          className={`${classNames.input} ${className} ${error ? classNames.errorInput : ''}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={4}
        />
      ) : (
        <input
          className={`${classNames.input} ${className} ${error ? classNames.errorInput : ''}`}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
      {error && errorMessage ? (
        <p className={classNames.errorMessage} style={{ color: '#F04438' }}>
          {errorMessage}
        </p>
      ) : (
        <p className={classNames.errorMessageHidden} style={{ color: '#FCFCFD' }}>
          {errorMessage}
        </p>
      )}
    </div>
  )
}
