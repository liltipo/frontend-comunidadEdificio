import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import terrazaImage from '../assets/terraza.png';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/reservas-page/reservas-object-page.scss';
import { Modal, Button } from 'react-bootstrap'; // Importación de Modal de Bootstrap

const ReservasTerrazaPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [disabledDates, setDisabledDates] = useState([]);
  const [showModal, setShowModal] = useState(false); // Estado para mostrar el modal
  const navigate = useNavigate();

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
    setShowModal(true); // Muestra el modal al hacer clic en Confirmar
  };

  const handleModalConfirm = () => {
    setShowModal(false); // Oculta el modal
    navigate('/reservas-terraza-confirmado'); // Navega a la página de confirmación
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

      {/* Modal de confirmación */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Reserva</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Está seguro de que desea confirmar su reserva para el {selectedDate ? selectedDate.toLocaleDateString() : 'una fecha seleccionada'}?
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
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
