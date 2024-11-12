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

      <div className="home-carousel">
      <Carousel 
          showThumbs={false} 
          autoPlay 
          infiniteLoop={true} /* Asegura que el bucle infinito está activado */
          centerMode={true} /* Centra el carrusel */
          centerSlidePercentage={70} /* Muestra el 70% de la imagen activa */
          interval={3000} /* Controla el intervalo de auto deslizamiento */
          emulateTouch={true} /* Permite control táctil (swipe en dispositivos móviles) */
          showStatus={false} /* Oculta el contador de imágenes */
        >
          <div className="carousel-item">
            <img src={columpios} alt="Imagen columpios" />
          </div>
          <div className="carousel-item">
            <img src={quincho} alt="Imagen quincho" />
          </div>
          <div className="carousel-item">
            <img src={terraza} alt="Imagen terraza" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HomePage;
