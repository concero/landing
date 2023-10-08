import { FC, ReactNode } from 'react'

export interface AppScreenProps {
  children?: ReactNode
}

export const AppScreen: FC<AppScreenProps> = ({ children }) => <div>{children}</div>
