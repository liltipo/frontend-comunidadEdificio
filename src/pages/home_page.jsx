import React from 'react';

import edificio from '../assets/edificio-home.jpg'
import columpios from '../assets/columpios-home.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding} from '@fortawesome/free-solid-svg-icons'

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-left">
        <img src={edificio} alt="Imagen edificio" />
        <p>Mantenemos la gestión financiera de la comunidad organizada y accesible. Aquí podrás realizar el pago de los gastos comunes de forma online, evitando trámites presenciales. Además, tendrás acceso a tus historiales de pago y facturas, todo desde la comodidad de tu hogar. <br /> <br /> La transparencia es uno de nuestros pilares fundamentales. Queremos que estés siempre informado sobre en qué se utilizan los fondos recaudados por los gastos comunes. En la sección de "Boletín", publicamos informes periódicos detallando el estado financiero de la comunidad, los proyectos en los que se invierte el dinero y cualquier otro tema relevante para los residentes.</p>
      </div>
      <div className="home-right">
      <h1>
        <FontAwesomeIcon icon={faBuilding} size="sm" style={{ marginRight: '10px' }} />
        COMUNIDAD EDIFICIO
        <br />
        <span> *PLACE HOLDER* </span>
      </h1>
      <p>
En esta plataforma dedicada a la comunidad de Placeholder, podrás gestionar y acceder a todos los servicios relacionados con la vida en nuestro edificio. Nos enfocamos en mejorar la calidad de vida de nuestros residentes, proporcionando herramientas que facilitan la administración de los espacios compartidos y la transparencia en la gestión de los recursos comunes.
<br /> <br />Nuestro edificio cuenta con varios espacios comunes como el quincho y la terraza, perfectos para reuniones familiares, eventos sociales o simplemente disfrutar al aire libre. A través de esta página, podrás reservar estos espacios de manera rápida y sencilla, eligiendo el día y la hora que mejor se ajusten a tus necesidades.</p>
        <img src={columpios} alt="Imagen columpios" />
      </div>
    </div>
  );
};

export default HomePage;