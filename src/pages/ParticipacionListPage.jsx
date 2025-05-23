import React, { useEffect, useState } from 'react';
import { listarParticipaciones } from '../services/participacionService';

const ParticipacionListPage = () => {
  const [participaciones, setParticipaciones] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargar = async () => {
      try {
        const data = await listarParticipaciones();
        setParticipaciones(data);
      } catch (error) {
        console.error('Error al cargar participaciones:', error);
      } finally {
        setCargando(false);
      }
    };

    cargar();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Listado de Participaciones</h2>

      {cargando ? (
        <p className="text-gray-500">Cargando participaciones...</p>
      ) : participaciones.length === 0 ? (
        <p className="text-gray-500">No hay participaciones registradas.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow">
            <thead className="bg-gray-100 text-sm text-left">
              <tr>
                <th className="px-4 py-2 border-b">#</th>
                <th className="px-4 py-2 border-b">Alumno</th>
                <th className="px-4 py-2 border-b">Materia</th>
                <th className="px-4 py-2 border-b">Periodo</th>
                <th className="px-4 py-2 border-b">Fecha</th>
                <th className="px-4 py-2 border-b">Puntaje</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {participaciones.map((p, index) => (
                <tr key={p.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{p.alumno_nombre || '-'}</td>
                  <td className="px-4 py-2 border-b">{p.materia_nombre || '-'}</td>
                  <td className="px-4 py-2 border-b">{p.periodo_nombre || '-'}</td>
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

export default ParticipacionListPage;
