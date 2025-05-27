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
                onClick={() => navigate(-1)} // Vuelve a la página anterior
                className="mb-4 px-4 py-2 text-sm bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
                ⬅️ Volver
            </button>

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


// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { obtenerParticipacionesPorMateria } from '../../services/profesorService';
// import { PieChart, Pie, Cell, Legend } from 'recharts';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// const ParticipacionesMateriaProfesor = () => {
//   const { materiaId, profesorId } = useParams();
//   const navigate = useNavigate();
//   const [participaciones, setParticipaciones] = useState([]);
  
//   const [cargando, setCargando] = useState(true);

//   // Calcular totales por periodo
//   const totalPeriodo1 = participaciones.reduce((sum, p) => sum + (p.periodo1 || 0), 0);
//   const totalPeriodo2 = participaciones.reduce((sum, p) => sum + (p.periodo2 || 0), 0);
//   const totalPeriodo3 = participaciones.reduce((sum, p) => sum + (p.periodo3 || 0), 0);
//   const totalPeriodo4 = participaciones.reduce((sum, p) => sum + (p.periodo4 || 0), 0);
//   const totalGeneral = totalPeriodo1 + totalPeriodo2 + totalPeriodo3 + totalPeriodo4;

//   useEffect(() => {
//     const fetchParticipaciones = async () => {
//       try {
//         const data = await obtenerParticipacionesPorMateria(materiaId);

//         // Calcular el porcentaje de participación para cada alumno
//         const participacionesConPorcentaje = data.map(p => {
//           const totalClasesPorSemestre = 10; // Total de clases por semestre

//           // Sumamos las participaciones de cada semestre
//           const totalSemestre1 = p.periodo1 + p.periodo2;
//           const totalSemestre2 = p.periodo3 + p.periodo4;

//           // Calculamos el porcentaje de participación por semestre
//           const porcentajeSemestre1 = totalSemestre1 > 0 ? (totalSemestre1 / totalClasesPorSemestre) * 100 : 0;
//           const porcentajeSemestre2 = totalSemestre2 > 0 ? (totalSemestre2 / totalClasesPorSemestre) * 100 : 0;

//           // Porcentaje total de participación (sumando ambos semestres)
//           const porcentajeTotal = (totalSemestre1 + totalSemestre2) > 0 ? ((totalSemestre1 + totalSemestre2) / (totalClasesPorSemestre * 2)) * 100 : 0;

//           return {
//             ...p,
//             porcentajeTotal: porcentajeTotal.toFixed(2), // Este es el porcentaje total de participación para cada alumno
//           };
//         });


//         setParticipaciones(participacionesConPorcentaje);
//       } catch (error) {
//         console.error('❌ Error al obtener participaciones:', error);
//       } finally {
//         setCargando(false);
//       }
//     };

//     if (materiaId) fetchParticipaciones(); // ✅ sin periodoId
//   }, [materiaId]);

//   return (
//     <div className="p-4">
//       <h3 className="text-lg font-semibold text-blue-600">borrar en produccion:solo habra 10 participaicon linea: 28 </h3>

//       {/* Botón volver */}
//       <button
//         onClick={() => navigate(`/panel/profesores/${profesorId}/tabs?tab=Materias`)}
//         className="mb-4 px-4 py-2 text-sm bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
//       >
//         ⬅️ Volver
//       </button>

//       {cargando ? (
//         <p className="text-gray-500">Cargando participaciones...</p>
//       ) : participaciones.length === 0 ? (
//         <p className="text-gray-500">No hay participaciones registradas para esta materia.</p>
//       ) : (
//         <>
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-lg font-semibold text-blue-600">Participaciones por Periodo</h3>

//             <button
//               onClick={() => navigate(`/panel/profesores/${profesorId}/materias/${materiaId}/participaciones/nueva`)}
//               className="px-4 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700"
//             >
//               ➕ Registrar Participación
//             </button>
//           </div>

