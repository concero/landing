import {FC} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {AppScreen} from './components/screens/AppScreen/AppScreen'
import {Header} from './components/layout/Header/Header'
import {HomeScreen} from "./components/screens/HomeScreen/HomeScreen";

export interface NavigatorProps {
}

export const Navigator: FC<NavigatorProps> = () => (
  <BrowserRouter>
    <AppScreen>
      <Header/>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
      </Routes>
    </AppScreen>
  </BrowserRouter>
)
