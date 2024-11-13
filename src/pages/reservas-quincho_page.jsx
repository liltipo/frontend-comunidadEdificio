import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Modal, Button } from 'react-bootstrap'; 
import terrazaImage from '../assets/terraza.png';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/reservas-page/reservas-object-page.scss';

const ReservasTerrazaPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [disabledDates, setDisabledDates] = useState([]);
  const [showModal, setShowModal] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const generateRandomDisabledDates = () => {
      const dates = [];
      const today = new Date();
      const maxDaysInFuture = 30; 
      const numberOfDisabledDays = 7; 

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
    setShowModal(true); // Mostrar el modal
  };

  const handleModalConfirm = () => {
    setShowModal(false);
    navigate('/reservas-terraza-confirmado'); // Redirigir después de confirmar en el modal
  };

  const handleModalCancel = () => {
    setShowModal(false); // Cerrar el modal
  };

  const handleCancel = () => {
    navigate('/reservas'); // Redirige a reservas_page.jsx
  };

  return (
    <div className="reservas-object-container">
      <h1>RESERVA TERRAZA</h1>
      <div className="reservas-object-content">
        <img src={terrazaImage} alt="Terraza" />
        <div className="calendar-and-buttons">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            excludeDates={disabledDates}
            minDate={new Date()}
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

      {/* Modal de confirmación */}
      <Modal show={showModal} onHide={handleModalCancel} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmación de Reserva</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Está seguro de que desea confirmar su reserva para el {selectedDate?.toLocaleDateString()}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalCancel}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleModalConfirm}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ReservasTerrazaPage;
