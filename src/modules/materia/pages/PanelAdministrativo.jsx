
// src/modules/materia/pages/PanelAdministrativo.jsx
import React from 'react';

const PanelAdministrativo = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">⚙️ Panel Administrativo</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Asignar horarios</li>
        <li>Ver lista de estudiantes inscritos</li>
        <li>Administrar contenidos y fechas</li>
        <li>Coordinar evaluaciones</li>
      </ul>
    </div>
  );
};

export default PanelAdministrativo;