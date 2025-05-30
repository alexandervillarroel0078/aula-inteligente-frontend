
import React, { useEffect, useState } from "react";
import { obtenerNotasAlumno } from "../../services/alumnoService"; // Ajusta tu import
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const NotasEstudiante = ({ alumnoId }) => {
  const [notasPorGestion, setNotasPorGestion] = useState({});
  const [gestionSeleccionada, setGestionSeleccionada] = useState("");

  useEffect(() => {
    const fetchNotas = async () => {
      try {
        const data = await obtenerNotasAlumno(alumnoId);
        setNotasPorGestion(data);
      } catch (error) {
        console.error("Error al obtener notas del alumno:", error);
      }
    };

    fetchNotas();
  }, [alumnoId]);

  const gestionesDisponibles = Object.keys(notasPorGestion);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Notas Parciales del Estudiante</h1>

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
                {gestion} ({notasPorGestion[gestion].estado})
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Mostrar notas por gestión */}
      {gestionesDisponibles
  .filter(
    (gestion) =>
      gestionSeleccionada === "" || gestion === gestionSeleccionada
  )
  .map((gestion) => {
    const datos = notasPorGestion[gestion];

    return (
      <div key={gestion} className="mb-6 border p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-2">
          Gestión {gestion}{" "}
          <span className="text-sm text-gray-500">({datos.estado})</span>
        </h2>

        {datos.notas.length > 0 ? (
          <>
            {/* Lista de notas */}
            <ul className="list-disc pl-5 mb-4">
              {datos.notas.map((nota, index) => (
                <li key={index} className="mb-1">
                  <strong>{nota.materia}:</strong> {nota.nota} (
                  {nota.tipo_parcial}, {nota.periodo})
                </li>
              ))}
            </ul>

            {/* Gráfica de notas */}
            <LineChart
              width={500}
              height={250}
              data={datos.notas.map((nota) => ({
                name: nota.periodo,
                nota: nota.nota,
              }))}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="nota" stroke="#8884d8" />
            </LineChart>
          </>
        ) : (
          <p className="text-gray-600 italic">Sin notas registradas.</p>
        )}
      </div>
    );
  })}

    </div>
  );
};

export default NotasEstudiante;
