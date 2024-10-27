import React from 'react';
import terrazaImage from '../assets/terraza.png';
import { useNavigate } from 'react-router-dom';

const ReservasTerrazaConfirmadoPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Reserva Terraza</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
        <img src={terrazaImage} alt="Quincho" style={{ width: '50%', borderRadius: '8px' }} />
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Tu reserva ha sido exitosa!</p>
          <div style={{ fontSize: '48px', color: 'black' }}>✔️</div>
          <button 
            onClick={handleBackToHome}
            style={{
              backgroundColor: '#4a90e2',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '5px',
              marginTop: '20px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            VOLVER AL INICIO
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservasTerrazaConfirmadoPage;
