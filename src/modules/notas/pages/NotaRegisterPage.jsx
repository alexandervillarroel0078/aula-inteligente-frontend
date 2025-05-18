// src/modules/notas/pages/NotaRegisterPage.jsx
import React, { useState } from 'react';

const alumnos = ['Juan Pérez', 'María López'];
const materias = ['Matemáticas', 'Lenguaje'];
const periodos = ['1er Trimestre', '2do Trimestre'];
const cursos = ['1ro A', '2do B'];

const NotaRegisterPage = () => {
  const [alumno, setAlumno] = useState('');
  const [materia, setMateria] = useState('');
  const [curso, setCurso] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [nota, setNota] = useState('');

  const handleGuardar = (e) => {
    e.preventDefault();
    console.log({ alumno, materia, curso, periodo, nota });
    alert('Nota registrada (solo diseño)');
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Registrar Nota</h2>
      <form onSubmit={handleGuardar} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Alumno</label>
          <select value={alumno} onChange={(e) => setAlumno(e.target.value)} className="w-full border px-4 py-2 rounded" required>
            <option value="">Selecciona un alumno</option>
            {alumnos.map((a, i) => <option key={i} value={a}>{a}</option>)}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold">Materia</label>
            <select value={materia} onChange={(e) => setMateria(e.target.value)} className="w-full border px-4 py-2 rounded" required>
              <option value="">Selecciona</option>
              {materias.map((m, i) => <option key={i} value={m}>{m}</option>)}
            </select>
          </div>
          <div>
            <label className="block mb-1 font-semibold">Curso</label>
            <select value={curso} onChange={(e) => setCurso(e.target.value)} className="w-full border px-4 py-2 rounded" required>
              <option value="">Selecciona</option>
              {cursos.map((c, i) => <option key={i} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Período</label>
          <select value={periodo} onChange={(e) => setPeriodo(e.target.value)} className="w-full border px-4 py-2 rounded" required>
            <option value="">Selecciona</option>
            {periodos.map((p, i) => <option key={i} value={p}>{p}</option>)}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Nota</label>
          <input type="number" value={nota} onChange={(e) => setNota(e.target.value)} className="w-full border px-4 py-2 rounded" required />
        </div>

        <div className="pt-4">
          <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">
            Guardar Nota
          </button>
        </div>
      </form>
    </div>
  );
};

export default NotaRegisterPage;
