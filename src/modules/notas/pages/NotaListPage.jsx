// src/modules/notas/pages/NotaListPage.jsx
import React from 'react';

const notas = [
  { id: 1, alumno: 'Juan Pérez', materia: 'Matemáticas', curso: '1ro A', periodo: '1er Trimestre', nota: 85 },
  { id: 2, alumno: 'María López', materia: 'Lenguaje', curso: '2do B', periodo: '1er Trimestre', nota: 92 },
];

const NotaListPage = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Notas Registradas</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + Registrar Nota
        </button>
      </div>

      <div className="overflow-x-auto bg-white p-4 rounded shadow border border-gray-300">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Alumno</th>
              <th className="px-4 py-2 text-left">Materia</th>
              <th className="px-4 py-2 text-left">Curso</th>
              <th className="px-4 py-2 text-left">Período</th>
              <th className="px-4 py-2 text-left">Nota</th>
              <th className="px-4 py-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {notas.map((n, i) => (
              <tr key={n.id} className="border-t hover:bg-gray-100">
                <td className="px-4 py-2">{i + 1}</td>
                <td className="px-4 py-2">{n.alumno}</td>
                <td className="px-4 py-2">{n.materia}</td>
                <td className="px-4 py-2">{n.curso}</td>
                <td className="px-4 py-2">{n.periodo}</td>
                <td className="px-4 py-2 font-bold">{n.nota}</td>
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

export default NotaListPage;
