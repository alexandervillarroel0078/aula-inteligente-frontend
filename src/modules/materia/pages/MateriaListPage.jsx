// src/modules/materia/pages/MateriaListPage.jsx

import React from 'react';

const materias = [
  { id: 1, nombre: 'Matemáticas', grado: '1ro A', estado: 'Activo' },
  { id: 2, nombre: 'Lenguaje', grado: '2do B', estado: 'Inactivo' },
  { id: 3, nombre: 'Ciencias Naturales', grado: '3ro C', estado: 'Activo' },
];

const MateriaListPage = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
        <h1 className="text-2xl font-bold">Gestión de Materias</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          + Nueva Materia
        </button>
      </div>

      <div className="overflow-x-auto bg-white p-4 rounded shadow border border-gray-300">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Nombre</th>
              <th className="px-4 py-2 text-left">Grado</th>
              <th className="px-4 py-2 text-left">Estado</th>
              <th className="px-4 py-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {materias.map((materia, index) => (
              <tr key={materia.id} className="border-t hover:bg-gray-100">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{materia.nombre}</td>
                <td className="px-4 py-2">{materia.grado}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-white text-xs ${
                      materia.estado === 'Activo' ? 'bg-green-600' : 'bg-red-600'
                    }`}
                  >
                    {materia.estado}
                  </span>
                </td>
                <td className="px-4 py-2">
                  {materia.estado === 'Activo' ? (
                    <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">
                      Desactivar
                    </button>
                  ) : (
                    <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded">
                      Activar
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MateriaListPage;
