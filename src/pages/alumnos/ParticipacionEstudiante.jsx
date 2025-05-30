// import React, { useEffect, useState } from 'react';
// import { obtenerParticipacionAlumno } from '../../services/alumnoService';  // Importar el servicio
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';  // Importar componentes de recharts

// const ParticipacionEstudiante = ({ alumnoId }) => {
//   const [participaciones, setParticipaciones] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Cargar los datos de participaciones cuando el componente se monta
//   useEffect(() => {
//     const obtenerDatosParticipacion = async () => {
//       setLoading(true);
//       try {
//         const data = await obtenerParticipacionAlumno(alumnoId);  // Llamamos al servicio para obtener las participaciones
//         setParticipaciones(data.participacion_por_periodo);  // Guardamos los datos de participación
//       } catch (err) {
//         setError('Error al obtener las participaciones');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (alumnoId) {
//       obtenerDatosParticipacion();
//     }
//   }, [alumnoId]);

//   // Mostrar estado de carga o error
//   if (loading) return <div>Cargando...</div>;
//   if (error) return <div>{error}</div>;

//   // Preparamos los datos para la gráfica de barras
//   const dataForChart = Object.entries(participaciones).map(([periodoId, datos]) => ({
//     nombre_periodo: datos.nombre_periodo,
//     porcentaje_participacion: datos.porcentaje_participacion,
//   }));

//   return (
//     <div>
//       <h2>Listado de Participaciones</h2>

//       {/* Mostrar los datos de participaciones */}
//       {Object.keys(participaciones).length === 0 ? (
//         <p>No hay registros de participación.</p>
//       ) : (
//         <div>
//           <table className="min-w-full text-sm border bg-white shadow">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border px-4 py-2">#</th>
//                 <th className="border px-4 py-2">Grado</th>
//                 <th className="border px-4 py-2">Periodo</th>
//                 <th className="border px-4 py-2">Participaciones</th>
//                 <th className="border px-4 py-2">Faltas</th>
//                 <th className="border px-4 py-2">Puntaje</th>
//                 <th className="border px-4 py-2">Porcentaje de Participación</th>
//                 <th className="border px-4 py-2">Acciones</th> {/* Nueva columna para acciones */}
//               </tr>
//             </thead>
//             <tbody>
//               {Object.entries(participaciones).map(([periodoId, datos], index) => (
//                 <tr key={periodoId} className="hover:bg-gray-50">
//                   <td className="border px-4 py-2 text-center">{index + 1}</td>
//                   <td className="border px-4 py-2 text-center">{datos.nombre_grado}</td>
//                   <td className="border px-4 py-2 text-center">{datos.nombre_periodo}</td>
//                   <td className="border px-4 py-2 text-center">{datos.total_participaciones}</td>
//                   <td className="border px-4 py-2 text-center">{datos.total_faltas}</td>
//                   <td className="border px-4 py-2 text-center">{datos.puntaje}</td>
//                   <td className="border px-4 py-2 text-center">{datos.porcentaje_participacion}%</td>

//                   {/* Columna de acciones con el botón "Ver más" */}
//                   <td className="border px-4 py-2 text-center">
//                     <button
//                       onClick={() => alert(`Ver más detalles de la participación en ${datos.nombre_periodo}`)} // Aquí podrías redirigir a otra página
//                       className="text-blue-600 hover:text-blue-800 border-b-2 border-transparent hover:border-blue-600"
//                     >
//                       Ver
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>


//           {/* Gráfico de barras para porcentaje de participación por periodo */}
//           <h3 className="text-lg font-semibold mt-8">Gráfico de Participación por Periodo</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={dataForChart}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="nombre_periodo" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="porcentaje_participacion" fill="#8884d8" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ParticipacionEstudiante;


// // import React, { useEffect, useState } from 'react';
// // import { obtenerParticipacionesAlumno } from '../../services/alumnoService';

// // const ParticipacionEstudiante = ({ alumnoId }) => {
// //   const [participaciones, setParticipaciones] = useState([]);
// //   const [cargando, setCargando] = useState(true);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       setCargando(true);
// //       const data = await obtenerParticipacionesAlumno(alumnoId);
// //       setParticipaciones(data);
// //       setCargando(false);
// //     };
// //     if (alumnoId) fetchData();
// //   }, [alumnoId]);

// //   // Calcular promedio por materia
// //   const promedios = {};
// //   participaciones.forEach(p => {
// //     if (!promedios[p.materia_nombre]) {
// //       promedios[p.materia_nombre] = { suma: 0, cantidad: 0 };
// //     }
// //     promedios[p.materia_nombre].suma += p.puntaje;
// //     promedios[p.materia_nombre].cantidad++;
// //   });

// //   const promedioPorMateria = Object.keys(promedios).map((materia) => ({
// //     materia,
// //     promedio: (promedios[materia].suma / promedios[materia].cantidad).toFixed(2)
// //   }));

// //   return (
// //     <div className="px-4 sm:px-6 lg:px-8">
// //       <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4">Participación</h2>

