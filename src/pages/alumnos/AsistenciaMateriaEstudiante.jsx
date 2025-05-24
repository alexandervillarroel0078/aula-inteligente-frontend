import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { obtenerAsistenciasPorMateria } from '../../services/alumnoService';

const AsistenciaMateriaEstudiante = () => {
  const { alumnoId, materiaId } = useParams(); // ✅ Captura desde la URL
  const [asistencias, setAsistencias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setCargando(true);
      try {
        const data = await obtenerAsistenciasPorMateria(alumnoId, materiaId);
        setAsistencias(data);
      } catch (error) {
        console.error("❌ Error al cargar asistencias:", error);
      } finally {
        setCargando(false);
      }
    };

    if (alumnoId && materiaId) fetchData();
  }, [alumnoId, materiaId]);

  const handleVolver = () => {
    navigate(`/panel/alumnos/${alumnoId}/tabs`, { state: { tab: 'Materias' } });
  };

  return (
    <div className="px-4 py-2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-blue-700">Asistencias por Materia</h2>
        <button
        onClick={() => navigate(`/panel/alumnos/${alumnoId}/tabs?tab=Materias`)}
        className="mb-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-1 px-3 rounded text-sm"
      >
        ← Volver a Materias
      </button>
      </div>

      {cargando ? (
        <p className="text-gray-500">Cargando asistencias...</p>
      ) : asistencias.length === 0 ? (
        <p className="text-gray-500">No hay asistencias registradas para esta materia.</p>
      ) : (
        <table className="min-w-full border text-sm">
          <thead className="bg-gray-100">
            <tr className="text-center">
              <th className="border px-2 py-1">#</th>
              <th className="border px-2 py-1">Fecha</th>
              <th className="border px-2 py-1">Periodo</th>
              <th className="border px-2 py-1">Estado</th>
            </tr>
          </thead>
          <tbody>
            {asistencias.map((a, index) => (
              <tr key={a.id} className="text-center">
                <td className="border px-2 py-1">{index + 1}</td>
                <td className="border px-2 py-1">
                  {new Date(a.fecha).toLocaleDateString("es-BO")}
                </td>
                <td className="border px-2 py-1">{a.periodo_nombre}</td>
                <td className="border px-2 py-1">
                  <span className={`px-2 py-1 rounded-full text-white text-xs ${a.presente ? 'bg-green-500' : 'bg-red-500'}`}>
                    {a.presente ? "Presente" : "Ausente"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AsistenciaMateriaEstudiante;
