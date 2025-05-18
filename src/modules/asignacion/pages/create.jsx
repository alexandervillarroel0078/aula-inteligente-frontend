// src/modules/asignacion/pages/AsignarMateriaPage.jsx
import React, { useState } from 'react';

const AsignarMateriaPage = () => {
  const profesores = ['Luis Mendoza', 'Carla Romero', 'Mario Ortega'];
  const materias = ['Matemáticas', 'Lenguaje', 'Historia'];
  const grados = ['1ro A', '2do B', '3ro C'];
  const turnos = ['Mañana', 'Tarde', 'Noche'];

  const [docenteSeleccionado, setDocenteSeleccionado] = useState('');
  const [materiaSeleccionada, setMateriaSeleccionada] = useState('');
  const [gradoSeleccionado, setGradoSeleccionado] = useState('');
  const [turnoSeleccionado, setTurnoSeleccionado] = useState('');
  const [asignaciones, setAsignaciones] = useState([]);

  const handleAgregar = () => {
    if (docenteSeleccionado && materiaSeleccionada && gradoSeleccionado && turnoSeleccionado) {
      const nueva = {
        id: asignaciones.length + 1,
        profesor: docenteSeleccionado,
        materia: materiaSeleccionada,
        grado: gradoSeleccionado,
        turno: turnoSeleccionado,
      };
      setAsignaciones([...asignaciones, nueva]);
      setMateriaSeleccionada('');
      setGradoSeleccionado('');
      setTurnoSeleccionado('');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Asignar Materias a un Docente</h1>

      <div className="bg-white p-4 rounded shadow border border-gray-300 mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <select
            value={docenteSeleccionado}
            onChange={(e) => setDocenteSeleccionado(e.target.value)}
            className="border px-3 py-2 rounded w-full sm:w-1/3"
          >
            <option value="">Seleccionar docente</option>
            {profesores.map((d, i) => (
              <option key={i} value={d}>{d}</option>
            ))}
          </select>
        </div>

        {docenteSeleccionado && (
          <>
            <h2 className="text-lg font-semibold mt-4">Asignar nueva materia</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <select
                value={materiaSeleccionada}
                onChange={(e) => setMateriaSeleccionada(e.target.value)}
                className="border px-3 py-2 rounded"
              >
                <option value="">Materia</option>
                {materias.map((m, i) => (
                  <option key={i} value={m}>{m}</option>
                ))}
              </select>

              <select
                value={gradoSeleccionado}
                onChange={(e) => setGradoSeleccionado(e.target.value)}
                className="border px-3 py-2 rounded"
              >
                <option value="">Curso/Grado</option>
                {grados.map((g, i) => (
                  <option key={i} value={g}>{g}</option>
                ))}
              </select>

              <select
                value={turnoSeleccionado}
                onChange={(e) => setTurnoSeleccionado(e.target.value)}
                className="border px-3 py-2 rounded"
              >
                <option value="">Turno</option>
                {turnos.map((t, i) => (
                  <option key={i} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div className="text-right mt-4">
              <button
                onClick={handleAgregar}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
              >
                Agregar asignación
              </button>
            </div>
          </>
        )}
      </div>

      {docenteSeleccionado && (
        <div className="overflow-x-auto bg-white p-4 rounded shadow border border-gray-300">
          <h3 className="text-lg font-bold mb-3">Materias asignadas a {docenteSeleccionado}</h3>
          <table className="min-w-full text-sm">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Materia</th>
                <th className="px-4 py-2 text-left">Curso</th>
                <th className="px-4 py-2 text-left">Turno</th>
                <th className="px-4 py-2 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {asignaciones
                .filter(a => a.profesor === docenteSeleccionado)
                .map((a, i) => (
                  <tr key={a.id} className="border-t hover:bg-gray-100">
                    <td className="px-4 py-2">{i + 1}</td>
                    <td className="px-4 py-2">{a.materia}</td>
                    <td className="px-4 py-2">{a.grado}</td>
                    <td className="px-4 py-2">{a.turno}</td>
                    <td className="px-4 py-2 space-x-2">
                      <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Editar</button>
                      <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Eliminar</button>
                    </td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AsignarMateriaPage;
