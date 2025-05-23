import React, { useEffect, useState } from 'react';
import { listarTareasEntregadas } from '../services/tareaEntregadaService';

const TareaEntregadaListPage = () => {
  const [entregas, setEntregas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargar = async () => {
      try {
        const data = await listarTareasEntregadas();
        setEntregas(data);
      } catch (error) {
        console.error('Error al cargar tareas entregadas:', error);
      } finally {
        setCargando(false);
      }
    };
    cargar();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Tareas Entregadas</h2>

      {cargando ? (
        <p className="text-gray-500">Cargando entregas...</p>
      ) : entregas.length === 0 ? (
        <p className="text-gray-500">No hay entregas registradas.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow">
            <thead className="bg-gray-100 text-sm text-left">
              <tr>
                <th className="px-4 py-2 border-b">#</th>
                <th className="px-4 py-2 border-b">Tarea</th>
                <th className="px-4 py-2 border-b">Alumno</th>
                <th className="px-4 py-2 border-b">Archivo</th>
                <th className="px-4 py-2 border-b">Fecha de Entrega</th>
                <th className="px-4 py-2 border-b">Calificación</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {entregas.map((e, index) => (
                <tr key={e.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{e.tarea_titulo || '-'}</td>
                  <td className="px-4 py-2 border-b">{e.alumno_nombre || '-'}</td>
                  <td className="px-4 py-2 border-b">
                    <a href={e.archivo_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                      Ver archivo
                    </a>
                  </td>
                  <td className="px-4 py-2 border-b">{e.fecha_entrega}</td>
                  <td className="px-4 py-2 border-b">{e.calificacion ?? '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TareaEntregadaListPage;
