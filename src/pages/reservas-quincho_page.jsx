import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import quinchoImage from '../assets/quincho.png';
import { useNavigate } from 'react-router-dom';

const ReservasQuinchoPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/reservas-quincho-confirmado');
  };

  const handleCancel = () => {
    navigate('/reservas'); // Redirige a reservas_page.jsx
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Reserva Quincho</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
        <img src={quinchoImage} alt="Quincho" style={{ width: '50%', borderRadius: '8px' }} />
        <div>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            inline
          />
          <div style={{ marginTop: '10px' }}>
            <button 
              onClick={handleConfirm}
              style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', borderRadius: '5px', marginRight: '10px' }}
            >
              CONFIRMAR DÍA
            </button>
            <button 
              onClick={handleCancel} // Añadido el evento onClick para manejar la cancelación
              style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', borderRadius: '5px' }}
            >
              CANCELAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservasQuinchoPage;
