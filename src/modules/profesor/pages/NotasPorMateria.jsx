// src/modules/profesor/pages/NotasPorMateria.jsx

import React from 'react';

const alumnos = [
  { id: 1, nombre: 'Juan Pérez', nota: '' },
  { id: 2, nombre: 'María López', nota: '' },
  { id: 3, nombre: 'Carlos García', nota: '' },
];

const NotasPorMateria = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">📄 Registro de Notas - Matemáticas</h2>

      <table className="min-w-full border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">#</th>
            <th className="px-4 py-2 text-left">Estudiante</th>
            <th className="px-4 py-2 text-left">Nota</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno, index) => (
            <tr key={alumno.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{alumno.nombre}</td>
              <td className="px-4 py-2">
                <input type="number" className="border px-2 py-1 rounded w-20" placeholder="0-100" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Guardar Notas</button>
    </div>
  );
};

export default NotasPorMateria;
