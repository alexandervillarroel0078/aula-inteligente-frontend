// src/modules/asignacion/pages/AsignarMateriaPage.jsx
import React from 'react';

const AsignarMateriaPage = () => {
  const asignaciones = [
    { id: 1, materia: 'Matemáticas', profesor: 'Luis Mendoza', grado: '1ro A', turno: 'Mañana' },
    { id: 2, materia: 'Ciencias', profesor: 'Luis Mendoza', grado: '3ro C', turno: 'Tarde' },
    { id: 3, materia: 'Lenguaje', profesor: 'Carla Romero', grado: '2do B', turno: 'Mañana' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Asignación de Materias a Profesores</h1>
      <div className="overflow-x-auto bg-white p-4 rounded shadow border border-gray-300">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Materia</th>
              <th className="px-4 py-2 text-left">Profesor</th>
              <th className="px-4 py-2 text-left">Curso</th>
              <th className="px-4 py-2 text-left">Turno</th>
              <th className="px-4 py-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {asignaciones.map((a, i) => (
              <tr key={a.id} className="border-t hover:bg-gray-100">
                <td className="px-4 py-2">{i + 1}</td>
                <td className="px-4 py-2">{a.materia}</td>
                <td className="px-4 py-2">{a.profesor}</td>
                <td className="px-4 py-2">{a.grado}</td>
                <td className="px-4 py-2">{a.turno}</td>
                <td className="px-4 py-2 space-x-2">
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Editar</button>
                  <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AsignarMateriaPage;
