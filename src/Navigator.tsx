import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppScreen } from './components/screens/AppScreen/AppScreen'
import { HomePage } from './components/pages/HomePage'

export interface NavigatorProps {}

export const Navigator: FC<NavigatorProps> = () => (
  <BrowserRouter>
    <AppScreen>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </AppScreen>
  </BrowserRouter>
)
