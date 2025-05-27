import React, { useState, useEffect } from "react";
import { obtenerAsistenciasAlumno } from "../../services/alumnoService";  // Asegúrate de importar el servicio
import { FaEye } from "react-icons/fa";  // Importar los íconos si es necesario
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";  // Importar Recharts

const AsistenciasEstudiante = ({ alumnoId }) => {
  const [asistencias, setAsistencias] = useState([]);  // Guardamos las asistencias obtenidas
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Cargar las asistencias al inicio cuando se monta el componente
  useEffect(() => {
    const obtenerAsistencias = async () => {
      setLoading(true);
      try {
        const data = await obtenerAsistenciasAlumno(alumnoId);  // Llamamos a la función para obtener asistencias
        setAsistencias(data.asistencia_por_periodo);  // Guardamos los datos de asistencias
      } catch (err) {
        setError('Error al obtener las asistencias');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (alumnoId) {
      obtenerAsistencias();
    }
  }, [alumnoId]);

  // Mostrar estado de carga o error
  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  // Preparar datos para la gráfica
  const asistenciaData = Object.entries(asistencias).map(([periodoId, periodoData]) => ({
    nombre_periodo: periodoData.nombre_periodo,
    puntaje: periodoData.puntaje,
    total_asistencias: periodoData.total_asistencias,
    total_faltas: periodoData.total_faltas,
    porcentaje_asistencia: ((periodoData.total_asistencias / 40) * 100).toFixed(2),

  }));

  return (
    <div>
      <h2>Listado de Asistencias</h2>

      {/* Mostrar los datos de las asistencias */}
      {Object.keys(asistencias).length === 0 ? (
        <p>No hay registros de asistencias.</p>
      ) : (
        <>
          {/* Tabla de asistencias */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border bg-white shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2">#</th>
                  <th className="border px-4 py-2">Grado</th>
                  <th className="border px-4 py-2">Periodo</th>
                  <th className="border px-4 py-2">Puntaje</th>
                  <th className="border px-4 py-2">Total Asistencias</th>
                  <th className="border px-4 py-2">Total Clases</th>
                  <th className="border px-4 py-2">Total Faltas</th>
                  {/* <th className="border px-4 py-2">Porcentaje de Asistencia</th>   */}
                  <th className="border px-4 py-2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(asistencias).map(([periodoId, periodoData], index) => (
                  <tr key={periodoId} className="hover:bg-gray-50">
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">{periodoData.nombre_grado}</td>
                    <td className="border px-4 py-2">{periodoData.nombre_periodo}</td>
                    <td className="border px-4 py-2">{periodoData.puntaje}</td>
                    <td className="border px-4 py-2">{periodoData.total_asistencias}</td>
                    <td className="border px-4 py-2">{periodoData.total_clases}</td>
                    <td className="border px-4 py-2">{periodoData.total_faltas}</td>
                    {/* <td className="border px-4 py-2">{periodoData.porcentaje_asistencia}%</td> */}
                    <td className="px-4 py-2 border-b text-center">
                      <button className="text-blue-600 hover:text-blue-800 border-b-2 border-transparent hover:border-blue-600">
                        <FaEye /> Ver
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Gráfica de barras para mostrar la asistencia por periodo */}
          <h3 className="text-lg font-semibold mt-6">Gráfica de Asistencia por Periodo</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={asistenciaData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="nombre_periodo" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="total_asistencias" fill="#22c55e" />
              <Bar dataKey="total_faltas" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
};

export default AsistenciasEstudiante;


// import React, { useEffect, useState } from "react";
// import { obtenerAsistenciasAlumno } from "../../services/alumnoService";  // Importar el servicio
// import { FaEye, FaEdit, FaTrash } from "react-icons/fa";  // Importar los íconos si es necesario

// const AsistenciasEstudiante = ({ alumnoId, gradoId }) => {  // Asegúrate de recibir 'gradoId' como prop
//   const [asistencias, setAsistencias] = useState([]);  // Guardamos las asistencias obtenidas
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Cargar las asistencias al inicio cuando se monta el componente
//   useEffect(() => {
//     const obtenerAsistencias = async () => {
//       setLoading(true);
//       try {
//         if (alumnoId && gradoId) {  // Verificar que 'gradoId' esté presente
//           const data = await obtenerAsistenciasAlumno(alumnoId, gradoId);  // Llamamos a la función para obtener asistencias
//           setAsistencias(data.asistencia_por_periodo);  // Guardamos los datos de asistencias
//         } else {
//           setError("El grado no es válido.");
//         }
//       } catch (err) {
//         setError('Error al obtener las asistencias');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (alumnoId && gradoId) {
//       obtenerAsistencias();
//     }
//   }, [alumnoId, gradoId]);  // Dependencias para reejecutar si 'alumnoId' o 'gradoId' cambian

//   // Mostrar estado de carga o error
//   if (loading) return <div>Cargando...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <h2>Listado de Asistencias</h2>

//       {/* Mostrar los datos de las asistencias */}
//       {asistencias.length === 0 ? (
//         <p>No hay registros.</p>
//       ) : (
//         <table className="min-w-full text-sm border bg-white shadow">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border px-4 py-2">#</th>
//               <th className="border px-4 py-2">Nombre</th>
//               <th className="border px-4 py-2">Grado</th>
//               <th className="border px-4 py-2">Materia</th>
//               <th className="border px-4 py-2">Periodo</th>
//               <th className="border px-4 py-2">Tipo</th>
//               <th className="border px-4 py-2">Acciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {asistencias.map((item, index) => (
//               <tr key={item.id} className="hover:bg-gray-50">
//                 <td className="border px-4 py-2">{index + 1}</td>
//                 <td className="border px-4 py-2">{item.alumno_nombre}</td>
//                 <td className="border px-4 py-2">{item.grado_nombre}</td>
//                 <td className="border px-4 py-2">{item.materia_nombre}</td>
//                 <td className="border px-4 py-2">{item.periodo_nombre}</td>
//                 <td className="border px-4 py-2">{item.tipo}</td>
//                 <td className="px-4 py-2 border-b text-center">
//                   <button className="text-blue-600 hover:text-blue-800 border-b-2 border-transparent hover:border-blue-600">
//                     <FaEye /> Ver
//                   </button>
//                   <button className="text-yellow-600 hover:text-yellow-800 ml-2">
//                     <FaEdit /> Editar
//                   </button>
//                   <button className="text-red-600 hover:text-red-800 ml-2">
//                     <FaTrash /> Eliminar
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AsistenciasEstudiante;
