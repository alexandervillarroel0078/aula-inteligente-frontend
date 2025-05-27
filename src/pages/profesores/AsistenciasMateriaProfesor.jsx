import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams, useLocation } from 'react-router-dom';  // Asegúrate de importar useLocation
import { obtenerAsistenciasPorProfesorMateriaGrado } from '../../services/profesorService';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AsistenciasMateriaProfesor = () => {
  const { profesorId, materiaId } = useParams();  // Obtener los parámetros de la URL (profesor y materia)
  const { search } = useLocation();  // Obtener los parámetros de la URL, como el grado_id
  const [asistencias, setAsistencias] = useState([]);  // Renombrar a 'asistencias' para ser consistente
  const [loading, setLoading] = useState(true);
  const [materiaNombre, setMateriaNombre] = useState("");  // Para almacenar el nombre de la materia
  const [searchParams] = useSearchParams();
  const gradoId = searchParams.get("grado_id");  // Obtener el grado_id de los query params
  const navigate = useNavigate();
  const [chartData, setChartData] = useState([]);
  const handleRegistroAsistencia = () => {
    // Redirige a la ruta de RegistroAsistenciaMateria
    navigate('/panel/profesor/registro-asistencia');  // Asegúrate de que la ruta sea la correcta
  };
  useEffect(() => {
    const prepararDatosGrafica = () => {
      const dataGrafica = asistencias.map(asistencia => ({
        nombre: asistencia.alumno_nombre,
        asistencias: asistencia.total_asistencias,
        faltas: asistencia.total_faltas,
      }));
      setChartData(dataGrafica);
    };

    if (asistencias.length > 0) {
      prepararDatosGrafica();
    }
  }, [asistencias]);

  const handleVolver = () => {
    navigate('/panel/estudiantes/materias');  // Cambia esta ruta por la que necesites
  };
  useEffect(() => {
    const fetchAsistencias = async () => {
      try {
        // Verificar que los parámetros existan
        if (!profesorId || !materiaId || !gradoId) {
          console.error("Faltan parámetros para la solicitud.");
          setLoading(false);
          return;  // Detiene la ejecución si faltan parámetros
        }

        const data = await obtenerAsistenciasPorProfesorMateriaGrado(profesorId, materiaId, gradoId);
        setMateriaNombre(data.materia_nombre);  // Asignamos el nombre de la materia desde el backend
        setAsistencias(data.asistencias);  // Guardamos las asistencias
      } catch (error) {
        console.error("Error al obtener las asistencias:", error);
      } finally {
        setLoading(false);  // Cambia a 'false' al finalizar la carga
      }
    };

    if (gradoId) {
      fetchAsistencias();  // Solo llamar la API si tenemos el 'gradoId'
    }
  }, [profesorId, materiaId, gradoId]);  // Dependencias para volver a ejecutar si alguno cambia

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4">Asistencias de los Alumnos</h2>

      {loading ? (
        <p className="text-gray-500">Cargando asistencias...</p>
      ) : asistencias.length === 0 ? (
        <p className="text-gray-500">No hay asistencias registradas.</p>
      ) : (

        <div className="overflow-x-auto">
          <button
                onClick={() => navigate(`/panel/profesores/${profesorId}/tabs?tab=Materias`)}
                className="mb-4 px-4 py-2 text-sm bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
                ⬅️ Volver
            </button>
          <div className="flex justify-between items-center mb-4">
            {/* Título */}
            <h3 className="text-lg font-semibold text-blue-600">Participaciones por Periodo</h3>

            {/* Botón */}
            <button
                    onClick={handleRegistroAsistencia}  // Asigna la función al botón
                    className="px-4 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700"
                >
                    ➕ Registrar asistencia
                </button>
          </div>
          <table className="min-w-full border border-gray-300 bg-white shadow text-xs sm:text-sm">
            <thead className="bg-gray-100">
              <tr className="text-center">
                <th className="px-4 py-2 border-b">#</th>
                <th className="px-4 py-2 border-b">Alumno</th>
                <th className="px-4 py-2 border-b">Grado</th>
                <th className="px-4 py-2 border-b">Periodo</th>
                <th className="px-4 py-2 border-b">Total Asistencias</th>
                <th className="px-4 py-2 border-b">Total Faltas</th>
                <th className="px-4 py-2 border-b">Porcentaje Asistencia</th>
                <th className="px-4 py-2 border-b">puntaje</th>
                <th className="px-4 py-2 border-b">acciones</th>
              </tr>
            </thead>
            <tbody>
              {asistencias.map((asistencia, index) => (
                <tr key={asistencia.alumno_id} className="hover:bg-gray-50 text-center">
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{asistencia.alumno_nombre}</td>
                  <td className="px-4 py-2 border-b">{asistencia.nombre_grado}</td>
                  <td className="px-4 py-2 border-b">{asistencia.nombre_periodo}</td>
                  <td className="px-4 py-2 border-b">{asistencia.total_asistencias}</td>
                  <td className="px-4 py-2 border-b">{asistencia.total_faltas}</td>
                  <td className="px-4 py-2 border-b">{asistencia.porcentaje_asistencia}%</td>
                  <td className="px-4 py-2 border-b">{asistencia.puntaje}</td>
                  <td className="border px-4 py-2 text-center">
                    <button
                      className="text-blue-600 hover:text-blue-800 border-b-2 border-transparent hover:border-blue-600"
                    >
                      Ver
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mb-6"> {/* Contenedor general para la gráfica */}
            <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4">Asistencias de los Alumnos</h2>

            {/* Contenedor para la gráfica con borde y padding */}
            <div className="bg-white p-4 shadow-md rounded-lg">
              {/* Gráfica de barras */}
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="nombre" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="asistencias" fill="#28a745" />
                  <Bar dataKey="faltas" fill="#FF0000" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

      )}
    </div>
  );
};

export default AsistenciasMateriaProfesor;

