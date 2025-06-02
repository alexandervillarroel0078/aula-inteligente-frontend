//pages/profesores/ParticipacionesMateriaProfesor.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { obtenerNotasPorMateriaYGrado } from '../../services/profesorService';

const NotasMateriaProfesor = () => {
    const { profesorId, materiaId } = useParams();
    const location = useLocation();

    const [notasData, setNotasData] = useState(null);
    const [loading, setLoading] = useState(true);

    const queryParams = new URLSearchParams(location.search);
    const gradoId = queryParams.get('grado_id');
    const nivelId = queryParams.get('nivel_id');
    const navigate = useNavigate();
    useEffect(() => {
        const fetchNotas = async () => {
            try {
                const data = await obtenerNotasPorMateriaYGrado(gradoId, profesorId, nivelId, materiaId);
                setNotasData(data);
            } catch (error) {
                console.error('Error al cargar notas:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchNotas();
    }, [gradoId, profesorId, nivelId, materiaId]);

    if (loading) return <p>Cargando notas...</p>;
    if (!notasData) return <p>No se encontraron datos.</p>;

    return (
        <div>
            <button
                onClick={() => navigate(`/panel/profesores/${profesorId}/tabs?tab=Materias`)}
                className="mb-4 px-4 py-2 text-sm bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
                ⬅️ Volver
            </button>
            <button
                onClick={() =>
                    navigate(`/panel/profesor/${profesorId}/materia/${materiaId}/notas/registrar?grado_id=${gradoId}&nivel_id=${nivelId}`) // Puedes hacer dinámico el periodo_id si quieres
                }
                className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                ➕ Registrar Notas Parciales
            </button>

            <h2 className="text-lg font-bold mb-4">
                Notas de {notasData.materia.nombre} - {notasData.grado.nombre} ({notasData.nivel})
            </h2>

            <p><strong>Docente:</strong> {notasData.docente.nombre}</p>
            <p><strong>Gestión:</strong> {notasData.gestion}</p>

            {notasData.periodos.map((periodo) => (
                <div key={periodo.periodo_id} className="mt-6">
                    <h3 className="font-semibold mb-2">{periodo.nombre}</h3>
                    {periodo.notas.length > 0 ? (
                        <table className="w-full table-auto border">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border px-2 py-1">#</th>
                                    <th className="border px-2 py-1">Alumno</th>
                                    <th className="border px-2 py-1">Nota Parcial</th>
                                    <th className="border px-2 py-1">Asistencia (%)</th>
                                    <th className="border px-2 py-1">Participación (%)</th>
                                    <th className="border px-2 py-1">Nota Final</th>
                                </tr>
                            </thead>
                            <tbody>
                                {periodo.notas.map((n, index) => (
                                    <tr key={n.alumno_id}>
                                        <td className="border px-2 py-1">{index + 1}</td>
                                        <td className="border px-2 py-1">{n.nombre} {n.apellido}</td>
                                        <td className="border px-2 py-1">{n.nota_parcial ?? '-'}</td>
                                        <td className="border px-2 py-1">{n.asistencia_trimestre ?? '-'}</td>
                                        <td className="border px-2 py-1">{n.participacion_trimestre ?? '-'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="text-sm text-gray-500">No hay notas registradas para este periodo.</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default NotasMateriaProfesor;
