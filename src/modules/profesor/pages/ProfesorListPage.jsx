// src/modules/profesor/pages/ProfesorListPage.jsx

import React from 'react';

const profesores = [
  { id: 1, nombre: 'Luis Mendoza', ci: '4567890', telefono: '72111222', especialidad: 'Matemáticas' },
  { id: 2, nombre: 'Carla Romero', ci: '7890123', telefono: '76543210', especialidad: 'Lenguaje' },
  { id: 3, nombre: 'Esteban Vargas', ci: '1234567', telefono: '70123456', especialidad: 'Ciencias' },
];

const ProfesorListPage = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
        <h1 className="text-2xl font-bold">Gestión de Profesores</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          + Registrar Profesor
        </button>
      </div>

      <div className="overflow-x-auto bg-white p-4 rounded shadow border border-gray-300">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Nombre</th>
              <th className="px-4 py-2 text-left">CI</th>
              <th className="px-4 py-2 text-left">Teléfono</th>
              <th className="px-4 py-2 text-left">Especialidad</th>
              <th className="px-4 py-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {profesores.map((profesor, index) => (
              <tr key={profesor.id} className="border-t hover:bg-gray-100">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{profesor.nombre}</td>
                <td className="px-4 py-2">{profesor.ci}</td>
                <td className="px-4 py-2">{profesor.telefono}</td>
                <td className="px-4 py-2">{profesor.especialidad}</td>
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

export default ProfesorListPage;
