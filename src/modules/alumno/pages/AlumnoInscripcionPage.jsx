// src/modules/alumno/pages/AlumnoInscripcionPage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const AlumnoInscripcionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Inscripción de Alumno</h1>
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
          onClick={() => navigate('/panel/alumnos')}
        >
          ← Cancelar
        </button>
      </div>

      <form className="bg-white p-6 rounded shadow space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2"
            placeholder="Ej. Ana María López"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de nacimiento</label>
            <input type="date" className="w-full border border-gray-300 rounded px-4 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Género</label>
            <select className="w-full border border-gray-300 rounded px-4 py-2">
              <option value="">Selecciona</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded px-4 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
            <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Dirección</label>
          <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Curso / Grado</label>
            <select className="w-full border border-gray-300 rounded px-4 py-2">
              <option value="">Selecciona</option>
              <option value="1ro A">1ro A</option>
              <option value="2do B">2do B</option>
              <option value="3ro C">3ro C</option>
              {/* Puedes cargar dinámicamente */}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Turno</label>
            <select className="w-full border border-gray-300 rounded px-4 py-2">
              <option value="">Selecciona</option>
              <option value="Mañana">Mañana</option>
              <option value="Tarde">Tarde</option>
              <option value="Noche">Noche</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Año de inscripción</label>
            <input type="number" value={2024} readOnly className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-100" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
          <select className="w-full border border-gray-300 rounded px-4 py-2">
            <option value="Activo">Activo</option>
            <option value="Pendiente">Pendiente</option>
            <option value="Retirado">Retirado</option>
          </select>
        </div>

        <div className="text-right pt-4">
          <div className="flex justify-end gap-3 pt-4">
  <button
    type="button"
    onClick={() => navigate('/panel/alumnos')}
    className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded"
  >
    Cancelar
  </button>

  <button
    type="submit"
    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
  >
    Registrar Inscripción
  </button>
</div>

        </div>
      </form>
    </div>
  );
};

export default AlumnoInscripcionPage;
