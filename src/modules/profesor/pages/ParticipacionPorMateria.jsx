// src/modules/profesor/pages/ParticipacionPorMateria.jsx

import React from 'react';

const alumnos = [
  { id: 1, nombre: 'Juan Pérez' },
  { id: 2, nombre: 'María López' },
  { id: 3, nombre: 'Carlos García' },
];

const ParticipacionPorMateria = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">💬 Participación en clase - Matemáticas</h2>

      <table className="min-w-full border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">#</th>
            <th className="px-4 py-2 text-left">Estudiante</th>
            <th className="px-4 py-2 text-left">Participó</th>
            <th className="px-4 py-2 text-left">Comentario</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno, index) => (
            <tr key={alumno.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{alumno.nombre}</td>
              <td className="px-4 py-2">
                <input type="checkbox" className="w-4 h-4" />
              </td>
              <td className="px-4 py-2">
                <input type="text" className="border px-2 py-1 rounded w-full" placeholder="Ej: Comentó en clase" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Guardar Participación</button>
    </div>
  );
};

export default ParticipacionPorMateria;
