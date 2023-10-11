import classNames from './Input.module.pcss'
import { FC } from 'react'

interface InputProps {
  type: 'text' | 'email' | 'password'
  title?: string
  placeholder: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  inputType?: 'input' | 'textarea'
}

export const Input: FC<InputProps> = ({ type, placeholder, value, onChange, title, inputType = 'input' }) => {
  return (
    <div className={classNames.container}>
      {title ? <p className={'body2'}>{title}</p> : null}
      {inputType === 'textarea' ? (
        <textarea className={classNames.textarea} placeholder={placeholder} value={value} onChange={onChange} />
      ) : (
        <input
          className={classNames.input}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name="bot-field"
        />
      )}
    </div>
  )
}
