import React, { useEffect, useState } from 'react';
import { listarObservaciones } from '../services/observacionService';

const ObservacionListPage = () => {
  const [observaciones, setObservaciones] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargar = async () => {
      try {
        const data = await listarObservaciones();
        setObservaciones(data);
      } catch (error) {
        console.error('Error al cargar observaciones:', error);
      } finally {
        setCargando(false);
      }
    };

    cargar();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Observaciones Registradas</h2>

      {cargando ? (
        <p className="text-gray-500">Cargando...</p>
      ) : observaciones.length === 0 ? (
        <p className="text-gray-500">No hay observaciones aún.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2 border-b">#</th>
                <th className="px-4 py-2 border-b">Alumno</th>
                <th className="px-4 py-2 border-b">Profesor</th>
                <th className="px-4 py-2 border-b">Periodo</th>
                <th className="px-4 py-2 border-b">Fecha</th>
                <th className="px-4 py-2 border-b">Descripción</th>
              </tr>
            </thead>
            <tbody>
              {observaciones.map((o, index) => (
                <tr key={o.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{o.alumno_nombre || '-'}</td>
                  <td className="px-4 py-2 border-b">{o.profesor_nombre || '-'}</td>
                  <td className="px-4 py-2 border-b">{o.periodo_nombre || '-'}</td>
                  <td className="px-4 py-2 border-b">{o.fecha}</td>
                  <td className="px-4 py-2 border-b">{o.descripcion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ObservacionListPage;
