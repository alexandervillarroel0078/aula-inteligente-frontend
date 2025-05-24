import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerNotasPorMateria } from '../../services/profesorService';
import { useNavigate } from 'react-router-dom';

const NotasMateriaProfesor = () => {
    const navigate = useNavigate();
    const { materiaId } = useParams();
    const [notas, setNotas] = useState([]);
    const [cargando, setCargando] = useState(true);
const { profesorId } = useParams();

    useEffect(() => {
        const fetchNotas = async () => {
            try {
                const data = await obtenerNotasPorMateria(materiaId);
                setNotas(data);
            } catch (error) {
                console.error('❌ Error al obtener notas:', error);
            } finally {
                setCargando(false);
            }
        };

        if (materiaId) fetchNotas();
    }, [materiaId]);

    return (
        <div className="p-4">
           <button
  onClick={() => navigate(`/panel/profesores/${profesorId}/tabs?tab=Materias`)}
  className="mb-4 px-4 py-2 text-sm bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
>
  ⬅️ Volver
</button>


            <h2 className="text-xl font-bold text-blue-700 mb-4">Notas de los Estudiantes</h2>

            {cargando ? (
                <p className="text-gray-500">Cargando notas...</p>
            ) : notas.length === 0 ? (
                <p className="text-gray-500">No hay notas registradas para esta materia.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 bg-white shadow text-sm">
                        <thead className="bg-gray-100">
                            <tr className="text-center">
                                <th className="px-4 py-2 border-b">#</th>
                                <th className="px-4 py-2 border-b">Alumno</th>
                                <th className="px-4 py-2 border-b">Nota Final</th>
                                <th className="px-4 py-2 border-b">Observaciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {notas.map((nota, index) => (
                                <tr key={nota.id} className="hover:bg-gray-50 text-center">
                                    <td className="px-4 py-2 border-b">{index + 1}</td>
                                    <td className="px-4 py-2 border-b">{nota.alumno}</td>
                                    <td className="px-4 py-2 border-b">{nota.nota_final}</td>
                                    <td className="px-4 py-2 border-b">{nota.observaciones || '—'}</td>
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
