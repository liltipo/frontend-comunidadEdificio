import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import NavBar from '../components/nav_bar'

import ReservasPage from '../pages/reservas_page'
import BoletinPage from '../pages/boletin_page'
import GGCCPage from '../pages/GGCC_page'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/reservas' element={<ReservasPage />} />
            <Route path='/boletin' element={<BoletinPage />} />
            <Route path='/GGCC' element={<GGCCPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