// //       {!cargando && (
// //         <div className="mb-4">
// //           <p className="text-sm text-gray-600">
// //             Total de participaciones: <span className="font-semibold">{participaciones.length}</span>
// //           </p>
// //           <h4 className="mt-2 text-sm font-semibold text-gray-700">Promedio por Materia:</h4>
// //           <ul className="ml-4 list-disc text-sm text-gray-700">
// //             {promedioPorMateria.map((m, i) => (
// //               <li key={i}>{m.materia}: <strong>{m.promedio}</strong></li>
// //             ))}
// //           </ul>
// //         </div>
// //       )}
// //       {cargando ? (
// //         <p className="text-gray-500">Cargando participaciones...</p>
// //       ) : participaciones.length === 0 ? (
// //         <p className="text-gray-500">No hay participaciones registradas.</p>
// //       ) : (
// //         <div className="overflow-x-auto">
// //           <table className="min-w-full border border-gray-300 bg-white shadow text-xs sm:text-sm">
// //             <thead className="bg-gray-100">
// //               <tr className="text-center">
// //                 <th className="px-4 py-2 border-b">#</th>
// //                 <th className="px-4 py-2 border-b">Materia</th>
// //                 <th className="px-4 py-2 border-b">Fecha</th>
// //                 <th className="px-4 py-2 border-b">periodo</th>
// //                 <th className="px-4 py-2 border-b">Puntaje</th>
// //                 <th className="px-4 py-2 border-b">Acciones</th>
// //                 {/* Descripción si tu backend lo permite */}
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {participaciones.map((p, index) => (
// //                 <tr key={p.id} className="hover:bg-gray-50 text-center">
// //                   <td className="px-4 py-2 border-b">{index + 1}</td>
// //                   <td className="px-4 py-2 border-b">{p.materia_nombre}</td>
// //                   <td className="px-4 py-2 border-b">
// //                     {new Date(p.fecha).toLocaleDateString("es-BO", {
// //                       weekday: "short",
// //                       year: "numeric",
// //                       month: "short",
// //                       day: "2-digit"
// //                     })}
// //                   </td>
// //                   <td className="px-4 py-2 border-b">{p.periodo_nombre}</td>
// //                   <td className="px-4 py-2 border-b">{p.puntaje}</td>
// //                   <td className="px-4 py-2 border-b">
// //                   <button
// //                     className="text-blue-600 hover:underline focus:outline-none"
// //                   >
// //                     Ver
// //                   </button>
// //                 </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default ParticipacionEstudiante;
import React, { useEffect, useState } from "react";
import { obtenerParticipacionAlumno } from "../../services/alumnoService";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const ParticipacionEstudiante = ({ alumnoId }) => {
  const [participacionesPorGestion, setParticipacionesPorGestion] = useState({});
  const [gestionSeleccionada, setGestionSeleccionada] = useState("");
  const [nombreAlumno, setNombreAlumno] = useState("");

  useEffect(() => {
    const fetchParticipaciones = async () => {
      try {
        const data = await obtenerParticipacionAlumno(alumnoId);
        setParticipacionesPorGestion(data.participacion_por_gestion || {});
        setNombreAlumno(data.alumno_nombre || "");
      } catch (error) {
        console.error("Error al obtener participaciones:", error);
      }
    };

    fetchParticipaciones();
  }, [alumnoId]);

  const gestionesDisponibles = Object.keys(participacionesPorGestion);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Participaciones de {nombreAlumno}
      </h1>

      {gestionesDisponibles.length > 0 && (
        <div className="mb-4">
          <label className="font-semibold mr-2">Seleccionar gestión:</label>
          <select
            className="border px-2 py-1 rounded"
            value={gestionSeleccionada}
            onChange={(e) => setGestionSeleccionada(e.target.value)}
          >
            <option value="">-- Todas --</option>
            {gestionesDisponibles.map((gestion) => (
              <option key={gestion} value={gestion}>
                {gestion} ({participacionesPorGestion[gestion].estado})
              </option>
            ))}
          </select>
        </div>
      )}

      {gestionesDisponibles
        .filter(
          (gestion) =>
            gestionSeleccionada === "" || gestion === gestionSeleccionada
        )
        .map((gestion) => {
          const datos = participacionesPorGestion[gestion];
          const graficaData = datos.participaciones.map((p) => ({
            nombre: p.nombre_periodo,
            puntaje: p.puntaje,
          }));

          return (
            <div key={gestion} className="mb-6 border p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-2">
                Gestión {gestion}{" "}
                <span className="text-sm text-gray-500">({datos.estado})</span>
                <span className="text-blue-500 underline cursor-pointer">Ver</span>
              </h2>
              {datos.participaciones.length > 0 ? (
                <>
                  <ul className="list-disc pl-5 mb-4">
                    {datos.participaciones.map((p, idx) => (
                      <li key={idx} className="mb-2">
                        <strong>{p.nombre_grado}</strong> – {p.nombre_periodo}:<br />
                        🎤 Participaciones: {p.total_participaciones} / {p.total_clases} |
                        ❌ Faltas: {p.total_faltas} |
                        🎯 Puntaje: {p.puntaje} | 📊 Porcentaje: {p.porcentaje_participacion}%
                      </li>
                    ))}
                  </ul>

                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={graficaData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="nombre" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="puntaje" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </>
              ) : (
                <p className="text-gray-600 italic">
                  Sin participaciones registradas en esta gestión.
                </p>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default ParticipacionEstudiante;
