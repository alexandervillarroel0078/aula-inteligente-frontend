import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { obtenerParticipacionesPorMateria } from '../../services/profesorService';

const ParticipacionesMateriaProfesor = () => {
  const { materiaId } = useParams();
  const navigate = useNavigate();
  const [participaciones, setParticipaciones] = useState([]);
  const [cargando, setCargando] = useState(true);
const { profesorId } = useParams();

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

    if (materiaId) fetchParticipaciones();
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


      <h2 className="text-xl font-bold text-blue-700 mb-4">Participaciones de los Estudiantes</h2>

      {cargando ? (
        <p className="text-gray-500">Cargando participaciones...</p>
      ) : participaciones.length === 0 ? (
        <p className="text-gray-500">No hay participaciones registradas para esta materia.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow text-sm">
            <thead className="bg-gray-100">
              <tr className="text-center">
                <th className="px-4 py-2 border-b">#</th>
                <th className="px-4 py-2 border-b">Alumno</th>
                <th className="px-4 py-2 border-b">Fecha</th>
                <th className="px-4 py-2 border-b">Puntaje</th>
              </tr>
            </thead>
            <tbody>
              {participaciones.map((p, index) => (
                <tr key={p.id} className="hover:bg-gray-50 text-center">
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{p.alumno}</td>
                  <td className="px-4 py-2 border-b">{p.fecha}</td>
                  <td className="px-4 py-2 border-b">{p.puntaje}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ParticipacionesMateriaProfesor;
