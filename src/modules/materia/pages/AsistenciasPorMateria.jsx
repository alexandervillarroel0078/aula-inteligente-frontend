// src/modules/profesor/pages/AsistenciasPorMateria.jsx
import React, { useState } from 'react';
const hoy = new Date().toISOString().split('T')[0];

const asistenciaHoy = [
  { nombre: 'Juan Pérez', estado: 'Presente' },
  { nombre: 'María López', estado: 'Ausente' },
  { nombre: 'Carlos García', estado: 'Presente' },
];

const historialAsistencias = [
  { fecha: '2025-05-16', presentes: 2, ausentes: 1 },
  { fecha: '2025-05-15', presentes: 3, ausentes: 0 },
  { fecha: '2025-05-14', presentes: 1, ausentes: 2 },
];

const AsistenciasPorMateria = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">📅 Asistencias</h2>

      {/* Sección: Asistencia del Día */}
      <div className="mb-10 border rounded shadow p-4 bg-white">
        <h3 className="text-lg font-semibold mb-4 text-blue-800">📌 Asistencia del Día</h3>

        <table className="min-w-full text-sm border mb-4 text-center"> {/* ← centrado global */}
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Estudiante</th>
              <th className="px-4 py-2">Estado</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {asistenciaHoy.map((est, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{est.nombre}</td>
                <td
                  className={`px-4 py-2 font-semibold ${est.estado === 'Presente' ? 'text-green-600' : 'text-red-600'
                    }`}
                >
                  {est.estado}
                </td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 text-sm hover:underline">
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>


        <div className="flex justify-end">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Guardar Asistencia
          </button>
        </div>
      </div>

      {/* Sección: Historial del Semestre */}
<div className="border rounded shadow p-4 bg-white">
  <h3 className="text-lg font-semibold mb-4 text-gray-800">📚 Historial del Semestre</h3>

  <table className="min-w-full text-sm border text-center">
    <thead className="bg-gray-100">
      <tr>
        <th className="px-4 py-2">Fecha</th>
        <th className="px-4 py-2">Presentes</th>
        <th className="px-4 py-2">Ausentes</th>
        <th className="px-4 py-2">Acciones</th> {/* Columna nueva */}
      </tr>
    </thead>
    <tbody>
      {historialAsistencias.map((dia, index) => (
        <tr key={index} className="border-t hover:bg-gray-50">
          <td className="px-4 py-2">{dia.fecha.split('-').reverse().join('/')}</td>
          <td className="px-4 py-2">{dia.presentes}</td>
          <td className="px-4 py-2">{dia.ausentes}</td>
          <td className="px-4 py-2">
            <button className="text-blue-600 hover:underline text-sm">Ver</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


    </div>
  );
};

export default AsistenciasPorMateria;
