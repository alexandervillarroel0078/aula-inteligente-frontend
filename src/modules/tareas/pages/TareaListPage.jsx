// src/modules/tarea/pages/TareaListPage.jsx
import React from 'react';

const tareas = [
  { id: 1, titulo: 'Ejercicios de Álgebra', materia: 'Matemáticas', curso: '1ro A', fecha: '2024-10-01' },
  { id: 2, titulo: 'Ensayo de lectura', materia: 'Lenguaje', curso: '2do B', fecha: '2024-10-05' },
];

const TareaListPage = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Tareas Asignadas</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + Nueva Tarea
        </button>
      </div>

      <div className="overflow-x-auto bg-white p-4 rounded shadow border border-gray-300">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Título</th>
              <th className="px-4 py-2 text-left">Materia</th>
              <th className="px-4 py-2 text-left">Curso</th>
              <th className="px-4 py-2 text-left">Fecha</th>
              <th className="px-4 py-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {tareas.map((t, i) => (
              <tr key={t.id} className="border-t hover:bg-gray-100">
                <td className="px-4 py-2">{i + 1}</td>
                <td className="px-4 py-2">{t.titulo}</td>
                <td className="px-4 py-2">{t.materia}</td>
                <td className="px-4 py-2">{t.curso}</td>
                <td className="px-4 py-2">{t.fecha}</td>
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

export default TareaListPage;