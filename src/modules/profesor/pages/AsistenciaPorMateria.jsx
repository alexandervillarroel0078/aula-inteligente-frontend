// src/modules/profesor/pages/AsistenciaPorMateria.jsx

import React from 'react';

const estudiantes = [
  { id: 1, nombre: 'Juan Pérez' },
  { id: 2, nombre: 'María López' },
  { id: 3, nombre: 'Carlos García' },
];

const AsistenciaPorMateria = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">📅 Registro de Asistencia - Matemáticas</h2>

      <div className="mb-4">
        <label className="block text-sm text-gray-600 mb-1">Fecha:</label>
        <input type="date" className="border px-2 py-1 rounded" />
      </div>

      <table className="min-w-full border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">#</th>
            <th className="px-4 py-2 text-left">Estudiante</th>
            <th className="px-4 py-2 text-left">Asistencia</th>
            <th className="px-4 py-2 text-left">Observación</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes.map((est, index) => (
            <tr key={est.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{est.nombre}</td>
              <td className="px-4 py-2">
                <select className="border rounded px-2 py-1">
                  <option value="Presente">Presente</option>
                  <option value="Ausente">Ausente</option>
                  <option value="Tarde">Tarde</option>
                </select>
              </td>
              <td className="px-4 py-2">
                <input type="text" className="border px-2 py-1 rounded w-full" placeholder="Opcional" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Guardar Asistencia</button>
    </div>
  );
};

export default AsistenciaPorMateria;
