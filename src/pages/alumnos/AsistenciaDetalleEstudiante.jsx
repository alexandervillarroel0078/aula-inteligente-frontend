import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AsistenciaDetalleEstudiante = () => {
  const { alumnoId, materiaId, periodoId } = useParams();  // Tomamos los parámetros de la URL
  const [asistencias, setAsistencias] = useState([]);  // Para almacenar las asistencias
  const [loading, setLoading] = useState(true);  // Estado de carga

  useEffect(() => {
    const fetchAsistencia = async () => {
      try {
        // Hacemos la solicitud al backend
        const response = await fetch(`/api/alumnos/${alumnoId}/materias/${materiaId}/periodos/${periodoId}/asistencia/detalle`);

        if (!response.ok) {
          throw new Error('No se pudo obtener los detalles de la asistencia');
        }

        const data = await response.json();
        console.log(data); // Verificamos que los datos sean correctos

        setAsistencias(data);  // Almacenamos los datos en el estado
      } catch (error) {
        console.error("Error al obtener las asistencias:", error);
      } finally {
        setLoading(false);  // Cambiamos el estado de carga
      }
    };

    if (alumnoId && materiaId && periodoId) {
      fetchAsistencia();  // Llamamos solo si todos los parámetros están disponibles
    }
  }, [alumnoId, materiaId, periodoId]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4">Detalle de Asistencias</h2>

      {loading ? (
        <p className="text-gray-500">Cargando asistencias...</p>
      ) : asistencias.length === 0 ? (
        <p className="text-gray-500">No hay asistencias registradas para este periodo.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow text-xs sm:text-sm">
            <thead className="bg-gray-100">
              <tr className="text-center">
                <th className="px-4 py-2 border-b">#</th>
                <th className="px-4 py-2 border-b">Materia</th>
                <th className="px-4 py-2 border-b">Fecha</th>
                <th className="px-4 py-2 border-b">Estado</th>
              </tr>
            </thead>
            <tbody>
              {asistencias.map((a, index) => (
                <tr key={a.id} className="text-center hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{a.materia}</td>  {/* Usamos el nombre de la materia correctamente */}
                  <td className="px-4 py-2 border-b">{new Date(a.fecha).toLocaleDateString("es-BO", {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "2-digit"
                  })}</td>  {/* Usamos el formato de fecha adecuado */}
                  <td className="px-4 py-2 border-b">
                    <span className={`px-2 py-1 rounded-full text-white text-xs ${a.estado === "Presente" ? "bg-green-500" : "bg-red-500"}`}>
                      {a.estado}  {/* Estado de presencia o ausencia */}
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

export default AsistenciaDetalleEstudiante;
