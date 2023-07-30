import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppScreen } from './components/screens/AppScreen/AppScreen'
import { Header } from './components/layout/Header/Header'
import { HomePage } from './components/pages/HomePage'

export interface NavigatorProps {}

export const Navigator: FC<NavigatorProps> = () => (
  <BrowserRouter>
    <AppScreen>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </AppScreen>
  </BrowserRouter>
)
