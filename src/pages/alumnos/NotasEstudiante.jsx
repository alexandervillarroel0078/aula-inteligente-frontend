import React, { useEffect, useState } from 'react';
import { obtenerNotasAlumno } from '../../services/alumnoService';
import { FaEye } from 'react-icons/fa';

const NotasEstudiante = ({ alumnoId }) => {
  const [notas, setNotas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setCargando(true);
      const data = await obtenerNotasAlumno(alumnoId);  // Llamada a la API para obtener las notas
      setNotas(data);
      setCargando(false);
    };
    if (alumnoId) fetchData();  // Si hay un alumnoId, ejecutamos fetchData
  }, [alumnoId]);  // Dependencia de alumnoId

  // Calcular el promedio
  const promedio = notas.length > 0
    ? (notas.reduce((acc, curr) => acc + curr.nota, 0) / notas.length).toFixed(2)
    : "0.00";

  // Función para ver detalles de la nota
  const handleVer = (notaId) => {
    alert(`Ver detalle de la nota ID: ${notaId}`);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4">Notas</h2>
      <p className="text-sm text-gray-600 mb-2">
        Promedio general: <span className="font-semibold text-blue-600">{promedio}</span>
      </p>

      {cargando ? (
        <p className="text-gray-500">Cargando notas...</p>
      ) : notas.length === 0 ? (
        <p className="text-gray-500">No hay notas registradas.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow text-xs sm:text-sm">
            <thead className="bg-gray-100">
              <tr className="text-center">
                <th className="px-4 py-2 border-b">#</th>
                <th className="px-4 py-2 border-b">Materia</th>
                <th className="px-4 py-2 border-b">Periodo</th>
                <th className="px-4 py-2 border-b">Tipo Parcial</th>
                <th className="px-4 py-2 border-b">gestion</th>
                 <th className="px-4 py-2 border-b">grado</th>
                <th className="px-4 py-2 border-b">Nota periodo</th>
                <th className="px-4 py-2 border-b">observaciones</th>
                <th className="px-4 py-2 border-b">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {notas.map((n, index) => (
                <tr key={n.id} className="hover:bg-gray-50 text-center">
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{n.materia_nombre}</td>
                  <td className="px-4 py-2 border-b">{n.periodo_nombre}</td>
                  <td className="px-4 py-2 border-b">{n.tipo_parcial}</td>
                  <td className="px-4 py-2 border-b">{n.anio}</td>
                  <td className="px-4 py-2 border-b">{n.grado_nombre}</td>   <td className="px-4 py-2 border-b">{n.nota_periodo}</td>
                  <td className="px-4 py-2 border-b">{n.observaciones}</td>
                  <td className="px-4 py-2 border-b">
                    <button
                      onClick={() => handleVer(n.id)}
                      className="p-1 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600"
                      title="Ver"
                    >
                      <FaEye className="w-4 h-4" />
                    </button>
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

export default NotasEstudiante;
