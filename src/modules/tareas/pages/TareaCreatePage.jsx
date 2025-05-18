// src/modules/tarea/pages/TareaCreatePage.jsx
import React, { useState } from 'react';

const TareaCreatePage = () => {
  const materias = ['Matemáticas', 'Ciencias', 'Lenguaje'];
  const cursos = ['1ro A', '2do B', '3ro C'];

  const [titulo, setTitulo] = useState('');
  const [materia, setMateria] = useState('');
  const [curso, setCurso] = useState('');
  const [fecha, setFecha] = useState('');

  const handleGuardar = (e) => {
    e.preventDefault();
    console.log({ titulo, materia, curso, fecha });
    alert('Tarea registrada (solo diseño)');
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Crear Nueva Tarea</h2>
      <form onSubmit={handleGuardar} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Título</label>
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)}
            className="w-full border px-4 py-2 rounded" required />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Materia</label>
          <select value={materia} onChange={(e) => setMateria(e.target.value)}
            className="w-full border px-4 py-2 rounded" required>
            <option value="">Selecciona una materia</option>
            {materias.map((m, i) => (
              <option key={i} value={m}>{m}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Curso</label>
          <select value={curso} onChange={(e) => setCurso(e.target.value)}
            className="w-full border px-4 py-2 rounded" required>
            <option value="">Selecciona un curso</option>
            {cursos.map((c, i) => (
              <option key={i} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Fecha de entrega</label>
          <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)}
            className="w-full border px-4 py-2 rounded" required />
        </div>

        <div className="pt-4">
          <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">
            Guardar Tarea
          </button>
        </div>
      </form>
    </div>
  );
};

export default TareaCreatePage;
