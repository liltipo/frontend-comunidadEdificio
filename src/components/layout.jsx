import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/home_page';
import NavBar from '../components/nav_bar';
import ReservasPage from '../pages/reservas_page';
import BoletinPage from '../pages/boletin_page';
import GGCCPage from '../pages/GGCC_page';
import ReservasQuinchoPage from '../pages/reservas-quincho_page';
import ReservasTerrazaPage from '../pages/reservas-terraza_page';
import ReservasQuinchoConfirmadoPage from '../pages/reservas-quincho-confirmado_page'; // Nueva importación
import ReservasTerrazaConfirmadoPage from '../pages/reservas-terraza-confirmado_page'; // Nueva importación

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/reservas' element={<ReservasPage />} />
            <Route path='/reservas-quincho' element={<ReservasQuinchoPage />} />
            <Route path='/reservas-quincho-confirmado' element={<ReservasQuinchoConfirmadoPage />} /> {/* Nueva ruta */}
            <Route path='/reservas-terraza' element={<ReservasTerrazaPage />} />
            <Route path='/reservas-terraza-confirmado' element={<ReservasTerrazaConfirmadoPage />} /> {/* Nueva ruta */}
            <Route path='/boletin' element={<BoletinPage />} />
            <Route path='/GGCC' element={<GGCCPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
