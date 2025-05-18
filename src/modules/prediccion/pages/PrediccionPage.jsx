// src/modules/prediccion/pages/PrediccionPage.jsx
import React from 'react';

const predicciones = [
  { id: 1, alumno: 'Juan Pérez', curso: '1ro A', rendimiento: 'Alto', porcentaje: 88 },
  { id: 2, alumno: 'María López', curso: '2do B', rendimiento: 'Moderado', porcentaje: 72 },
];

const PrediccionPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Predicción Académica (IA)</h1>

      <div className="overflow-x-auto bg-white p-4 rounded shadow border border-gray-300">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Alumno</th>
              <th className="px-4 py-2 text-left">Curso</th>
              <th className="px-4 py-2 text-left">Rendimiento</th>
              <th className="px-4 py-2 text-left">Probabilidad (%)</th>
            </tr>
          </thead>
          <tbody>
            {predicciones.map((p, i) => (
              <tr key={p.id} className="border-t hover:bg-gray-100">
                <td className="px-4 py-2">{i + 1}</td>
                <td className="px-4 py-2">{p.alumno}</td>
                <td className="px-4 py-2">{p.curso}</td>
                <td className="px-4 py-2 font-semibold">{p.rendimiento}</td>
                <td className="px-4 py-2">{p.porcentaje}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-gray-500 mt-4 text-sm italic">* Basado en notas, asistencia y participación.</p>
    </div>
  );
};

export default PrediccionPage;