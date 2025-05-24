import React, { useEffect, useState } from 'react';
import { obtenerPrediccionesAlumno } from '../../services/alumnoService';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PrediccionEstudiante = ({ alumnoId }) => {
  const [predicciones, setPredicciones] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setCargando(true);
      const data = await obtenerPrediccionesAlumno(alumnoId);
      setPredicciones(data);
      setCargando(false);
    };
    if (alumnoId) fetchData();
  }, [alumnoId]);

  const clasificacionNumerica = {
    "Bajo": 1,
    "Medio": 2,
    "Alto": 3
  };

  const datosGrafico = predicciones.map(p => ({
    ...p,
    periodo_anio: `${p.periodo_nombre} ${p.anio || ''}`,
    resultado_predicho: parseFloat(p.resultado_predicho) || clasificacionNumerica[p.resultado_predicho] || 0
  }));
  const promedioPrediccion = predicciones.length > 0
    ? (
      predicciones.reduce((acc, curr) => acc + (parseFloat(curr.resultado_predicho) || 0), 0) / predicciones.length
    ).toFixed(1)
    : 0;

  let clasificacion = "Desconocido";
  if (promedioPrediccion >= 80) clasificacion = "Rendimiento Alto";
  else if (promedioPrediccion >= 60) clasificacion = "Rendimiento Medio";
  else clasificacion = "Rendimiento Bajo";

  // Sugerencia basada en participación
  const promedioParticipacion = predicciones.length > 0
    ? (
      predicciones.reduce((acc, curr) => acc + (parseFloat(curr.promedio_participaciones) || 0), 0) / predicciones.length
    ).toFixed(1)
    : 0;

  const sugerencia =
    promedioParticipacion < 4
      ? "Mejorar participación para subir rendimiento."
      : "Sigue así, tu participación es adecuada.";

const getClasificacion = (valor) => {
  const num = parseFloat(valor);
  if (num >= 80) return "Alto";
  if (num >= 60) return "Medio";
  return "Bajo";
};

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4">Predicciones</h2>

      <div className="mb-4">
        <p className="text-sm text-gray-700">
          📈 <strong>Predicción Promedio:</strong> {promedioPrediccion} puntos – <span className="text-blue-600">{clasificacion}</span>
        </p>
        <p className="text-sm text-gray-600 mt-1">
          💡 <strong>Sugerencia:</strong> {sugerencia}
        </p>
      </div>


      {cargando ? (
        <p className="text-gray-500">Cargando predicciones...</p>
      ) : predicciones.length === 0 ? (
        <p className="text-gray-500">No hay predicciones registradas.</p>
      ) : (
        <div className="overflow-x-auto">

          <div className="mb-6">
            <h3 className="text-sm sm:text-base font-semibold mb-2 text-gray-700">Comparación Real vs Predicho</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={datosGrafico}>
                <XAxis dataKey="periodo_anio" />

                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="promedio_notas" fill="#8884d8" name="Notas Reales" />
                <Bar dataKey="resultado_predicho" fill="#82ca9d" name="Predicción IA" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <table className="min-w-full border border-gray-300 bg-white shadow text-xs sm:text-sm">
            <thead className="bg-gray-100">
              <tr className="text-center">
                <th className="px-4 py-2 border-b text-center">#</th>
                <th className="px-4 py-2 border-b text-center">Periodo</th>
                <th className="px-4 py-2 border-b text-center">Predicción</th>
                <th className="px-4 py-2 border-b text-center">Promedio Notas</th>
                <th className="px-4 py-2 border-b text-center">Asistencia %</th>
                <th className="px-4 py-2 border-b text-center">Participación</th>
                <th className="px-4 py-2 border-b text-center">Clasificacion</th>
              </tr>
            </thead>
            <tbody>
              {predicciones.map((p, index) => (
                <tr key={p.id} className="hover:bg-gray-50 text-center">
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{`${p.periodo_nombre} ${p.anio}`}</td>

                  <td className="px-4 py-2 border-b font-medium text-blue-600">{p.resultado_predicho}</td>
                  <td className="px-4 py-2 border-b">{p.promedio_notas}</td>
                  <td className="px-4 py-2 border-b">{p.porcentaje_asistencia}%</td>
                  <td className="px-4 py-2 border-b">{p.promedio_participaciones}</td>
                <td className="px-4 py-2 border-b">{getClasificacion(p.resultado_predicho)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-6 p-4 border border-gray-200 rounded bg-gray-50 text-sm text-gray-700">
  <h4 className="font-semibold text-gray-800 mb-2">🔍 Factores considerados por la IA:</h4>
  <ul className="list-disc list-inside">
    <li>Promedio de notas anteriores</li>
    <li>Porcentaje de asistencia</li>
    <li>Nivel de participación</li>
    <li>Desempeño en trimestres pasados</li>
  </ul>
</div>


        </div>
      )}
    </div>
  );
};

export default PrediccionEstudiante;
