import classNames from './Input.module.pcss'

interface InputProps {
  type: 'text' | 'email' | 'password'
  placeholder: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = ({ type, placeholder, value, onChange }) => {
  return <input className={classNames.input} type={type} placeholder={placeholder} value={value} onChange={onChange} />
}
