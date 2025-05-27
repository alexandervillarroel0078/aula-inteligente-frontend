import React, { useEffect, useState } from 'react';
import { obtenerParticipacionPorProfesorMateriaGrado } from '../../services/profesorService';  // Asegúrate de que este método exista en tu servicio
import { useParams, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ParticipacionesMateriaProfesor = () => {
    const { profesorId, materiaId } = useParams();  // Obtener los parámetros de la URL (profesor y materia)
    const { search } = useLocation();  // Obtener los parámetros de la URL, como el grado_id
    const [participaciones, setParticipaciones] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [materiaNombre, setMateriaNombre] = useState("");  // Para almacenar el nombre de la materia

    const gradoId = new URLSearchParams(search).get('grado_id');  // Obtener el grado_id de los query params
    const handleRegistrarParticipacion = () => {
        navigate('/panel/profesor/registro-participacion');  // Redirige a la página de registro de participación
    };
    useEffect(() => {
        const fetchParticipaciones = async () => {
            try {
                // Llamar a la función del servicio para obtener las participaciones
                const data = await obtenerParticipacionPorProfesorMateriaGrado(profesorId, materiaId, gradoId);

                // Establecer el nombre de la materia
                setMateriaNombre(data.materia_nombre);  // Asignamos el nombre de la materia desde el backend

                setParticipaciones(data.participaciones);  // Guardamos las participaciones
            } catch (error) {
                console.error("Error al obtener las participaciones:", error);
            } finally {
                setLoading(false);  // Dejar de cargar después de obtener las participaciones
            }
        };

        if (gradoId) fetchParticipaciones();  // Solo hacer la llamada si tenemos el grado_id
    }, [profesorId, materiaId, gradoId]);

    return (
        <div className="px-4 sm:px-6 lg:px-8">
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
                    onClick={handleRegistrarParticipacion}
                    className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    ➕ Registrar Participación
                </button>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4">
                Participaciones de {participaciones.length > 0 ? `Materia: ${participaciones[0].materia_nombre}` : "Cargando..."}
            </h2>

            {loading ? (
                <p className="text-gray-500">Cargando participaciones...</p>
            ) : participaciones.length === 0 ? (
                <p className="text-gray-500">No hay participaciones disponibles para esta materia.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 bg-white shadow text-xs sm:text-sm">
                        <thead className="bg-gray-100">
                            <tr className="text-center">
                                <th className="px-4 py-2 border-b">#</th>
                                <th className="px-4 py-2 border-b">Alumno</th>
                                <th className="px-4 py-2 border-b">Periodo</th>
                                <th className="px-4 py-2 border-b">Total Participaciones</th>
                                <th className="px-4 py-2 border-b">Total Faltas</th>
                                <th className="px-4 py-2 border-b">Porcentaje de Participación</th>
                                <th className="px-4 py-2 border-b">Puntaje</th>
                            </tr>
                        </thead>
                        <tbody>


                            {participaciones.map((alumno, index) => (
                                <React.Fragment key={alumno.alumno_id}>
                                    {/* Fila para los datos del alumno */}
                                    <tr className="hover:bg-gray-50 text-center">
                                        <td rowSpan={5} className="px-4 py-2 border-b">{index + 1}</td>
                                        <td rowSpan={5} className="px-4 py-2 border-b">{alumno.alumno_nombre}</td>
                                    </tr>

                                    {/* 1er Bimestre */}
                                    <tr className="hover:bg-gray-50 text-center">
                                        <td className="px-4 py-2 border-b">
                                            {alumno.participacion_por_periodo["1"] ? (
                                                alumno.participacion_por_periodo["1"].nombre_periodo
                                            ) : (
                                                "Periodo no disponible"
                                            )}
                                        </td>

                                        <td className="px-4 py-2 border-b">
                                            {alumno.participacion_por_periodo["1"] ? alumno.participacion_por_periodo["1"].total_participaciones : "0"}
                                        </td>
                                        <td className="px-4 py-2 border-b">
                                            {alumno.participacion_por_periodo["1"] ? alumno.participacion_por_periodo["1"].total_faltas : "0"}
                                        </td>
                                        <td className="px-4 py-2 border-b">
                                            {alumno.participacion_por_periodo["1"] ? `${alumno.participacion_por_periodo["1"].porcentaje_participacion}%` : "0%"}
                                        </td>
                                        <td className="px-4 py-2 border-b">
                                            {alumno.participacion_por_periodo["1"] ? alumno.participacion_por_periodo["1"].puntaje : "0"}
                                        </td>
                                    </tr>

                                    {/* 2do Bimestre */}
                                    <tr className="hover:bg-gray-50 text-center">
                                        <td className="px-4 py-2 border-b">
                                            {alumno.participacion_por_periodo["2"] ? (
                                                alumno.participacion_por_periodo["2"].nombre_periodo
                                            ) : (
                                                "Periodo no disponible"
                                            )}
                                        </td>

                                        <td className="px-4 py-2 border-b">
                                            {alumno.participacion_por_periodo["2"] ? alumno.participacion_por_periodo["2"].total_participaciones : "0"}
                                        </td>
                                        <td className="px-4 py-2 border-b">
                                            {alumno.participacion_por_periodo["2"] ? alumno.participacion_por_periodo["2"].total_faltas : "0"}
                                        </td>
                                        <td className="px-4 py-2 border-b">
                                            {alumno.participacion_por_periodo["2"] ? `${alumno.participacion_por_periodo["2"].porcentaje_participacion}%` : "0%"}
                                        </td>
                                        <td className="px-4 py-2 border-b">
                                            {alumno.participacion_por_periodo["2"] ? alumno.participacion_por_periodo["2"].puntaje : "0"}
                                        </td>
                                    </tr>

                                    {/* 3er Bimestre */}
                                    <tr className="hover:bg-gray-50 text-center">
                                        <td className="px-4 py-2 border-b">
                                            {alumno.participacion_por_periodo["3"] ? (
                                                alumno.participacion_por_periodo["3"].nombre_periodo
                                            ) : (
                                                "Periodo no disponible"
                                            )}
                                        </td>

                                        <td className="px-4 py-2 border-b">
                                            {alumno.participacion_por_periodo["3"] ? alumno.participacion_por_periodo["3"].total_participaciones : "0"}
                                        </td>
                                        <td className="px-4 py-2 border-b">
                                            {alumno.participacion_por_periodo["3"] ? alumno.participacion_por_periodo["3"].total_faltas : "0"}
                                        </td>
                                        <td className="px-4 py-2 border-b">
                                            {alumno.participacion_por_periodo["3"] ? `${alumno.participacion_por_periodo["3"].porcentaje_participacion}%` : "0%"}
                                        </td>
                                        <td className="px-4 py-2 border-b">
                                            {alumno.participacion_por_periodo["3"] ? alumno.participacion_por_periodo["3"].puntaje : "0"}
                                        </td>
                                    </tr>

                                    {/* 4to Bimestre */}
                                    <tr className="hover:bg-gray-50 text-center">
                                        <td className="px-4 py-2 border-b">
                                            {alumno.participacion_por_periodo["4"] ? (
                                                alumno.participacion_por_periodo["4"].nombre_periodo
                                            ) : (
                                                "Periodo no disponible"
                                            )}
                                        </td>

                                        <td className="px-4 py-2 border-b">
                                            {alumno.participacion_por_periodo["4"] ? alumno.participacion_por_periodo["4"].total_participaciones : "0"}
                                        </td>
                                        <td className="px-4 py-2 border-b">
                                            {alumno.participacion_por_periodo["4"] ? alumno.participacion_por_periodo["4"].total_faltas : "0"}
                                        </td>
                                        <td className="px-4 py-2 border-b">
                                            {alumno.participacion_por_periodo["4"] ? `${alumno.participacion_por_periodo["4"].porcentaje_participacion}%` : "0%"}
                                        </td>
                                        <td className="px-4 py-2 border-b">
                                            {alumno.participacion_por_periodo["4"] ? alumno.participacion_por_periodo["4"].puntaje : "0"}
                                        </td>
                                    </tr>
                                </React.Fragment>

                            ))}
                        </tbody>
                    </table>
                </div>


            )}{!loading && participaciones.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-xl font-bold text-blue-700 mb-4">Gráfico de Puntajes por Alumno</h3>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={participaciones.map((alumno) => ({
                            alumno_nombre: alumno.alumno_nombre,
                            "1er Bimestre": alumno.participacion_por_periodo["1"] ? alumno.participacion_por_periodo["1"].puntaje : 0,
                            "2do Bimestre": alumno.participacion_por_periodo["2"] ? alumno.participacion_por_periodo["2"].puntaje : 0,
                            "3er Bimestre": alumno.participacion_por_periodo["3"] ? alumno.participacion_por_periodo["3"].puntaje : 0,
                            "4to Bimestre": alumno.participacion_por_periodo["4"] ? alumno.participacion_por_periodo["4"].puntaje : 0,
                        }))}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="alumno_nombre" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="1er Bimestre" fill="#8884d8" />
                            <Bar dataKey="2do Bimestre" fill="#82ca9d" />
                            <Bar dataKey="3er Bimestre" fill="#ffc658" />
                            <Bar dataKey="4to Bimestre" fill="#d0ed57" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            )}

        </div>
    );
};

export default ParticipacionesMateriaProfesor;

