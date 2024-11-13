import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/ggcc-page/ggcc-pagar-page.scss'; 

const GGCCPagarPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [totalPagar, setTotalPagar] = useState(0);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const montoAleatorio = Math.floor(Math.random() * (50000 - 20000 + 1)) + 20000;
    setTotalPagar(montoAleatorio);
  }, []);

  const handlePagarClick = () => {
    setShowModal(true);
  };

  const handleConfirm = () => {
    setShowModal(false);
    setPaymentConfirmed(true);
    setTimeout(() => {
      navigate('/GGCC');
    }, 5000);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="pagar-container" style={{ padding: '20px', textAlign: 'center' }}>
      {!paymentConfirmed && (
        <>
          <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>
            Total a pagar: <span style={{ color: '#007bff' }}>${totalPagar.toLocaleString()}</span>
          </h1>
          <Button className="pagar-button" onClick={handlePagarClick} style={{ margin: '20px auto', padding: '10px 20px', fontSize: '1.2rem' }}>
            Realizar Pago
          </Button>
        </>
      )}

      <Modal show={showModal} onHide={handleCancel} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmación de Pago</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Está seguro de que desea realizar el pago de <strong>${totalPagar.toLocaleString()}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>

      {paymentConfirmed && (
        <div style={{
          marginTop: '30px',
          padding: '20px',
          backgroundColor: '#e7f3ff',
          borderRadius: '8px',
          border: '1px solid #b3d7ff',
          color: '#007bff',
          textAlign: 'center',
        }}>
          <h2 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Pago confirmado correctamente.</h2>
          <p style={{ fontStyle: 'italic', color: '#0056b3' }}>Usted está siendo redirigido a la página de Gastos Comunes...</p>
        </div>
      )}
    </div>
  );
};

export default GGCCPagarPage;
