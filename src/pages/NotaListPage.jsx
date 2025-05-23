import React, { useEffect, useState } from 'react';
import { listarNotas } from '../services/notaService';

const NotaListPage = () => {
  const [notas, setNotas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarNotas = async () => {
      try {
        const data = await listarNotas();
        setNotas(data);
      } catch (error) {
        console.error('Error al cargar notas:', error);
      } finally {
        setCargando(false);
      }
    };

    cargarNotas();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Listado de Notas</h2>

      {cargando ? (
        <p className="text-gray-500">Cargando notas...</p>
      ) : notas.length === 0 ? (
        <p className="text-gray-500">No hay notas registradas.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow">
            <thead className="bg-gray-100 text-sm text-left">
              <tr>
                <th className="px-4 py-2 border-b">#</th>
                <th className="px-4 py-2 border-b">Alumno</th>
                <th className="px-4 py-2 border-b">Materia</th>
                <th className="px-4 py-2 border-b">Periodo</th>
                <th className="px-4 py-2 border-b">Nota Final</th>
                <th className="px-4 py-2 border-b">Observaciones</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {notas.map((n, index) => (
                <tr key={n.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{n.alumno?.nombre_completo || '-'}</td>
                  <td className="px-4 py-2 border-b">{n.materia?.nombre || '-'}</td>
                  <td className="px-4 py-2 border-b">{n.periodo?.nombre || '-'}</td>
                  <td className="px-4 py-2 border-b">{n.nota_final}</td>
                  <td className="px-4 py-2 border-b">{n.observaciones}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default NotaListPage;
