import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { obtenerAsistenciasPorMateria,obtenerNotasFinalAsistencia } from '../../services/profesorService';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const AsistenciasMateriaProfesor = () => {
  const { materiaId, profesorId } = useParams();
  const navigate = useNavigate();
  const [asistencias, setAsistencias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const totalPeriodo1 = asistencias.reduce((sum, a) => sum + (a.periodo1 || 0), 0);
  const totalPeriodo2 = asistencias.reduce((sum, a) => sum + (a.periodo2 || 0), 0);
  const totalPeriodo3 = asistencias.reduce((sum, a) => sum + (a.periodo3 || 0), 0);
  const totalPeriodo4 = asistencias.reduce((sum, a) => sum + (a.periodo4 || 0), 0);
  const totalGeneral = totalPeriodo1 + totalPeriodo2 + totalPeriodo3 + totalPeriodo4;
  const [notas, setNotas] = useState([]);
  const [error, setError] = useState(null);

  const totalClasesPeriodo = {
    periodo1: 35,
    periodo2: 35,
    periodo3: 35,
    periodo4: 35,
  };

  const procesarAsistencias = (data) => {
    return data.map((a) => {
      const asistenciasPresentes =
        (a.periodo1 || 0) +
        (a.periodo2 || 0) +
        (a.periodo3 || 0) +
        (a.periodo4 || 0);

      const porcentaje_final_asistencia =
        a.total_clases > 0
          ? Math.round((asistenciasPresentes / a.total_clases) * 100)
          : 0;

      return {
        ...a,
        asistenciasPresentes,
        porcentaje_final_asistencia,
      };
    });
  };

  useEffect(() => {
    const fetchAsistencias = async () => {
      try {
        const data = await obtenerAsistenciasPorMateria(materiaId);
        const procesadas = procesarAsistencias(data);
        setAsistencias(procesadas);
      } catch (error) {
        console.error('❌ Error al obtener asistencias:', error);
      } finally {
        setCargando(false);
      }
    };

    if (materiaId) fetchAsistencias();
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
        <p className="text-gray-500">Cargando asistencias...</p>
      ) : asistencias.length === 0 ? (
        <p className="text-gray-500">No hay asistencias registradas para esta materia.</p>
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-blue-600">Asistencias por Periodo</h3>

            <button
              onClick={() => navigate(`/panel/profesores/${profesorId}/materias/${materiaId}/asistencias/nueva`)}
              className="px-4 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700"
            >
              ➕ Registrar Asistencia
            </button>

          </div>
          {/* Total Clases por Semestre */}
          <div className="w-1/2">
            <p className="text-sm mt-2 font-semibold text-gray-700">
              Total general de asistencias: <span className="text-blue-600">{totalGeneral}</span>
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
                  <th className="px-4 py-2 border-b">Total asis. anual Clases</th>
                  <th className="px-4 py-2 border-b">Nota final Asistencia</th>
                  <th className="px-4 py-2 border-b">% Asistencia</th>
                </tr>
              </thead>
              <tbody>
                {asistencias.map((a, index) => (
                  <tr key={index} className="hover:bg-gray-50 text-center">
                    <td className="px-4 py-2 border-b">{index + 1}</td>
                    <td className="px-4 py-2 border-b">{a.alumno}</td>
                    <td className="px-4 py-2 border-b">{a.periodo1}</td>
                    <td className="px-4 py-2 border-b">{a.periodo2}</td>
                    <td className="px-4 py-2 border-b">{a.periodo3}</td>
                    <td className="px-4 py-2 border-b">{a.periodo4}</td>
                    <td className="px-4 py-2 border-b">{a.total_clases}</td>
                  <td className="px-4 py-2 border-b">{a.nota_final_asistencia}</td>

                    <td className="px-4 py-2 border-b">{a.porcentaje_final_asistencia}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Tabla de Resumen por Alumno */}
          <h3 className="text-lg font-semibold text-blue-600 mb-4">Resumen General de Asistencias</h3>
          <div className="mb-4 text-sm font-semibold text-gray-700">
            <p>Total de Clases anual:</p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 bg-white shadow text-sm">
              <thead className="bg-gray-100">
                <tr className="text-center">
                  <th className="px-4 py-2 border-b">#</th>
                  <th className="px-4 py-2 border-b">Alumno</th>
                  <th className="px-4 py-2 border-b">Total Asistencias</th>
                  <th className="px-4 py-2 border-b">% Asistencia</th>
                  <th className="px-4 py-2 border-b">acciones</th>
                </tr>
              </thead>
              <tbody>
                {asistencias.map((a, index) => (
                  <tr key={index} className="hover:bg-gray-50 text-center">
                    <td className="px-4 py-2 border-b">{index + 1}</td>
                    <td className="px-4 py-2 border-b">{a.alumno}</td>
                    <td className="px-4 py-2 border-b">{a.total_clases}</td>
                    <td className="px-4 py-2 border-b">{a.porcentaje_final_asistencia}%</td>
                    <td className="px-4 py-2 border-b">
                      <button className="text-blue-600 hover:underline">Ver</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3 className="text-lg font-semibold text-blue-600 mt-8">Comparación de Asistencias por Bimestre</h3>
            <div className="text-sm text-gray-700 mb-4">
              Total de alumnos: <span className="font-semibold">{asistencias.length}</span>
            </div>

            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={asistencias}>
                <XAxis dataKey="alumno" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="periodo1" fill="#8884d8" name="1er Bim. %" />
                <Bar dataKey="periodo2" fill="#82ca9d" name="2do Bim. %" />
                <Bar dataKey="periodo3" fill="#ffc658" name="3er Bim. %" />
                <Bar dataKey="periodo4" fill="#ff8042" name="4to Bim. %" /></BarChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
};

export default AsistenciasMateriaProfesor;