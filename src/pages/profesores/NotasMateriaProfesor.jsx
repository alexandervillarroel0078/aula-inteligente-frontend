
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
                onClick={() => navigate(-1)} // Vuelve a la página anterior
                className="mb-4 px-4 py-2 text-sm bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
                ⬅️ Volver
            </button>

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


// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { obtenerNotasPorMateria } from '../../services/profesorService';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// const NotasMateriaProfesor = () => {
//     const { materiaId, profesorId } = useParams();
//     const navigate = useNavigate();
//     const [notas, setNotas] = useState([]);
//     const [cargando, setCargando] = useState(true);

//     const promedioGeneral = (campo) => {
//         const valores = notas.map((n) => n[campo] || 0);
//         return (valores.reduce((a, b) => a + b, 0) / valores.length).toFixed(2);
//     };
//     const [bimestresVisibles, setBimestresVisibles] = useState({
//         1: false,
//         2: false,
//         3: false,
//         4: false
//     });
//     useEffect(() => {
//         const fetchNotas = async () => {
//             try {
//                 const data = await obtenerNotasPorMateria(materiaId);
//                 setNotas(data);
//             } catch (error) {
//                 console.error('❌ Error al obtener notas:', error);
//             } finally {
//                 setCargando(false);
//             }
//         };

//         if (materiaId) fetchNotas();
//     }, [materiaId]);

//     return (
//         <div className="p-4">
//             <button
//                 onClick={() => navigate(`/panel/profesores/${profesorId}/tabs?tab=Materias`)}
//                 className="mb-4 px-4 py-2 text-sm bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
//             >
//                 ⬅️ Volver
//             </button>

//             {cargando ? (
//                 <p className="text-gray-500">Cargando notas...</p>
//             ) : notas.length === 0 ? (
//                 <p className="text-gray-500">No hay notas registradas para esta materia.</p>
//             ) : (
//                 <>

//                     <div className="flex justify-between items-center mb-4">
//                         <h3 className="text-lg font-semibold text-blue-600">Notas por Periodo</h3>

//                         <button
//                             onClick={() => navigate(`/panel/profesores/${profesorId}/materias/${materiaId}/notas/nueva`)}
//                             className="px-4 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700"
//                         >
//                             ➕ Registrar Notas
//                         </button>
//                     </div>
//                     <h3 className="text-lg font-semibold text-blue-600 mb-4 mt-8">Detalle Evaluativo:</h3>
//                     {[1, 2, 3, 4].map((bimestre) => (
//                         <div key={bimestre} className="mb-8">
//                             <button
//                                 onClick={() => setBimestresVisibles(prev => ({ ...prev, [bimestre]: !prev[bimestre] }))}
//                                 className="mb-2 px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
//                             >
//                                 {bimestresVisibles[bimestre] ? '🔽 Ocultar' : '▶️ Ver'} Detalle del {bimestre}° Bimestre
//                             </button>
//                             {bimestresVisibles[bimestre] && (
//                                 <table className="min-w-full border border-gray-300 bg-white shadow text-sm">
//                                     <thead className="bg-gray-100 text-center">
//                                         <tr>
//                                             <th className="px-4 py-2 border-b">#</th>
//                                             <th className="px-4 py-2 border-b">Alumno</th>
//                                             <th className="px-4 py-2 border-b">Parcial</th>
//                                             <th className="px-4 py-2 border-b">Asistencia</th>
//                                             <th className="px-4 py-2 border-b">Participación</th>
//                                             <th className="px-4 py-2 border-b font-bold">Nota Final</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {notas.map((n, index) => (
//                                             <tr key={index} className="hover:bg-gray-50 text-center">
//                                                 <td className="px-4 py-2 border-b">{index + 1}</td>
//                                                 <td className="px-4 py-2 border-b">{n.alumno}</td>
//                                                 <td className="px-4 py-2 border-b">{n[`nota${bimestre}`] ?? '-'}</td>
//                                                 <td className="px-4 py-2 border-b">{n[`b${bimestre}_asistencia`] ?? '-'}</td>
//                                                 <td className="px-4 py-2 border-b">{n[`b${bimestre}_participacion`] ?? '-'}</td>
//                                                 <td className="px-4 py-2 border-b font-semibold">
//                                                     {n[`b${bimestre}_nota_final`] != null ? (
//                                                         <span className={`px-2 py-1 rounded text-white text-xs font-bold ${n[`b${bimestre}_nota_final`] >= 51 ? 'bg-green-500' : 'bg-red-500'}`}>
//                                                             {n[`b${bimestre}_nota_final`]} – {n[`b${bimestre}_nota_final`] >= 51 ? '✔️ Aprobado' : '❌ Reprobado'}
//                                                         </span>
//                                                     ) : '-'}
//                                                 </td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             )}
//                         </div>
//                     ))}
//                     <h3 className="text-lg font-semibold text-blue-600 mb-4 mt-8">Notas Finales</h3>
//                     <div className="overflow-x-auto mb-8">
//                         <table className="min-w-full border border-gray-300 bg-white shadow text-sm">
//                             <thead className="bg-gray-100">
//                                 <tr className="text-center">
//                                     <th className="px-4 py-2 border-b">#</th>
//                                     <th className="px-4 py-2 border-b">Alumno</th>
//                                     <th className="px-4 py-2 border-b">1er Bim.</th>
//                                     <th className="px-4 py-2 border-b">2do Bim.</th>
//                                     <th className="px-4 py-2 border-b">3er Bim.</th>
//                                     <th className="px-4 py-2 border-b">4to Bim.</th>
//                                     <th className="px-4 py-2 border-b">Promedio</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {notas.map((n, index) => (
//                                     <tr key={index} className="hover:bg-gray-50 text-center">
//                                         <td className="px-4 py-2 border-b">{index + 1}</td>
//                                         <td className="px-4 py-2 border-b">{n.alumno}</td>
//                                         <td className="px-4 py-2 border-b">{n.nota1}</td>
//                                         <td className="px-4 py-2 border-b">{n.nota2}</td>
//                                         <td className="px-4 py-2 border-b">{n.nota3}</td>
//                                         <td className="px-4 py-2 border-b">{n.nota4}</td>
//                                         <td className="px-4 py-2 border-b font-semibold">
//                                             <span className={`px-2 py-1 rounded text-white text-xs font-bold ${n.promedio >= 51 ? 'bg-green-500' : 'bg-red-500'}`}>
//                                                 {n.promedio} {n.promedio >= 51 ? '✔️ Aprobado' : '❌ Reprobado'}
//                                             </span>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                     <h3 className="text-lg font-semibold text-blue-600 mt-8">Comparación de Notas por Bimestre</h3>
//                     <ResponsiveContainer width="100%" height={250}>
//                         <BarChart data={notas}>
//                             <XAxis dataKey="alumno" />
//                             <YAxis />
//                             <Tooltip />
//                             <Bar dataKey="nota1" fill="#8884d8" name="1er Bim." />
//                             <Bar dataKey="nota2" fill="#82ca9d" name="2do Bim." />
//                             <Bar dataKey="nota3" fill="#ffc658" name="3er Bim." />
//                             <Bar dataKey="nota4" fill="#ff8042" name="4to Bim." />
//                         </BarChart>
//                     </ResponsiveContainer>
//                 </>
//             )}
//         </div>
//     );
// };

// export default NotasMateriaProfesor;