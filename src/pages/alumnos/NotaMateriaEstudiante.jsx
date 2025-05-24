import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { obtenerNotasPorMateria } from '../../services/alumnoService';

const NotaMateriaEstudiante = () => {
  const { alumnoId, materiaId } = useParams();
  const navigate = useNavigate();
  const [notas, setNotas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setCargando(true);
        const data = await obtenerNotasPorMateria(alumnoId, materiaId);
        setNotas(data);
      } catch (error) {
        console.error("❌ Error al obtener notas:", error);
      } finally {
        setCargando(false);
      }
    };

    if (alumnoId && materiaId) fetchData();
  }, [alumnoId, materiaId]);

  return (
    <div className="px-4 py-6">
      {/* 🔙 Botón para volver a la pestaña Materias */}
      <button
        onClick={() => navigate(`/panel/alumnos/${alumnoId}/tabs?tab=Materias`)}
        className="mb-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-1 px-3 rounded text-sm"
      >
        ← Volver a Materias
      </button>


      <h2 className="text-xl font-bold text-blue-700 mb-4">Notas por Materia</h2>

      {cargando ? (
        <p className="text-gray-500">Cargando notas...</p>
      ) : notas.length === 0 ? (
        <p className="text-gray-500">No hay notas registradas para esta materia.</p>
      ) : (
        <table className="min-w-full border text-sm">
          <thead className="bg-gray-100">
            <tr className="text-center">
              <th className="border px-2 py-1">#</th>
              <th className="border px-2 py-1">Periodo</th>
              <th className="border px-2 py-1">Nota Final</th>
              <th className="border px-2 py-1">Observaciones</th>
            </tr>
          </thead>
          <tbody>
            {notas.map((n, index) => (
              <tr key={n.id} className="text-center">
                <td className="border px-2 py-1">{index + 1}</td>
                <td className="border px-2 py-1">{n.periodo_nombre}</td>
                <td className="border px-2 py-1">{n.nota_final}</td>
                <td className="border px-2 py-1">{n.observaciones || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default NotaMateriaEstudiante;
