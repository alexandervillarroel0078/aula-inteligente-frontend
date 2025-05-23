import React, { useEffect, useState } from 'react';
import { listarAsistencias } from '../services/asistenciaService';

const AsistenciaListPage = () => {
  const [asistencias, setAsistencias] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarAsistencias = async () => {
      try {
        const data = await listarAsistencias();
        setAsistencias(data);
      } catch (error) {
        console.error('Error al cargar asistencias:', error);
      } finally {
        setCargando(false);
      }
    };

    cargarAsistencias();
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Listado de Asistencias</h2>

      {cargando ? (
        <p className="text-gray-500">Cargando asistencias...</p>
      ) : asistencias.length === 0 ? (
        <p className="text-gray-500">No hay registros.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow text-xs sm:text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border-b">#</th>
                <th className="px-4 py-2 border-b">Alumno</th>
                <th className="px-4 py-2 border-b hidden md:table-cell">Materia</th>
                <th className="px-4 py-2 border-b hidden md:table-cell">Periodo</th>
                <th className="px-4 py-2 border-b">Fecha</th>
                <th className="px-4 py-2 border-b">Asistencia</th>
              </tr>
            </thead>
            <tbody>
              {asistencias.map((a, index) => (
                <tr key={a.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{a.alumno_nombre || '-'}</td>
                  <td className="px-4 py-2 border-b hidden md:table-cell">{a.materia_nombre || '-'}</td>
                  <td className="px-4 py-2 border-b hidden md:table-cell">{a.periodo_nombre || '-'}</td>
                  <td className="px-4 py-2 border-b">{a.fecha}</td>
                  <td className="px-4 py-2 border-b">
                    <span className={`font-bold ${a.presente ? 'text-green-600' : 'text-red-500'}`}>
                      {a.presente ? '✔ Presente' : '✘ Ausente'}
                    </span>
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

export default AsistenciaListPage;
