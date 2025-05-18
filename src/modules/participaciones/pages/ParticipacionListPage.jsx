// src/modules/participaciones/pages/ParticipacionListPage.jsx
import React, { useState } from 'react';

const alumnos = [
  { id: 1, nombre: 'Juan Pérez', curso: '1ro A' },
  { id: 2, nombre: 'María López', curso: '2do B' },
];

const ParticipacionListPage = () => {
  const [fecha, setFecha] = useState('');
  const [participaciones, setParticipaciones] = useState(
    alumnos.map(a => ({ ...a, puntaje: '' }))
  );

  const handlePuntajeChange = (id, value) => {
    setParticipaciones(prev =>
      prev.map(a =>
        a.id === id ? { ...a, puntaje: value } : a
      )
    );
  };

  const handleGuardar = () => {
    console.log('Participaciones registradas para', fecha, participaciones);
    alert('Participación guardada (solo diseño)');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Registro de Participación</h1>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Fecha:</label>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          className="border px-4 py-2 rounded"
        />
      </div>

      <div className="overflow-x-auto bg-white p-4 rounded shadow border border-gray-300">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Alumno</th>
              <th className="px-4 py-2 text-left">Curso</th>
              <th className="px-4 py-2 text-left">Puntaje</th>
            </tr>
          </thead>
          <tbody>
            {participaciones.map((a, i) => (
              <tr key={a.id} className="border-t hover:bg-gray-100">
                <td className="px-4 py-2">{i + 1}</td>
                <td className="px-4 py-2">{a.nombre}</td>
                <td className="px-4 py-2">{a.curso}</td>
                <td className="px-4 py-2">
                  <input
                    type="number"
                    value={a.puntaje}
                    onChange={(e) => handlePuntajeChange(a.id, e.target.value)}
                    className="border px-3 py-1 rounded w-24"
                    min="0"
                    max="100"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pt-4">
        <button onClick={handleGuardar} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">
          Guardar Participación
        </button>
      </div>
    </div>
  );
};

export default ParticipacionListPage;
