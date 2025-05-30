import React, { useEffect, useState } from "react";
import { obtenerAsistenciasAlumno } from "../../services/alumnoService";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const AsistenciasEstudiante = ({ alumnoId }) => {
  const [asistenciasPorGestion, setAsistenciasPorGestion] = useState({});
  const [gestionSeleccionada, setGestionSeleccionada] = useState("");
  const [nombreAlumno, setNombreAlumno] = useState("");

  useEffect(() => {
    const fetchAsistencias = async () => {
      try {
        const data = await obtenerAsistenciasAlumno(alumnoId);
        setAsistenciasPorGestion(data.asistencia_por_gestion || {});
        setNombreAlumno(data.alumno_nombre || "");
      } catch (error) {
        console.error("Error al obtener asistencias:", error);
      }
    };

    fetchAsistencias();
  }, [alumnoId]);

  const gestionesDisponibles = Object.keys(asistenciasPorGestion);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Asistencias :  {nombreAlumno}</h1>

      {/* Selector de gestión */}
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
                {gestion} ({asistenciasPorGestion[gestion].estado})
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Mostrar asistencias por gestión */}
      {gestionesDisponibles
        .filter(
          (gestion) =>
            gestionSeleccionada === "" || gestion === gestionSeleccionada
        )
        .map((gestion) => {
          const datos = asistenciasPorGestion[gestion];
          return (
            <div key={gestion} className="mb-6 border p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-2">
                Gestión {gestion}{" "}
                <span className="text-sm text-gray-500">({datos.estado})</span>
                <span className="text-blue-500 underline cursor-pointer">Ver</span>
              </h2>

              {datos.asistencias.length > 0 ? (
                <>
                  <ul className="list-disc pl-5 mb-4">
                    {datos.asistencias.map((asistencia, index) => (
                      <li key={index} className="mb-2">
                        <strong>{asistencia.nombre_grado}</strong> –{" "}
                        {asistencia.nombre_periodo}:<br />
                        ✅ Asistencias: {asistencia.total_asistencias} /{" "}
                        {asistencia.total_clases} clases |
                        ❌ Faltas: {asistencia.total_faltas} | 🎯 Puntaje:{" "}
                        {asistencia.puntaje}%
                      </li>
                    ))}
                  </ul>

                  {/* Gráfica de puntaje de asistencia */}
                  <LineChart
                    width={500}
                    height={250}
                    data={datos.asistencias.map((a) => ({
                      name: a.nombre_periodo,
                      puntaje: a.puntaje,
                    }))}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 40]} />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="puntaje"
                      stroke="#82ca9d"
                      name="Asistencia (%)"
                    />
                  </LineChart>
                </>
              ) : (
                <p className="text-gray-600 italic">
                  Sin asistencias registradas en esta gestión.
                </p>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default AsistenciasEstudiante;
