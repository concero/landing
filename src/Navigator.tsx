import { HomePage } from './components/pages/HomePage/HomePage'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { routes } from './constants/routes'
import { Header } from './components/layout/Header/Header'
import { PrototypesPage } from './components/pages/PrototypesPage/PrototypesPage'
import { Footer } from './components/layout/Footer/Footer'
import classNames from './Navigator.module.pcss'

export const Navigator = () => {
  return (
    <BrowserRouter>
      <div className={classNames.container}>
        <Header />
        <Routes>
          <Route path={routes.home} element={<HomePage />} />
          <Route path={routes.prototypes} element={<PrototypesPage />} />
          <Route path={'/*'} element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
