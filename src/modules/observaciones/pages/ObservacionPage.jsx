// src/modules/observaciones/pages/ObservacionPage.jsx
import React, { useState } from 'react';

const alumnos = [
  { id: 1, nombre: 'Juan Pérez', curso: '1ro A' },
  { id: 2, nombre: 'María López', curso: '2do B' },
];

const ObservacionPage = () => {
  const [fecha, setFecha] = useState('');
  const [comentarios, setComentarios] = useState(
    alumnos.map(a => ({ ...a, observacion: '' }))
  );

  const handleChange = (id, value) => {
    setComentarios(prev =>
      prev.map(a => (a.id === id ? { ...a, observacion: value } : a))
    );
  };

  const handleGuardar = () => {
    console.log('Observaciones para', fecha, comentarios);
    alert('Observaciones registradas (solo diseño)');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Observaciones del Docente</h1>

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
              <th className="px-4 py-2 text-left">Observación</th>
            </tr>
          </thead>
          <tbody>
            {comentarios.map((a, i) => (
              <tr key={a.id} className="border-t hover:bg-gray-100">
                <td className="px-4 py-2">{i + 1}</td>
                <td className="px-4 py-2">{a.nombre}</td>
                <td className="px-4 py-2">{a.curso}</td>
                <td className="px-4 py-2">
                  <textarea
                    value={a.observacion}
                    onChange={(e) => handleChange(a.id, e.target.value)}
                    className="w-full border px-2 py-1 rounded"
                    rows={2}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pt-4">
        <button onClick={handleGuardar} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">
          Guardar Observaciones
        </button>
      </div>
    </div>
  );
};

export default ObservacionPage;
