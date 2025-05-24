import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { obtenerEstudiantesPorMateria } from '../../services/profesorService';

const EstudiantesMateriaProfesor = () => {
    const { materiaId } = useParams();
    const navigate = useNavigate();
    const [estudiantes, setEstudiantes] = useState([]);
    const [cargando, setCargando] = useState(true);
const { profesorId } = useParams();

    useEffect(() => {
        const fetchEstudiantes = async () => {
            try {
                const data = await obtenerEstudiantesPorMateria(materiaId);
                setEstudiantes(data);
            } catch (error) {
                console.error('❌ Error al obtener estudiantes:', error);
            } finally {
                setCargando(false);
            }
        };

        if (materiaId) fetchEstudiantes();
    }, [materiaId]);

    return (
        <div className="p-4">
            {/* Botón volver */}
            <button
  onClick={() => navigate(`/panel/profesores/${profesorId}/tabs?tab=Materias`)}
  className="mb-4 px-4 py-2 text-sm bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
>
  ⬅️ Volver
</button>


            <h2 className="text-xl font-bold text-blue-700 mb-4">Estudiantes de la Materia</h2>

            {cargando ? (
                <p className="text-gray-500">Cargando estudiantes...</p>
            ) : estudiantes.length === 0 ? (
                <p className="text-gray-500">No hay estudiantes para esta materia.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 bg-white shadow text-sm">
                        <thead className="bg-gray-100">
                            <tr className="text-center">
                                <th className="px-4 py-2 border-b">#</th>
                                <th className="px-4 py-2 border-b">Código(CI)</th>
                                <th className="px-4 py-2 border-b">Nombre</th>
                                <th className="px-4 py-2 border-b">Correo</th>
                                <th className="px-4 py-2 border-b">Teléfono</th>
                                <th className="px-4 py-2 border-b">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {estudiantes.map((e, index) => (
                                <tr key={e.id} className="hover:bg-gray-50 text-center">
                                    <td className="px-4 py-2 border-b">{index + 1}</td>
                                    <td className="px-4 py-2 border-b">{e.codigo}</td>
                                    <td className="px-4 py-2 border-b">{e.nombre_completo}</td>
                                    <td className="px-4 py-2 border-b">{e.email}</td>
                                    <td className="px-4 py-2 border-b">{e.telefono}</td>
                                    <td className="px-4 py-2 border-b">{e.estado}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default EstudiantesMateriaProfesor;
