// // // // File: pages/PrediccionesDashboard.jsx
// // // import React, { useEffect, useState } from 'react';
// // // import { listarPredicciones } from '../../services/prediccionService';

// // // const PrediccionesDashboard = () => {
// // //   const [predicciones, setPredicciones] = useState([]);
// // //   const [cargando, setCargando] = useState(true);

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       try {
// // //         const data = await listarPredicciones();
// // //         setPredicciones(data);
// // //       } catch (error) {
// // //         console.error('Error al obtener predicciones:', error);
// // //       } finally {
// // //         setCargando(false);
// // //       }
// // //     };

// // //     fetchData();
// // //   }, []);

// // //   return (
// // //     <div className="container">
// // //       <h2 className="mt-4 mb-3">📊 Predicciones de Rendimiento Académico</h2>
// // //       {cargando ? (
// // //         <p>Cargando...</p>
// // //       ) : predicciones.length === 0 ? (
// // //         <p>No hay predicciones registradas.</p>
// // //       ) : (
// // //         <table className="table table-bordered table-hover">
// // //           <thead className="table-dark">
// // //             <tr>
// // //               <th>#</th>
// // //               <th>Alumno</th>
// // //               <th>Materia</th>
// // //               <th>Periodo</th>
// // //               <th>Nota Parcial</th>
// // //               <th>Asistencia</th>
// // //               <th>Participación</th>
// // //               <th>Predicción</th>
// // //               <th>Clasificación</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {predicciones.map((pred, index) => (
// // //               <tr key={pred.id}>
// // //                 <td>{index + 1}</td>
// // //                 <td>{pred.alumno}</td>
// // //                 <td>{pred.materia}</td>
// // //                 <td>{pred.periodo}</td>
// // //                 <td>{pred.nota_parcial}</td>
// // //                 <td>{pred.asistencia}</td>
// // //                 <td>{pred.participacion}</td>
// // //                 <td>{pred.rendimiento}</td>
// // //                 <td>
// // //                   <span
// // //                     className={`badge ${
// // //                       pred.clasificacion === 'Alto'
// // //                         ? 'bg-success'
// // //                         : pred.clasificacion === 'Medio'
// // //                         ? 'bg-warning text-dark'
// // //                         : 'bg-danger'
// // //                     }`}
// // //                   >
// // //                     {pred.clasificacion}
// // //                   </span>
// // //                 </td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default PrediccionesDashboard;
// // // pages/profesores/PrediccionesDashboard.jsx
// // import React, { useEffect, useState } from 'react';
// // import { listarPredicciones } from '../../services/prediccionService';

// // const PrediccionesDashboard = () => {
// //   const [predicciones, setPredicciones] = useState([]);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const cargarPredicciones = async () => {
// //       try {
// //         const data = await listarPredicciones();
// //         setPredicciones(data);
// //       } catch (error) {
// //         console.error('❌ Error al cargar predicciones:', error);
// //         setError('Error al cargar las predicciones.');
// //       }
// //     };

// //     cargarPredicciones();
// //   }, []);

// //   return (
// //     <div className="p-6">
// //       <h1 className="text-2xl font-bold mb-4">📊 Predicciones Generales</h1>
// //       {error && <p className="text-red-600 mb-4">{error}</p>}

// //       {predicciones.length === 0 ? (
// //         <p className="text-gray-500">No hay predicciones registradas aún.</p>
// //       ) : (
// //         <div className="overflow-x-auto">
// //           <table className="min-w-full table-auto border border-gray-300 shadow-sm">
// //             <thead className="bg-gray-100">
// //               <tr>
// //                 <th className="px-4 py-2 border">Alumno</th>
// //                 <th className="px-4 py-2 border">Materia</th>
// //                 <th className="px-4 py-2 border">Periodo</th>
// //                 <th className="px-4 py-2 border">Nota</th>
// //                 <th className="px-4 py-2 border">Asistencia</th>
// //                 <th className="px-4 py-2 border">Participación</th>
// //                 <th className="px-4 py-2 border">Rendimiento</th>
// //                 <th className="px-4 py-2 border">Clasificación</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {predicciones.map((pred) => (
// //                 <tr key={pred.id} className="text-center border-t">
// //                   <td className="px-4 py-2 border">{pred.alumno}</td>
// //                   <td className="px-4 py-2 border">{pred.materia}</td>
// //                   <td className="px-4 py-2 border">{pred.periodo}</td>
// //                   <td className="px-4 py-2 border">{pred.nota_parcial}</td>
// //                   <td className="px-4 py-2 border">{pred.asistencia}</td>
// //                   <td className="px-4 py-2 border">{pred.participacion}</td>
// //                   <td className="px-4 py-2 border">{pred.rendimiento_predicho.toFixed(2)}</td>
// //                   <td className={`px-4 py-2 border font-bold ${
// //                     pred.clasificacion === 'Alto'
// //                       ? 'text-green-600'
// //                       : pred.clasificacion === 'Medio'
// //                       ? 'text-yellow-600'
// //                       : 'text-red-600'
// //                   }`}>
// //                     {pred.clasificacion}
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

// // export default PrediccionesDashboard;
// // pages/profesores/PrediccionesDashboard.jsx
// import React, { useEffect, useState } from 'react';
// import { generarPrediccionesMultiplesMaterias } from '../../services/prediccionService';

// const PrediccionesDashboard = ({ profesorId }) => {
//   const [gradoId, setGradoId] = useState('');
//   const [periodoId, setPeriodoId] = useState('');
//   const [resumen, setResumen] = useState({});
//   const [mensaje, setMensaje] = useState('');
//   const [error, setError] = useState('');

//   const handleGenerar = async () => {
//     setMensaje('');
//     setError('');
//     try {
//       const datos = {
//         profesor_id: parseInt(profesorId),
//         grado_id: parseInt(gradoId),
//         periodo_id: parseInt(periodoId),
//       };
//       const response = await generarPrediccionesMultiplesMaterias(datos);
//       setResumen(response.resumen || {});
//       setMensaje(response.mensaje);
//     } catch (err) {
//       console.error(err);
//       setError('Error al generar predicciones.');
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-bold mb-4">📊 Predicciones por Materia</h2>

//       <div className="mb-4 flex flex-col md:flex-row gap-4">
//         <input
//           type="number"
//           placeholder="ID del Grado"
//           value={gradoId}
//           onChange={(e) => setGradoId(e.target.value)}
//           className="border p-2 rounded w-full md:w-1/3"
//         />
//         <input
//           type="number"
//           placeholder="ID del Periodo"
//           value={periodoId}
//           onChange={(e) => setPeriodoId(e.target.value)}
//           className="border p-2 rounded w-full md:w-1/3"
//         />
//         <button
//           onClick={handleGenerar}
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Generar predicciones
//         </button>
//       </div>

//       {mensaje && <p className="text-green-600 mb-4">{mensaje}</p>}
//       {error && <p className="text-red-600 mb-4">{error}</p>}

//       {Object.keys(resumen).length === 0 ? (
//         <p className="text-gray-500">No hay datos para mostrar.</p>
//       ) : (
//         Object.entries(resumen).map(([materia, alumnos]) => (
//           <div key={materia} className="mb-8">
//             <h3 className="text-lg font-semibold mb-2 text-indigo-600">{materia}</h3>
//             <div className="overflow-x-auto">
//               <table className="min-w-full table-auto border border-gray-300 shadow">
//                 <thead className="bg-gray-100">
//                   <tr>
//                     <th className="px-4 py-2 border">Alumno</th>
//                     <th className="px-4 py-2 border">Nota</th>
//                     <th className="px-4 py-2 border">Asistencia</th>
//                     <th className="px-4 py-2 border">Participación</th>
//                     <th className="px-4 py-2 border">Rendimiento</th>
//                     <th className="px-4 py-2 border">Clasificación</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {alumnos.map((pred, index) => (
//                     <tr key={index} className="text-center border-t">
//                       <td className="px-4 py-2 border">{pred.alumno}</td>
//                       <td className="px-4 py-2 border">{pred.nota}</td>
//                       <td className="px-4 py-2 border">{pred.asistencia}</td>
//                       <td className="px-4 py-2 border">{pred.participacion}</td>
//                       <td className="px-4 py-2 border">{pred.prediccion}</td>
//                       <td className={`px-4 py-2 border font-bold ${
//                         pred.clasificacion === 'Alto'
//                           ? 'text-green-600'
//                           : pred.clasificacion === 'Medio'
//                           ? 'text-yellow-600'
//                           : 'text-red-600'
//                       }`}>
//                         {pred.clasificacion}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default PrediccionesDashboard;
// src/pages/profesores/PrediccionesDashboard.jsx
import React, { useEffect, useState } from 'react';
import { listarGradosDelProfesor, generarPrediccionesMultiplesMaterias } from '../../services/prediccionService';
import {obtenerPeriodosActivos} from '../../services/profesorService';
import {listarPeriodos} from '../../services/periodoService';

const PrediccionesDashboard = ({ profesorId }) => {
  const [grados, setGrados] = useState([]);
  const [periodos, setPeriodos] = useState([]);
  const [gradoId, setGradoId] = useState('');
  const [periodoId, setPeriodoId] = useState('');
  const [resumen, setResumen] = useState({});
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const gradosData = await listarGradosDelProfesor(profesorId);
        setGrados(gradosData);
        const periodosData = await obtenerPeriodosActivos();
        setPeriodos(periodosData);
      } catch (err) {
        console.error('❌ Error cargando grados o periodos:', err);
        setError('No se pudo cargar la información.');
      }
    };
    cargarDatos();
  }, [profesorId]);

  const handleGenerar = async () => {
    setMensaje('');
    setError('');
    try {
      const datos = {
        profesor_id: parseInt(profesorId),
        grado_id: parseInt(gradoId),
        periodo_id: parseInt(periodoId),
      };
      const response = await generarPrediccionesMultiplesMaterias(datos);
      setResumen(response.resumen || {});
      setMensaje(response.mensaje);
    } catch (err) {
      console.error(err);
      setError('Error al generar predicciones.');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">📊 Generador de Predicciones por Materia</h2>

      {/* Selectores */}
      <div className="flex flex-wrap gap-4 mb-4">
        <select
          value={gradoId}
          onChange={(e) => setGradoId(e.target.value)}
          className="border p-2 rounded w-full md:w-1/3"
        >
          <option value="">Selecciona un grado</option>
          {grados.map((g) => (
            <option key={g.id} value={g.id}>{g.nombre}</option>
          ))}
        </select>

        <select
          value={periodoId}
          onChange={(e) => setPeriodoId(e.target.value)}
          className="border p-2 rounded w-full md:w-1/3"
        >
          <option value="">Selecciona un periodo</option>
          {periodos.map((p) => (
            <option key={p.id} value={p.id}>{p.nombre}</option>
          ))}
        </select>

        <button
          onClick={handleGenerar}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={!gradoId || !periodoId}
        >
          Generar predicciones
        </button>
      </div>

      {/* Mensajes */}
      {mensaje && <p className="text-green-600 mb-4">{mensaje}</p>}
      {error && <p className="text-red-600 mb-4">{error}</p>}

      {/* Resultados agrupados por materia */}
      {Object.keys(resumen).length === 0 ? (
        <p className="text-gray-500">No hay resultados aún.</p>
      ) : (
        Object.entries(resumen).map(([materia, alumnos]) => (
          <div key={materia} className="mb-8">
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">{materia}</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border border-gray-300 shadow">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 border">Alumno</th>
                    <th className="px-4 py-2 border">Nota</th>
                    <th className="px-4 py-2 border">Asistencia</th>
                    <th className="px-4 py-2 border">Participación</th>
                    <th className="px-4 py-2 border">Rendimiento</th>
                    <th className="px-4 py-2 border">Clasificación</th>
                  </tr>
                </thead>
                <tbody>
                  {alumnos.map((a, i) => (
                    <tr key={i} className="text-center border-t">
                      <td className="px-4 py-2 border">{a.alumno}</td>
                      <td className="px-4 py-2 border">{a.nota}</td>
                      <td className="px-4 py-2 border">{a.asistencia}</td>
                      <td className="px-4 py-2 border">{a.participacion}</td>
                      <td className="px-4 py-2 border">{a.prediccion}</td>
                      <td className={`px-4 py-2 border font-bold ${
                        a.clasificacion === 'Alto'
                          ? 'text-green-600'
                          : a.clasificacion === 'Medio'
                          ? 'text-yellow-600'
                          : 'text-red-600'
                      }`}>
                        {a.clasificacion}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PrediccionesDashboard;