//           {/* Total Participaciones por Semestre */}
//           <div className="w-1/2">
//             <p className="text-sm mt-2 font-semibold text-gray-700">
//               Total general de participaciones: <span className="text-blue-600">{totalGeneral}</span>
//             </p>
//             <ul className="text-sm text-gray-700 list-disc list-inside">
//               <li>1er Semestre: {totalPeriodo1}</li>
//               <li>2do Semestre: {totalPeriodo2}</li>
//               <li>3er Semestre: {totalPeriodo3}</li>
//               <li>4to Semestre: {totalPeriodo4}</li>
//             </ul>
//           </div>

//           <div className="overflow-x-auto mb-8">
//             <table className="min-w-full border border-gray-300 bg-white shadow text-sm">
//               <thead className="bg-gray-100">
//                 <tr className="text-center">
//                   <th className="px-4 py-2 border-b">#</th>
//                   <th className="px-4 py-2 border-b">Alumno</th>
//                   <th className="px-4 py-2 border-b">1er Bim.</th>
//                   <th className="px-4 py-2 border-b">2do Bim.</th>
//                   <th className="px-4 py-2 border-b">3er Bim.</th>
//                   <th className="px-4 py-2 border-b">4to Bim.</th>
//                   <th className="px-4 py-2 border-b">Total Participaciones</th>
//                   <th className="px-4 py-2 border-b">% Participación</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {participaciones.map((p, index) => (
//                   <tr key={index} className="hover:bg-gray-50 text-center">
//                     <td className="px-4 py-2 border-b">{index + 1}</td>
//                     <td className="px-4 py-2 border-b">{p.alumno}</td>
//                     <td className="px-4 py-2 border-b">{p.nota_periodo1}</td>
//                     <td className="px-4 py-2 border-b">{p.nota_periodo2}</td>
//                     <td className="px-4 py-2 border-b">{p.nota_periodo3}</td>
//                     <td className="px-4 py-2 border-b">{p.nota_periodo4}</td>
//                     <td className="px-4 py-2 border-b">{p.total_participaciones}</td>
//                     <td className="px-4 py-2 border-b">{p.porcentajeTotal}%</td>

//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Tabla de Resumen por Alumno */}
//           <h3 className="text-lg font-semibold text-blue-600 mb-4">Resumen General de Participaciones</h3>
//           <div className="mb-4 text-sm font-semibold text-gray-700">
//             <p>Total de Participaciones anual:</p>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="min-w-full border border-gray-300 bg-white shadow text-sm">
//               <thead className="bg-gray-100">
//                 <tr className="text-center">
//                   <th className="px-4 py-2 border-b">#</th>
//                   <th className="px-4 py-2 border-b">Alumno</th>
//                   <th className="px-4 py-2 border-b">Total Participaciones</th>
//                   <th className="px-4 py-2 border-b">% Participación</th>
//                   <th className="px-4 py-2 border-b">acciones</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {participaciones.map((p, index) => (
//                   <tr key={index} className="hover:bg-gray-50 text-center">
//                     <td className="px-4 py-2 border-b">{index + 1}</td>
//                     <td className="px-4 py-2 border-b">{p.alumno}</td>
//                     <td className="px-4 py-2 border-b">{p.total_participaciones}</td>
//                     <td className="px-4 py-2 border-b">{p.porcentajeTotal}%</td>
//                     <td className="px-4 py-2 border-b">
//                       <button className="text-blue-600 hover:underline">Ver</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
             
//             {/* Gráfica de Participaciones por Bimestre */}
//             <h3 className="text-lg font-semibold text-blue-600 mt-8">Comparación de Participaciones por Bimestre</h3>
//             <div className="text-sm text-gray-700 mb-4">
//               Total de alumnos: <span className="font-semibold">{participaciones.length}</span>
//             </div>

//             <ResponsiveContainer width="100%" height={250}>
//               <BarChart data={participaciones}>
//                 <XAxis dataKey="alumno" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="periodo1" fill="#8884d8" name="1er Bim. %" />
//                 <Bar dataKey="periodo2" fill="#82ca9d" name="2do Bim. %" />
//                 <Bar dataKey="periodo3" fill="#ffc658" name="3er Bim. %" />
//                 <Bar dataKey="periodo4" fill="#ff8042" name="4to Bim. %" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default ParticipacionesMateriaProfesor;
