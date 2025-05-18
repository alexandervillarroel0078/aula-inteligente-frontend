// src/modules/materia/pages/VistaDatasetIA.jsx
import React from 'react';

const datosEjemplo = [
  {
    id: 1,
    alumno: 'Juan Pérez',
    promedioNotas: 72,
    asistencia: '95%',
    participaciones: 8,
    rendimientoReal: 74,
    prediccionIA: 76
  },
  {
    id: 2,
    alumno: 'María López',
    promedioNotas: 85,
    asistencia: '98%',
    participaciones: 12,
    rendimientoReal: 88,
    prediccionIA: 86
  },
  {
    id: 3,
    alumno: 'Carlos Ruiz',
    promedioNotas: 60,
    asistencia: '80%',
    participaciones: 4,
    rendimientoReal: 62,
    prediccionIA: 65
  },
];

const VistaDatasetIA = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">🧠 Dataset para Predicción IA</h2>
      <p className="text-gray-600 text-sm mb-4">
        Aquí se muestran los datos históricos de los estudiantes que se usan como entrada para el modelo de predicción.
      </p>

      <div className="overflow-x-auto bg-white border rounded shadow p-4">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Alumno</th>
              <th className="px-4 py-2">Prom. Notas</th>
              <th className="px-4 py-2">% Asistencia</th>
              <th className="px-4 py-2">Participaciones</th>
              <th className="px-4 py-2">Rend. Real</th>
              <th className="px-4 py-2">Predicción IA</th>
            </tr>
          </thead>
          <tbody>
            {datosEjemplo.map((fila) => (
              <tr key={fila.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{fila.id}</td>
                <td className="px-4 py-2">{fila.alumno}</td>
                <td className="px-4 py-2">{fila.promedioNotas}</td>
                <td className="px-4 py-2">{fila.asistencia}</td>
                <td className="px-4 py-2">{fila.participaciones}</td>
                <td className="px-4 py-2">{fila.rendimientoReal}</td>
                <td className="px-4 py-2">{fila.prediccionIA}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VistaDatasetIA;
