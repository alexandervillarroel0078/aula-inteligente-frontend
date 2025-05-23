// src/modules/profesor/pages/ResumenProfesorPage.jsx

import React from 'react';

const ResumenProfesorPage = ({ profesor }) => {
  if (!profesor) return <p className="text-gray-600">No se encontró información del profesor.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
      <div>
        <p><strong>Nombre:</strong> {profesor.nombre}</p>
        <p><strong>CI:</strong> {profesor.ci}</p>
        <p><strong>Teléfono:</strong> {profesor.telefono}</p>
        <p><strong>Email:</strong> {profesor.email}</p>
        <p><strong>Especialidad:</strong> {profesor.especialidad}</p>
      </div>
      <div>
        <p><strong>Estado:</strong> {profesor.estado}</p>
        <p><strong>Usuario:</strong> {profesor.usuario || '—'}</p>
      </div>
    </div>
  );
};

export default ResumenProfesorPage;
