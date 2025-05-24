import React, { useEffect, useState } from 'react';
import { obtenerHistorialAlumno } from '../../services/alumnoService';

const HistorialEstudiante = ({ alumnoId }) => {
  const [historial, setHistorial] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setCargando(true);
      const data = await obtenerHistorialAlumno(alumnoId);
      setHistorial(data);
      setCargando(false);
    };
    if (alumnoId) fetchData();
  }, [alumnoId]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4">Historial Académico</h2>
      <div className="bg-gray-50 border rounded-lg p-4 mb-6">
        <p><strong>👤 Nombre:</strong> Juan Pérez</p>
        <p><strong>🎓 Curso:</strong> 3er Grado</p>
        <p><strong>📊 Promedio general:</strong> 63.4</p>
        <p><strong>📈 Asistencia total:</strong> 85.7%</p>
        <p><strong>🗣️ Participaciones:</strong> 45</p>
        <p><strong>🤖 Predicción IA:</strong> 75.2 (Rendimiento Medio)</p>
      </div>
      {cargando ? (
        <p className="text-gray-500">Cargando historial...</p>
      ) : historial.length === 0 ? (
        <p className="text-gray-500">No hay historial registrado.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow text-xs sm:text-sm">
            <thead className="bg-gray-100">
              <tr className="text-center">
                <th className="px-4 py-2 border-b text-center">#</th>
                <th className="px-4 py-2 border-b text-center">Materia</th>
                <th className="px-4 py-2 border-b text-center">Periodo</th>
                <th className="px-4 py-2 border-b text-center">Nota Final</th>
              </tr>
            </thead>
            <tbody>
              {historial.map((h, index) => (
                <tr key={`${h.materia_id}-${h.periodo_id}`} className="hover:bg-gray-50 text-center">
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{h.materia_nombre}</td>
                  <td className="px-4 py-2 border-b">{h.periodo_nombre}</td>
                  <td className="px-4 py-2 border-b">{h.nota_final}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default HistorialEstudiante;
