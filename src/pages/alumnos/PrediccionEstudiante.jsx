// import React from 'react';

// const PrediccionEstudiante = () => {
//   return (
//     <div className="px-4 sm:px-6 lg:px-8">
//       <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4">Predicciones</h2>
//       <p className="text-gray-600">🧠 Esta sección mostrará las predicciones del rendimiento académico del estudiante.</p>
//       <p className="text-sm text-gray-400 mt-2">🔧 En desarrollo – lógica aún no implementada.</p>
//     </div>
//   );
// };

// export default PrediccionEstudiante;
import React, { useEffect, useState } from 'react';
import { obtenerPrediccionesPorAlumno } from '../../services/prediccionService';

const PrediccionEstudiante = ({ alumnoId }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const cargar = async () => {
      const resultado = await obtenerPrediccionesPorAlumno(alumnoId);
      setData(resultado);
    };
    cargar();
  }, [alumnoId]);

  if (!data) return <p>Cargando predicciones...</p>;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Predicciones – Gestión {data.gestion}</h3>
      {Object.entries(data.comparacion).map(([periodo, registros]) => (
        <div key={periodo} className="mb-6">
          <h4 className="text-md font-bold text-blue-700 mb-2">{periodo}</h4>
          {registros.length === 0 ? (
            <p className="text-gray-500">Sin datos.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full border text-sm text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-3 py-2">Materia</th>
                    <th className="px-3 py-2">Nota Real</th>
                    <th className="px-3 py-2">Asistencia</th>
                    <th className="px-3 py-2">Participación</th>
                    <th className="px-3 py-2">Real Ponderado</th>
                    <th className="px-3 py-2">Predicho</th>
                    <th className="px-3 py-2">Clasificación</th>
                    <th className="px-3 py-2">Diferencia</th>
                    <th className="px-3 py-2">Acertado</th>
                  </tr>
                </thead>
                <tbody>
                  {registros.map((item, idx) => (
                    <tr key={idx} className="border-t">
                      <td className="px-3 py-1">{item.materia}</td>
                      <td className="px-3 py-1">{item.nota_parcial ?? '—'}</td>
                      <td className="px-3 py-1">{item.asistencia ?? '—'}</td>
                      <td className="px-3 py-1">{item.participacion ?? '—'}</td>
                      <td className="px-3 py-1">{item.rendimiento_real ?? '—'}</td>
                      <td className="px-3 py-1">{item.rendimiento_predicho}</td>
                      <td className="px-3 py-1">{item.clasificacion}</td>
                      <td className="px-3 py-1">{item.diferencia ?? '—'}</td>
                      <td className="px-3 py-1">
                        {item.acertado === null ? '—' : item.acertado ? '✅' : '❌'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PrediccionEstudiante;
