// src/modules/profesor/pages/MateriaViewPage.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';
import TabsMateria from './TabsMateria';

const MateriaViewPage = () => {
  const location = useLocation();
  const materia = location.state?.materia || {
    id: 1,
    nombre: 'Matemáticas',
    curso: '5to de Secundaria',
    grupo: 'B',
    horario: 'Lunes y Miércoles 08:00 - 09:30'
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">📘 {materia.nombre}</h1>
        <p className="text-sm text-gray-600">
          Curso: {materia.curso} &nbsp;|&nbsp; Grupo: {materia.grupo} &nbsp;|&nbsp; Horario: {materia.horario}
        </p>
      </div>

      {/* Tabs visuales */}
      <TabsMateria materia={materia} />
    </div>
  );
};

export default MateriaViewPage;