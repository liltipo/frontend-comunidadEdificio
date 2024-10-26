import React from 'react';
import { useNavigate } from 'react-router-dom';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';

const ReservasPage = () => {
  const navigate = useNavigate();  

  return (
    <div className="reservas-container">
      <h1>RESERVAS</h1>
      <div className="reservas-options">
        <div className="reserva-option" onClick={() => navigate('/reservas-quincho')}>
          <div className="icon-container">
            <FontAwesomeIcon icon={faFire} size="5x" color='#6395ee' />
          </div>
          <div className="text-container">
            <h2>RESERVAR QUINCHO</h2>
            <p>Por el día</p>
          </div>
        </div>
        <div className="reserva-option" onClick={() => navigate('/reservas-terraza')}>
          <div className="icon-container">
            <FontAwesomeIcon icon={faUmbrellaBeach} size="5x" color='#6395ee' />
          </div>
          <div className="text-container">
            <h2>RESERVAR TERRAZA</h2>
            <p>Por el día</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservasPage;
