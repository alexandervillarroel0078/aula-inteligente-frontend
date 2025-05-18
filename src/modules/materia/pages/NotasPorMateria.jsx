// src/modules/materia/pages/NotasPorMateria.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';

const alumnos = [
  { id: 1, nombre: 'Juan Pérez' },
  { id: 2, nombre: 'María López' },
  { id: 3, nombre: 'Carlos García' },
];

Modal.setAppElement('#root'); // Evita errores con accesibilidad

const NotasPorMateria = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState(null);
  const [notas, setNotas] = useState({
    parcial1: '', parcial2: '', participacion: '', practicos: '', asistencia: '', examen: '', proyecto: '',
  });

  const abrirModal = (alumno) => {
    setAlumnoSeleccionado(alumno);
    setModalIsOpen(true);
  };

  const cerrarModal = () => {
    setModalIsOpen(false);
    setNotas({ parcial1: '', parcial2: '', participacion: '', practicos: '', asistencia: '', examen: '', proyecto: '' });
  };

  const manejarCambio = (e) => {
    setNotas({ ...notas, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">📄 Registro de Notas - Matemáticas</h2>

      <table className="min-w-full border border-gray-300 text-sm">
        {/* CABECERA */}
        <thead className="bg-gray-100 text-center">
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2 text-left">Estudiante</th>
            <th className="px-2 py-2">1er Parcial<br /><span className="text-xs">(20%)</span></th>
            <th className="px-2 py-2">2do Parcial<br /><span className="text-xs">(20%)</span></th>
            <th className="px-2 py-2">Participación<br /><span className="text-xs">(15%)</span></th>
            <th className="px-2 py-2">Prácticos<br /><span className="text-xs">(15%)</span></th>
            <th className="px-2 py-2">Asistencia<br /><span className="text-xs">(10%)</span></th>
            <th className="px-2 py-2">Examen Final<br /><span className="text-xs">(10%)</span></th>
            <th className="px-2 py-2">Proyecto<br /><span className="text-xs">(10%)</span></th>
            <th className="px-2 py-2">Total<br /><span className="text-xs">(100%)</span></th>
            <th className="px-2 py-2">Acciones</th>
          </tr>
        </thead>

        {/* CUERPO */}
        <tbody className="text-center">
          {[
            {
              nombre: 'Juan Pérez',
              notas: [15, 18, 13, 12, 9, 8, 9],
              total: 84,
            },
            {
              nombre: 'María López',
              notas: [17, 16, 14, 13, 10, 10, 9],
              total: 89,
            },
            {
              nombre: 'Carlos García',
              notas: [14, 15, 12, 10, 8, 7, 7],
              total: 73,
            },
          ].map((alumno, index) => (
            <tr key={index} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2 text-left">{alumno.nombre}</td>
              {alumno.notas.map((n, i) => (
                <td key={i} className="px-2 py-2">{n}</td>
              ))}
              <td className="px-2 py-2 font-semibold">{alumno.total}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => abrirModal(alumno)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                >
                  Ver / Editar notas
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={cerrarModal}
        contentLabel="Editar Notas"
        className="max-w-lg mx-auto bg-white p-6 rounded shadow mt-24 outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-start"
      >
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Editar Notas - {alumnoSeleccionado?.nombre}</h3>

        <div className="grid grid-cols-2 gap-4">
          {['parcial1', 'parcial2', 'participacion', 'practicos', 'asistencia', 'examen', 'proyecto'].map((campo) => (
            <div key={campo}>
              <label className="block text-sm text-gray-700 capitalize mb-1">{campo}</label>
              <input
                type="number"
                name={campo}
                value={notas[campo]}
                onChange={manejarCambio}
                className="border px-2 py-1 rounded w-full"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-6 gap-2">
          <button onClick={cerrarModal} className="text-gray-600 hover:text-black px-4 py-2">Cancelar</button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">Guardar</button>
        </div>
      </Modal>


    </div>
  );
};

export default NotasPorMateria;
