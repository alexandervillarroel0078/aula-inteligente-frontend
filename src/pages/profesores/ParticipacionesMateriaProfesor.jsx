import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { obtenerParticipacionesPorMateria } from '../../services/profesorService';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const ParticipacionesMateriaProfesor = () => {
  const { materiaId, profesorId } = useParams();
  const navigate = useNavigate();
  const [participaciones, setParticipaciones] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Calcular totales por periodo
  const totalPeriodo1 = participaciones.reduce((sum, p) => sum + (p.periodo1 || 0), 0);
  const totalPeriodo2 = participaciones.reduce((sum, p) => sum + (p.periodo2 || 0), 0);
  const totalPeriodo3 = participaciones.reduce((sum, p) => sum + (p.periodo3 || 0), 0);
  const totalPeriodo4 = participaciones.reduce((sum, p) => sum + (p.periodo4 || 0), 0);
  const totalGeneral = totalPeriodo1 + totalPeriodo2 + totalPeriodo3 + totalPeriodo4;

  useEffect(() => {
    const fetchParticipaciones = async () => {
      try {
        const data = await obtenerParticipacionesPorMateria(materiaId);
        setParticipaciones(data);
      } catch (error) {
        console.error('❌ Error al obtener participaciones:', error);
      } finally {
        setCargando(false);
      }
    };

    if (materiaId) fetchParticipaciones(); // ✅ sin periodoId
  }, [materiaId]);

  return (
    <div className="p-4">
      {/* Botón volver */}
      <button
        onClick={() => navigate(`/panel/profesores/${profesorId}/tabs?tab=Materias`)}
        className="mb-4 px-4 py-2 text-sm bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
      >
        ⬅️ Volver
      </button>

      {cargando ? (
        <p className="text-gray-500">Cargando participaciones...</p>
      ) : participaciones.length === 0 ? (
        <p className="text-gray-500">No hay participaciones registradas para esta materia.</p>
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-blue-600">Participaciones por Periodo</h3>

            <button
              onClick={() => navigate(`/panel/profesores/${profesorId}/materias/${materiaId}/participaciones/nueva`)}
              className="px-4 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700"
            >
              ➕ Registrar Participación
            </button>
          </div>
          
          {/* Total Participaciones por Semestre */}
          <div className="w-1/2">
            <p className="text-sm mt-2 font-semibold text-gray-700">
              Total general de participaciones: <span className="text-blue-600">{totalGeneral}</span>
            </p>
            <ul className="text-sm text-gray-700 list-disc list-inside">
              <li>1er Semestre: {totalPeriodo1}</li>
              <li>2do Semestre: {totalPeriodo2}</li>
              <li>3er Semestre: {totalPeriodo3}</li>
              <li>4to Semestre: {totalPeriodo4}</li>
            </ul>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-300 bg-white shadow text-sm">
              <thead className="bg-gray-100">
                <tr className="text-center">
                  <th className="px-4 py-2 border-b">#</th>
                  <th className="px-4 py-2 border-b">Alumno</th>
                  <th className="px-4 py-2 border-b">1er Bim.</th>
                  <th className="px-4 py-2 border-b">2do Bim.</th>
                  <th className="px-4 py-2 border-b">3er Bim.</th>
                  <th className="px-4 py-2 border-b">4to Bim.</th>
                  <th className="px-4 py-2 border-b">Total Participaciones</th>
                  <th className="px-4 py-2 border-b">% Participación</th>
                </tr>
              </thead>
              <tbody>
                {participaciones.map((p, index) => (
                  <tr key={index} className="hover:bg-gray-50 text-center">
                    <td className="px-4 py-2 border-b">{index + 1}</td>
                    <td className="px-4 py-2 border-b">{p.alumno}</td>
                    <td className="px-4 py-2 border-b">{p.periodo1}</td>
                    <td className="px-4 py-2 border-b">{p.periodo2}</td>
                    <td className="px-4 py-2 border-b">{p.periodo3}</td>
                    <td className="px-4 py-2 border-b">{p.periodo4}</td>
                    <td className="px-4 py-2 border-b">{p.total_participaciones}</td>
                    <td className="px-4 py-2 border-b">{p.porcentaje_participacion}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Tabla de Resumen por Alumno */}
          <h3 className="text-lg font-semibold text-blue-600 mb-4">Resumen General de Participaciones</h3>
          <div className="mb-4 text-sm font-semibold text-gray-700">
            <p>Total de Participaciones anual:</p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 bg-white shadow text-sm">
              <thead className="bg-gray-100">
                <tr className="text-center">
                  <th className="px-4 py-2 border-b">#</th>
                  <th className="px-4 py-2 border-b">Alumno</th>
                  <th className="px-4 py-2 border-b">Total Participaciones</th>
                  <th className="px-4 py-2 border-b">% Participación</th>
                  <th className="px-4 py-2 border-b">acciones</th>
                </tr>
              </thead>
              <tbody>
                {participaciones.map((p, index) => (
                  <tr key={index} className="hover:bg-gray-50 text-center">
                    <td className="px-4 py-2 border-b">{index + 1}</td>
                    <td className="px-4 py-2 border-b">{p.alumno}</td>
                    <td className="px-4 py-2 border-b">{p.total_participaciones}</td>
                    <td className="px-4 py-2 border-b">{p.porcentaje_participacion}%</td>
                    <td className="px-4 py-2 border-b">
                      <button className="text-blue-600 hover:underline">Ver</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Gráfica de Participaciones por Bimestre */}
            <h3 className="text-lg font-semibold text-blue-600 mt-8">Comparación de Participaciones por Bimestre</h3>
            <div className="text-sm text-gray-700 mb-4">
              Total de alumnos: <span className="font-semibold">{participaciones.length}</span>
            </div>

            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={participaciones}>
                <XAxis dataKey="alumno" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="porcentaje_periodo1" fill="#8884d8" name="1er Bim. %" />
                <Bar dataKey="porcentaje_periodo2" fill="#82ca9d" name="2do Bim. %" />
                <Bar dataKey="porcentaje_periodo3" fill="#ffc658" name="3er Bim. %" />
                <Bar dataKey="porcentaje_periodo4" fill="#ff8042" name="4to Bim. %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
};

export default ParticipacionesMateriaProfesor;
