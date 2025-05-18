// src/modules/materia/pages/MateriaListPage.jsx

import React, { useState } from 'react';

const MateriaListPage = () => {
  const [busqueda, setBusqueda] = useState('');
  const materias = [
    { id: 1, nombre: 'Matemáticas', grado: '1ro A', estado: 'Activo' },
    { id: 2, nombre: 'Lenguaje y Comunicación', grado: '1ro B', estado: 'Activo' },
    { id: 3, nombre: 'Ciencias Naturales', grado: '2do A', estado: 'Inactivo' },
    { id: 4, nombre: 'Historia y Geografía', grado: '2do B', estado: 'Activo' },
    { id: 5, nombre: 'Educación Física', grado: '3ro A', estado: 'Activo' },
    { id: 6, nombre: 'Tecnología', grado: '3ro B', estado: 'Inactivo' },
    { id: 7, nombre: 'Inglés', grado: '1ro C', estado: 'Activo' },
    { id: 8, nombre: 'Música', grado: '2do C', estado: 'Activo' },
    { id: 9, nombre: 'Educación Artística', grado: '3ro C', estado: 'Inactivo' },
    { id: 10, nombre: 'Formación Ciudadana', grado: '1ro D', estado: 'Activo' },
  ];

  const materiasFiltradas = materias.filter(m =>
    m.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    m.grado.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
        <h1 className="text-2xl font-bold">Gestión de Materias</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          + Nueva Materia
        </button>
      </div>
      <div className="border rounded shadow p-4 bg-white mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">📚 Lista de Materias</h2>

        <div className="border rounded shadow p-4 bg-white mb-6">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Buscar materia o grado..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full md:w-1/3 border border-gray-300 rounded px-3 py-2"
            />
          </div>
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
              {materiasFiltradas.map((materia, index) => (
                <tr key={materia.id} className="border-t hover:bg-gray-100">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{materia.nombre}</td>
                  <td className="px-4 py-2">{materia.grado}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded text-white text-xs ${materia.estado === 'Activo' ? 'bg-green-600' : 'bg-red-600'
                        }`}
                    >
                      {materia.estado}
                    </span>
                  </td>
                  <td className="px-4 py-2 flex gap-2">
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded text-xs">Ver</button>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-xs">Editar</button>
                    {materia.estado === 'Activo' ? (
                      <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs">Desactivar</button>
                    ) : (
                      <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs">Activar</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MateriaListPage;
