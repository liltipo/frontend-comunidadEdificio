import React from 'react';
import edificio from '../assets/edificio-home.jpg';
import columpios from '../assets/columpios-home.jpg';
import quincho from '../assets/quincho.png'; 
import terraza from '../assets/terraza.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <img src={edificio} alt="Imagen edificio" className="edificio-image" />
        <div className="home-title">
          <h1>
            <FontAwesomeIcon icon={faBuilding} size="lg" style={{ marginRight: '10px' }} />
            COMUNIDAD EDIFICIO <span>*PLACE HOLDER*</span>
          </h1>
        </div>
      </div>

      <div className="home-description">
        <p>
          Gestionamos de manera eficiente los espacios compartidos de la comunidad, brindándote la posibilidad de reservar áreas como el quincho o la terraza de forma rápida y sencilla. Además, mantenemos una total transparencia en la gestión financiera: podrás consultar en qué se destinan los fondos recaudados a través de informes detallados.
          <br /> <br />
          También podrás realizar el pago de tus gastos comunes de manera online, sin necesidad de trámites presenciales, y acceder a tu historial de pagos y facturas directamente desde esta plataforma, todo diseñado para tu comodidad y conveniencia.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
