import React from 'react';
import pdfFile from '../assets/boletin.pdf';
import '../stylesheets/boletin-page/boletin-page.scss';


export const BoletinPage = () => {
  return (
    <div className="boletin-container">
      <h1>Boletín</h1>
      <div className="boletin-content">
        <div className="boletin-section gastos">
          <h2>Gastos del día</h2>
          <p>Mantenimiento general: $150.00 (reparación de luces en el pasillo del 3er piso).</p>
        </div>
        <div className="boletin-section reservas">
          <h2>Reservas</h2>
          <p>Quincho: <br /> Fecha: 18/09/2024 &nbsp; 16:00 - 19:00<br /> Reserva hecha por: Familia López (Fiesta infantil)</p>
        </div>
        <div className="boletin-section anuncios">
          <h2>Anuncios Importantes</h2>
          <p>Corte de agua programado: Mañana, 9 de septiembre de 2024, de 10:00 a 14:00, debido a trabajos de mantenimiento en la red principal.</p>
        </div>
        <div className="boletin-section contactos">
          <h2>Contactos de Emergencia</h2>
          <p>Seguridad del edificio: 123-456-789 <br /> Administrador: José Pérez - 123-987-654 <br /> Mantenimiento: Ana López - 123-456-321</p>
        </div>
      </div>
      <a href={pdfFile} download="boletin.pdf">
        <button className="download-button">DESCARGAR BOLETÍN</button>
      </a>
    </div>
  );
};

export default BoletinPage;
