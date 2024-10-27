import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import quinchoImage from '../assets/quincho.png';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/reservas-page/reservas-object-page.scss';

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
    <div className="reservas-object-container">
      <h1>RESERVA QUINCHO</h1>
      <div className="reservas-object-content">
        <img src={quinchoImage} alt="Quincho" />
        <div className="calendar-and-buttons">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            inline
          />
          <div className="button-group">
            <button className="confirm-button" onClick={handleConfirm}>
              CONFIRMAR DÍA
            </button>
            <button className="cancel-button" onClick={handleCancel}>
              CANCELAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservasQuinchoPage;
