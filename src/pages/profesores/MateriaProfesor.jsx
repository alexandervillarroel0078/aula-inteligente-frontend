// src/pages/profesores/MateriasProfesor.jsx

import React, { useEffect, useState } from 'react';
import { obtenerMateriasDelProfesor } from '../../services/profesorService';
import { useNavigate } from 'react-router-dom';

const MateriasProfesor = ({ profesorId }) => {
    const navigate = useNavigate();
    const [materias, setMaterias] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setCargando(true);
            const data = await obtenerMateriasDelProfesor(profesorId);
            setMaterias(data);
            setCargando(false);
        };
        if (profesorId) fetchData();
    }, [profesorId]);

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4">Materias Asignadas</h2>

            {cargando ? (
                <p className="text-gray-500">Cargando materias...</p>
            ) : materias.length === 0 ? (
                <p className="text-gray-500">No hay materias asignadas.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 bg-white shadow text-xs sm:text-sm">
                        <thead className="bg-gray-100">
                            <tr className="text-center">
                                <th className="px-4 py-2 border-b">#</th>
                                <th className="px-4 py-2 border-b">Nombre</th>
                                <th className="px-4 py-2 border-b">Turno</th>
                                <th className="px-4 py-2 border-b">Aula</th>
                                <th className="px-4 py-2 border-b">Grado</th>
                                <th className="px-4 py-2 border-b">Estado</th>
                                <th className="px-4 py-2 border-b">gestion</th>
                                <th className="px-4 py-2 border-b">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {materias.map((m, index) => (
                                <tr key={m.id} className="hover:bg-gray-50 text-center">
                                    <td className="px-4 py-2 border-b">{index + 1}</td>
                                    <td className="px-4 py-2 border-b">{m.nombre}</td>
                                    <td className="px-4 py-2 border-b">{m.turno}</td>
                                    <td className="px-4 py-2 border-b">{m.aula}</td>
                                    <td className="px-4 py-2 border-b">{m.grado_nombre}</td> {/* Se añadió el grado */}
                                    <td className="px-4 py-2 border-b">
                                        <span className={`px-2 py-1 text-xs rounded ${m.estado_asignacion === 'activo' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                            {m.estado_asignacion}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2 border-b">{m.fecha_asignacion}</td> {/* Fecha de asignación */}
                                    <td className="px-4 py-2 border-b space-x-1">
                                        <button
                                            onClick={() => navigate(`/panel/profesor/${profesorId}/materia/${m.id}/notas?grado_id=${m.grado_id}`)}
                                            className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
                                        >
                                            Notas
                                        </button>
                                        <button
                                            onClick={() =>
                                                navigate(`/panel/profesor/${profesorId}/materia/${m.id}/asistencias?grado_id=${m.grado_id}`)
                                            }
                                            className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded hover:bg-green-200"
                                        >
                                            Asistencias
                                        </button>
                                        <button
                                            onClick={() => navigate(`/panel/profesor/${profesorId}/materia/${m.id}/participaciones?grado_id=${m.grado_id}`)}
                                            className="px-2 py-1 text-xs bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200"
                                        >
                                            Participaciones
                                        </button>
                                        <button
                                            onClick={() => navigate(`/panel/profesor/${profesorId}/materia/${m.id}/estudiantes`)}
                                            className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded hover:bg-purple-200"
                                        >
                                            Estudiantes
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

export default MateriasProfesor;
