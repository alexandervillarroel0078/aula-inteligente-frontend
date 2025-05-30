// import React, { useState, useEffect } from 'react';
// import { obtenerMateriasAlumno } from '../../services/alumnoService';

// const MateriasEstudiante = ({ alumnoId }) => {
//   const [materias, setMaterias] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Obtiene las materias del alumno al montar el componente
//   useEffect(() => {
//     const fetchMaterias = async () => {
//       try {
//         const data = await obtenerMateriasAlumno(alumnoId);  // Llama al servicio para obtener las materias
//         setMaterias(data.materias_por_grado);  // Guardamos las materias por grado
//       } catch (error) {
//         console.error('Error al cargar las materias:', error);
//       } finally {
//         setLoading(false);  // Termina el estado de carga
//       }
//     };

//     fetchMaterias();
//   }, [alumnoId]);

//   // Mostrar loading mientras se obtiene la data
//   if (loading) return <p>Cargando materias...</p>;

//   // Si no se encontraron materias, mostrar mensaje
//   if (!materias) return <p>No se encontraron materias para este alumno.</p>;

//   return (
//     <div className="p-4">
//       <h3 className="text-xl font-bold text-gray-800 mb-4">Materias del Alumno</h3>

//       {/* Muestra las materias por grado */}
//       {Object.entries(materias).map(([grado, { grado_nombre, materias }]) => (
//         <div key={grado} className="mb-4">
//           <h4 className="text-lg font-semibold text-gray-700">{grado_nombre}</h4>
//           <ul className="list-disc pl-5">
//             {materias.map((materia, index) => (
//               <li key={index} className="text-gray-600">
//                 <strong>{materia.materia_nombre}</strong> ({materia.materia_codigo})
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MateriasEstudiante;


// // import React, { useEffect, useState } from 'react';
// // import { obtenerMateriasAlumno } from '../../services/alumnoService';
// // import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
// // import NotaMateriaEstudiante from './NotaMateriaEstudiante';
// // import AsistenciaMateriaEstudiante from './AsistenciaMateriaEstudiante';
// // import { useNavigate } from 'react-router-dom';

// // const MateriasEstudiante = ({ alumnoId }) => {
// //   const navigate = useNavigate();
// //   const [materias, setMaterias] = useState([]);
// //   const [cargando, setCargando] = useState(true);
// //   // Agrupar materias por turno
// //   const resumenTurnos = materias.reduce((acc, m) => {
// //     acc[m.turno] = (acc[m.turno] || 0) + 1;
// //     return acc;
// //   }, {});

// //   const datosTurnos = Object.entries(resumenTurnos).map(([turno, cantidad]) => ({
// //     turno,
// //     cantidad
// //   }));

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       setCargando(true);
// //       const data = await obtenerMateriasAlumno(alumnoId);
// //       setMaterias(data);
// //       setCargando(false);
// //     };
// //     if (alumnoId) fetchData();
// //   }, [alumnoId]);

// //   return (
// //     <div className="px-4 sm:px-6 lg:px-8">
// //       <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4">Materias Inscritas</h2>
      

// //       {cargando ? (
// //         <p className="text-gray-500">Cargando materias...</p>
// //       ) : materias.length === 0 ? (
// //         <p className="text-gray-500">No hay materias registradas.</p>
// //       ) : (
// //         <div className="overflow-x-auto">
// //           <table className="min-w-full border border-gray-300 bg-white shadow text-xs sm:text-sm">
// //             <thead className="bg-gray-100">
// //               <tr className="text-center">
// //                 <th className="px-4 py-2 border-b text-center">#</th>
// //                 <th className="px-4 py-2 border-b text-center">Nombre</th>
// //                 <th className="px-4 py-2 border-b text-center">Turno</th>
// //                 <th className="px-4 py-2 border-b text-center">Estado</th>

// //                 <th className="px-4 py-2 border-b">Acciones</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {materias.map((m, index) => (
// //                 <tr key={m.id} className="hover:bg-gray-50 text-center">
// //                   <td className="px-4 py-2 border-b">{index + 1}</td>
// //                   <td className="px-4 py-2 border-b">{m.materia_nombre}</td>
// //                   <td className="px-4 py-2 border-b">{m.turno}</td>
// //                   <td className="px-4 py-2 border-b">{m.estado}</td>
// //                   <td className="px-4 py-2 border-b space-x-1">
// //                     <button
// //                       onClick={() => navigate(`/alumno/${alumnoId}/materia/${m.id}/notas`)}
// //                       className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
// //                     >
// //                       Notas
// //                     </button>
// //                     <button
// //                       onClick={() => navigate(`/alumno/${alumnoId}/materia/${m.id}/asistencias`)}
// //                       className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded hover:bg-green-200"
// //                     >
// //                       Asistencias
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default MateriasEstudiante;
import React, { useEffect, useState } from "react";
import { obtenerMateriasAlumno } from "../../services/alumnoService";

const MateriasEstudiante = ({ alumnoId }) => {
  const [materiasPorGestion, setMateriasPorGestion] = useState({});
  const [gestionSeleccionada, setGestionSeleccionada] = useState("");
  const [nombreAlumno, setNombreAlumno] = useState("");

  useEffect(() => {
    const fetchMaterias = async () => {
      try {
        const data = await obtenerMateriasAlumno(alumnoId);
        setMateriasPorGestion(data.materias_por_gestion || {});
        setNombreAlumno(data.alumno_nombre || "");
      } catch (error) {
        console.error("Error al obtener las materias:", error);
      }
    };

    fetchMaterias();
  }, [alumnoId]);

  const gestionesDisponibles = Object.keys(materiasPorGestion);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Materias de {nombreAlumno}</h1>

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
                {gestion} ({materiasPorGestion[gestion].estado})
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
          const datosGestion = materiasPorGestion[gestion];
          return (
            <div key={gestion} className="mb-6 border p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-2">
                Gestión {gestion}{" "}
                <span className="text-sm text-gray-500">
                  ({datosGestion.estado})
                </span>
              </h2>

              {Object.keys(datosGestion.grados).map((grado) => {
                const datosGrado = datosGestion.grados[grado];
                return (
                  <div key={grado} className="mb-4">
                    <h3 className="font-semibold mb-2">{grado}</h3>
                    <ul className="list-disc pl-5">
                      {Array.isArray(datosGrado.materias) ? (
                        datosGrado.materias.map((materia, index) => (
                          <li key={index}>
                            {materia.materia_nombre} ({materia.materia_codigo})
                          </li>
                        ))
                      ) : (
                        <li className="italic text-gray-600">
                          {datosGrado.materias}
                        </li>
                      )}
                    </ul>
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default MateriasEstudiante;
