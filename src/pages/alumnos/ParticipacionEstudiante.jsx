import React, { useEffect, useState } from 'react';
import { obtenerParticipacionesAlumno } from '../../services/alumnoService';

const ParticipacionEstudiante = ({ alumnoId }) => {
  const [participaciones, setParticipaciones] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setCargando(true);
      const data = await obtenerParticipacionesAlumno(alumnoId);
      setParticipaciones(data);
      setCargando(false);
    };
    if (alumnoId) fetchData();
  }, [alumnoId]);

  // Calcular promedio por materia
  const promedios = {};
  participaciones.forEach(p => {
    if (!promedios[p.materia_nombre]) {
      promedios[p.materia_nombre] = { suma: 0, cantidad: 0 };
    }
    promedios[p.materia_nombre].suma += p.puntaje;
    promedios[p.materia_nombre].cantidad++;
  });

  const promedioPorMateria = Object.keys(promedios).map((materia) => ({
    materia,
    promedio: (promedios[materia].suma / promedios[materia].cantidad).toFixed(2)
  }));

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4">Participación</h2>

      {!cargando && (
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Total de participaciones: <span className="font-semibold">{participaciones.length}</span>
          </p>
          <h4 className="mt-2 text-sm font-semibold text-gray-700">Promedio por Materia:</h4>
          <ul className="ml-4 list-disc text-sm text-gray-700">
            {promedioPorMateria.map((m, i) => (
              <li key={i}>{m.materia}: <strong>{m.promedio}</strong></li>
            ))}
          </ul>
        </div>
      )}

      {cargando ? (
        <p className="text-gray-500">Cargando participaciones...</p>
      ) : participaciones.length === 0 ? (
        <p className="text-gray-500">No hay participaciones registradas.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow text-xs sm:text-sm">
            <thead className="bg-gray-100">
              <tr className="text-center">
                <th className="px-4 py-2 border-b">#</th>
                <th className="px-4 py-2 border-b">Materia</th>
                <th className="px-4 py-2 border-b">Fecha</th>
                <th className="px-4 py-2 border-b">Puntaje</th>
                {/* Descripción si tu backend lo permite */}
                {/* <th className="px-4 py-2 border-b">Descripción</th> */}
              </tr>
            </thead>
            <tbody>
              {participaciones.map((p, index) => (
                <tr key={p.id} className="hover:bg-gray-50 text-center">
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{p.materia_nombre}</td>
                  <td className="px-4 py-2 border-b">
                    {new Date(p.fecha).toLocaleDateString("es-BO", {
                      weekday: "short",
                      year: "numeric",
                      month: "short",
                      day: "2-digit"
                    })}
                  </td>
                  <td className="px-4 py-2 border-b">{p.puntaje}</td>
                  {/* <td className="px-4 py-2 border-b">{p.descripcion || 'Sin descripción'}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ParticipacionEstudiante;
