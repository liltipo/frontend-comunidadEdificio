import React from 'react';
import quinchoImage from '../assets/quincho.png';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/reservas-page/reservas-object-page.scss'; // Reutiliza el mismo archivo de estilos

const ReservasQuinchoConfirmadoPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="reservas-object-container">
      <h1>RESERVA QUINCHO</h1> {/* Cambié h2 por h1 para consistencia */}
      <div className="reservas-object-content">
        <img src={quinchoImage} alt="Quincho" />
        <div className="calendar-and-buttons">
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>¡Tu reserva ha sido exitosa!</p>
          <div style={{ fontSize: '48px', color: 'black', marginBottom: '20px' }}>✔️</div>
          {/* Aplica la clase confirm-button para reutilizar estilos */}
          <button className="confirm-button" onClick={handleBackToHome} 
            style={{
              backgroundColor: '#4a90e2',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '5px',
              marginTop: '20px',
              cursor: 'pointer',
              fontSize: '16px'
            }}>
            VOLVER AL INICIO
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservasQuinchoConfirmadoPage;
