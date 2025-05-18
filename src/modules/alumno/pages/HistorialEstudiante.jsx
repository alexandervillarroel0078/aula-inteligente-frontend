// src/modules/alumno/pages/HistorialEstudiante.jsx
import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend,
} from 'recharts';

const data = [
  {
    periodo: 'Bim. 1',
    promedio: 72,
    prediccion: 75,
    materias: [
      { nombre: 'Matemáticas', nota: 70 },
      { nombre: 'Lenguaje', nota: 74 },
    ],
  },
  {
    periodo: 'Bim. 2',
    promedio: 80,
    prediccion: 78,
    materias: [
      { nombre: 'Matemáticas', nota: 81 },
      { nombre: 'Lenguaje', nota: 79 },
    ],
  },
  {
    periodo: 'Bim. 3',
    promedio: 78,
    prediccion: 82,
    materias: [
      { nombre: 'Matemáticas', nota: 77 },
      { nombre: 'Lenguaje', nota: 79 },
    ],
  },
  {
    periodo: 'Bim. 5',
    prediccion: 86, // Solo predicción sin promedio
    materias: [],   // Aún no hay notas
  },
];

const EvolucionEstudiante = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-700 mb-4">📈 Evolución Académica</h2>

      {/* Gráfico de líneas */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="periodo" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Line type="monotone" dataKey="promedio" stroke="#4f46e5" strokeWidth={2} name="Promedio real" />
            <Line type="monotone" dataKey="prediccion" stroke="#22c55e" strokeWidth={2} name="Predicción IA" />

          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Gráfico de barras comparativo */}
      <h3 className="text-md font-semibold text-gray-700 mb-2">📊 Comparación: Promedio Real vs Predicción IA</h3>
      <div className="bg-white p-4 rounded shadow mb-6">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="periodo" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="promedio" fill="#4f46e5" name="Promedio real" />
            <Bar dataKey="prediccion" fill="#22c55e" name="Predicción IA" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Tabla con opción de expandir para ver materias */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded shadow">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Periodo</th>
              <th className="px-4 py-2 text-left">Promedio real</th>
              <th className="px-4 py-2 text-left">Predicción IA</th>
              <th className="px-4 py-2 text-left">Acción</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <React.Fragment key={index}>
                <tr className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">{item.periodo}</td>
                  <td className="px-4 py-2">{item.promedio !== undefined ? item.promedio : <span className="italic text-gray-400">Sin datos</span>}</td>
                  <td className="px-4 py-2">{item.prediccion}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="text-blue-600 text-sm hover:underline"
                    >
                      {expandedIndex === index ? 'Ocultar' : 'Ver materias'}
                    </button>
                  </td>
                </tr>

                {expandedIndex === index && (
                  <tr className="bg-gray-50">
                    <td colSpan="4" className="px-4 py-2">
                      {item.materias.length > 0 ? (
                        <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
                          {item.materias.map((materia, idx) => (
                            <li key={idx}>
                              {materia.nombre}: <span className="font-semibold">{materia.nota}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-gray-500 italic">Notas aún no registradas para este periodo.</p>
                      )}
                    </td>
                  </tr>
                )}

              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        Esta sección compara el rendimiento real del alumno con la predicción generada por el modelo IA y detalla las materias cursadas por periodo.
      </p>
    </div>
  );
};

export default EvolucionEstudiante;
