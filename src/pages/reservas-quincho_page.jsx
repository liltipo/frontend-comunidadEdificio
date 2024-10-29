import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import quinchoImage from '../assets/quincho.png';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/reservas-page/reservas-object-page.scss';

const ReservasQuinchoPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();
  const [disabledDates, setDisabledDates] = useState([]);

  useEffect(() => {
    // Generar fechas aleatorias no disponibles
    const generateRandomDisabledDates = () => {
      const dates = [];
      const today = new Date();
      const maxDaysInFuture = 30; // Número de días futuros donde se generarán días no disponibles
      const numberOfDisabledDays = 7; // Número de días no disponibles que queremos

      for (let i = 0; i < numberOfDisabledDays; i++) {
        const randomDayOffset = Math.floor(Math.random() * maxDaysInFuture) + 1;
        const randomDate = new Date(today);
        randomDate.setDate(today.getDate() + randomDayOffset);
        dates.push(randomDate);
      }
      setDisabledDates(dates);
    };

    generateRandomDisabledDates();
  }, []);

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
            excludeDates={disabledDates} // Días específicos deshabilitados
            minDate={new Date()} // Deshabilita días anteriores a hoy
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
