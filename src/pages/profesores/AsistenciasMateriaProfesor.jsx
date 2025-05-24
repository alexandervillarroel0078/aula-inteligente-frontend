import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { obtenerAsistenciasPorMateria } from '../../services/profesorService';

const AsistenciasMateriaProfesor = () => {
  const { materiaId } = useParams();
  const navigate = useNavigate();
  const [asistencias, setAsistencias] = useState([]);
  const [cargando, setCargando] = useState(true);
const { profesorId } = useParams();

  useEffect(() => {
    const fetchAsistencias = async () => {
      try {
        const data = await obtenerAsistenciasPorMateria(materiaId);
        setAsistencias(data);
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

      <h2 className="text-xl font-bold text-blue-700 mb-4">Asistencias de los Estudiantes</h2>

      {cargando ? (
        <p className="text-gray-500">Cargando asistencias...</p>
      ) : asistencias.length === 0 ? (
        <p className="text-gray-500">No hay asistencias registradas para esta materia.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow text-sm">
            <thead className="bg-gray-100">
              <tr className="text-center">
                <th className="px-4 py-2 border-b">#</th>
                <th className="px-4 py-2 border-b">Alumno</th>
                <th className="px-4 py-2 border-b">Fecha</th>
                <th className="px-4 py-2 border-b">Asistencia</th>
              </tr>
            </thead>
            <tbody>
              {asistencias.map((a, index) => (
                <tr key={a.id} className="hover:bg-gray-50 text-center">
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{a.alumno}</td>
                  <td className="px-4 py-2 border-b">{a.fecha}</td>
                  <td className="px-4 py-2 border-b">
                    {a.presente ? (
                      <span className="text-green-600 font-semibold">✔ Presente</span>
                    ) : (
                      <span className="text-red-600 font-semibold">✘ Ausente</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AsistenciasMateriaProfesor;
