
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { obtenerNotasPorMateriaProfesorGrado } from '../../services/profesorService';  // Asegúrate de que este método exista en tu servicio
import { useNavigate } from 'react-router-dom';

const NotasMateriaProfesor = () => {
    const { profesorId, materiaId } = useParams();  // Obtener los parámetros de la URL (profesor y materia)
    const { search } = useLocation();  // Obtener los parámetros de la URL, como el grado_id
    const [notas, setNotas] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const gradoId = new URLSearchParams(search).get('grado_id');  // Get grado_id from query parameters
    // Obtener el grado_id de los query params
    const handleRegistrarNotas = () => {
        navigate('/panel/profesor/registro-notas');  // Redirige a la página de registro de notas
    };
    useEffect(() => {
        const fetchNotas = async () => {
            try {
                // Llamar a la función del servicio para obtener las notas
                const data = await obtenerNotasPorMateriaProfesorGrado(profesorId, materiaId, gradoId);
                setNotas(data.notas);  // Asumimos que las notas vienen bajo 'data.notas'
            } catch (error) {
                console.error("Error al obtener las notas:", error);
            } finally {
                setLoading(false);  // Dejar de cargar después de obtener las notas
            }
        };

        if (gradoId) fetchNotas();  // Solo hacer la llamada si tenemos el grado_id

    }, [profesorId, materiaId, gradoId]);  // Dependencias para actualizar cuando cambian el profesorId, materiaId o gradoId

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
                <h3 className="text-lg font-semibold text-blue-600">Notas</h3>

                {/* Botón */}
                <button
                    onClick={handleRegistrarNotas}
                    className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    ➕ Registrar Notas
                </button>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4">
                Notas de {notas.length > 0 ? `Materia: ${notas[0].materia_nombre}` : "Cargando..."}
            </h2>

            {loading ? (
                <p className="text-gray-500">Cargando notas...</p>
            ) : notas.length === 0 ? (
                <p className="text-gray-500">No hay notas disponibles para esta materia.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 bg-white shadow text-xs sm:text-sm">
                        <thead className="bg-gray-100">
                            <tr className="text-center">
                                <th className="px-4 py-2 border-b">#</th>
                                <th className="px-4 py-2 border-b">Alumno</th>
                                <th className="px-4 py-2 border-b">Grado</th>
                                <th className="px-4 py-2 border-b">Periodo</th>
                                <th className="px-4 py-2 border-b">Nota Parcial</th>
                                <th className="px-4 py-2 border-b">Nota Participación</th>
                                <th className="px-4 py-2 border-b">Nota Asistencia</th>
                                <th className="px-4 py-2 border-b">Observaciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {notas.map((nota, index) => (
                                <tr key={nota.id} className="hover:bg-gray-50 text-center">
                                    <td className="px-4 py-2 border-b">{index + 1}</td>
                                    <td className="px-4 py-2 border-b">{nota.alumno_nombre}</td>
                                    <td className="px-4 py-2 border-b">{nota.grado}</td>
                                    <td className="px-4 py-2 border-b">{nota.periodo}</td>
                                    <td className="px-4 py-2 border-b">{nota.nota_parcial}</td>
                                    <td className="px-4 py-2 border-b">{nota.nota_participacion}</td>
                                    <td className="px-4 py-2 border-b">{nota.nota_asistencia}</td>
                                    <td className="px-4 py-2 border-b">{nota.observaciones}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default NotasMateriaProfesor;
