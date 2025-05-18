// src/modules/alumno/pages/AlumnoViewPage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const AlumnoViewPage = () => {
  const navigate = useNavigate();

  // ⚠️ Datos falsos para pruebas visuales
  const alumno = {
    id: 1,
    nombre_completo: 'Juan Carlos Pérez',
    fecha_nacimiento: '2008-04-12',
    genero: 'Masculino',
    email: 'juan.perez@gmail.com',
    telefono: '71234567',
    direccion: 'Calle Bolívar #123, Zona Central',
    grado_id: 5,
    fecha_registro: '2024-02-01',
    estado: 'Activo',
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Detalle del Alumno</h1>
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
          onClick={() => navigate('/panel/alumnos')}
        >
          ← Volver
        </button>
      </div>

      <div className="bg-white shadow rounded p-6 space-y-4">
        <div>
          <p className="text-sm text-gray-600">ID:</p>
          <p className="text-lg font-semibold">{alumno.id}</p>
        </div>

        <div>
          <p className="text-sm text-gray-600">Nombre completo:</p>
          <p className="text-lg font-semibold">{alumno.nombre_completo}</p>
        </div>

        <div>
          <p className="text-sm text-gray-600">Fecha de nacimiento:</p>
          <p className="text-lg font-semibold">{alumno.fecha_nacimiento}</p>
        </div>

        <div>
          <p className="text-sm text-gray-600">Género:</p>
          <p className="text-lg font-semibold">{alumno.genero}</p>
        </div>

        <div>
          <p className="text-sm text-gray-600">Email:</p>
          <p className="text-lg font-semibold">{alumno.email}</p>
        </div>

        <div>
          <p className="text-sm text-gray-600">Teléfono:</p>
          <p className="text-lg font-semibold">{alumno.telefono}</p>
        </div>

        <div>
          <p className="text-sm text-gray-600">Dirección:</p>
          <p className="text-lg font-semibold">{alumno.direccion}</p>
        </div>

        <div>
          <p className="text-sm text-gray-600">Grado ID:</p>
          <p className="text-lg font-semibold">{alumno.grado_id}</p>
        </div>

        <div>
          <p className="text-sm text-gray-600">Fecha de registro:</p>
          <p className="text-lg font-semibold">{alumno.fecha_registro}</p>
        </div>

        <div>
          <p className="text-sm text-gray-600">Estado:</p>
          <p className="text-lg font-semibold">{alumno.estado}</p>
        </div>
      </div>
    </div>
  );
};

export default AlumnoViewPage;
