import React from 'react'
import '../stylesheets/ggcc-page/ggcc-page.scss';

const GASTOS_MENSUALES = [
  { descripcion: "Mantenimiento general (reparación de luces en el pasillo del 3er piso)", monto: 1750 },
  { descripcion: "Sueldo del personal", monto: 44000 },
  { descripcion: "Servicio de reciclaje", monto: 1750 },
  { descripcion: "Mantención del ascensor", monto: 30000 },
  { descripcion: "Mantención áreas comunes", monto:  30000},
  { descripcion: "Electricidad", monto: 50000 },
  { descripcion: "Agua", monto: 20000 },
  { descripcion: "Calefacción central", monto: 66000 }
];

const CONTACTOS = {
  seguridad: "123-456-789",
  administrador: { nombre: "José Pérez", telefono: "123-987-654" },
  mantenimiento: { nombre: "Ana López", telefono: "123-456-321" }
};
export const GGCCPage = () => {
  const totalGastos = GASTOS_MENSUALES.reduce((total, gasto) => total + gasto.monto, 0);
  return (
    <div className="container">
      <div className="box gastos">
        <div className="title">Gastos Octubre 2024</div>
        <div className="content">
          {GASTOS_MENSUALES.map((gasto, index) => (
            <div key={index}>
              {gasto.descripcion}: ${gasto.monto.toFixed(2)}
            </div>
          ))}
          <div className="total">
            <strong>Total:</strong> ${totalGastos.toFixed(2)}
          </div>
        </div>
      </div>

      <div className="box contactos">
        <div className="title">Contactos de Emergencia</div>
        <div className="content">
          Seguridad del edificio: {CONTACTOS.seguridad} <br />
          Administrador: {CONTACTOS.administrador.nombre} - {CONTACTOS.administrador.telefono} <br />
          Mantenimiento: {CONTACTOS.mantenimiento.nombre} - {CONTACTOS.mantenimiento.telefono}
        </div>
      </div>
    </div>
  );
};
export default GGCCPage
