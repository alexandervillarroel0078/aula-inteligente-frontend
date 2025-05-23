import React, { useEffect, useState } from 'react';
import { listarTareas } from '../services/tareaService';

const TareaListPage = () => {
  const [tareas, setTareas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargar = async () => {
      try {
        const data = await listarTareas();
        setTareas(data);
      } catch (error) {
        console.error('Error al cargar tareas:', error);
      } finally {
        setCargando(false);
      }
    };
    cargar();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Listado de Tareas</h2>

      {cargando ? (
        <p className="text-gray-500">Cargando tareas...</p>
      ) : tareas.length === 0 ? (
        <p className="text-gray-500">No hay tareas registradas.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow">
            <thead className="bg-gray-100 text-sm text-left">
              <tr>
                <th className="px-4 py-2 border-b">#</th>
                <th className="px-4 py-2 border-b">Título</th>
                <th className="px-4 py-2 border-b">Descripción</th>
                <th className="px-4 py-2 border-b">Fecha de Entrega</th>
                <th className="px-4 py-2 border-b">Materia</th>
                <th className="px-4 py-2 border-b">Profesor</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {tareas.map((t, index) => (
                <tr key={t.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{t.titulo}</td>
                  <td className="px-4 py-2 border-b">{t.descripcion}</td>
                  <td className="px-4 py-2 border-b">{t.fecha_entrega}</td>
                  <td className="px-4 py-2 border-b">{t.materia_nombre || '-'}</td>
                  <td className="px-4 py-2 border-b">{t.profesor_nombre || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TareaListPage;
