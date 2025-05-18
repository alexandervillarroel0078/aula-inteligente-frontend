// src/modules/grado/pages/GradoListPage.jsx

import React from 'react';

const grados = [
  { id: 1, nombre: '1ro A', nivel: 'Primaria', turno: 'Mañana' },
  { id: 2, nombre: '2do B', nivel: 'Secundaria', turno: 'Tarde' },
  { id: 3, nombre: '3ro C', nivel: 'Primaria', turno: 'Mañana' },
];

const GradoListPage = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
        <h1 className="text-2xl font-bold">Gestión de Cursos / Aulas</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          + Nuevo Curso
        </button>
      </div>

      <div className="overflow-x-auto bg-white p-4 rounded shadow border border-gray-300">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Nombre</th>
              <th className="px-4 py-2 text-left">Nivel</th>
              <th className="px-4 py-2 text-left">Turno</th>
              <th className="px-4 py-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {grados.map((grado, index) => (
              <tr key={grado.id} className="border-t hover:bg-gray-100">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{grado.nombre}</td>
                <td className="px-4 py-2">{grado.nivel}</td>
                <td className="px-4 py-2">{grado.turno}</td>
                <td className="px-4 py-2 space-x-2">
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
                    Editar
                  </button>
                  <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GradoListPage;
