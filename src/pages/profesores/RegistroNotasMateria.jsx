import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegistroNotasMateria = () => {
  const navigate = useNavigate();

  const handleVolver = () => {
    navigate('/panel/profesor/notas-materia'); // Redirige a la página de NotasMateriaProfesor
  };


  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4">Registrar Notas para la Materia</h2>

      <form className="space-y-4">
        {/* Selector de Alumno */}
        <div className="flex flex-col">
          <label htmlFor="alumno" className="text-sm font-medium text-gray-700">Seleccionar Alumno</label>
          <select
            id="alumno"
            className="p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Selecciona un Alumno</option>
            {/* Aquí deberían aparecer los alumnos */}
            <option value="1">Luis Mendoza Pérez</option>
            <option value="2">Carla Romero García</option>
            {/* Agregar más opciones */}
          </select>
        </div>

        {/* Selector de Periodo */}
        <div className="flex flex-col">
          <label htmlFor="periodo" className="text-sm font-medium text-gray-700">Seleccionar Periodo</label>
          <select
            id="periodo"
            className="p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Selecciona un Periodo</option>
            {/* Aquí deberían aparecer los periodos */}
            <option value="1">1er Bimestre 2022</option>
            <option value="2">2do Bimestre 2022</option>
            {/* Agregar más opciones */}
          </select>
        </div>

        {/* Selector de Grado */}
        <div className="flex flex-col">
          <label htmlFor="grado" className="text-sm font-medium text-gray-700">Seleccionar Grado</label>
          <select
            id="grado"
            className="p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Selecciona un Grado</option>
            {/* Aquí deberían aparecer los grados */}
            <option value="1">1ro A</option>
            <option value="2">2do B</option>
            {/* Agregar más opciones */}
          </select>
        </div>

        {/* Notas y Observaciones */}
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="flex flex-col sm:w-1/3">
            <label htmlFor="notaParcial" className="text-sm font-medium text-gray-700">Nota Parcial</label>
            <input
              type="number"
              id="notaParcial"
              className="p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="flex flex-col sm:w-1/3">
            <label htmlFor="notaParticipacion" className="text-sm font-medium text-gray-700">Nota Participación</label>
            <input
              type="number"
              id="notaParticipacion"
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex flex-col sm:w-1/3">
            <label htmlFor="notaAsistencia" className="text-sm font-medium text-gray-700">Nota Asistencia</label>
            <input
              type="number"
              id="notaAsistencia"
              className="p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="observaciones" className="text-sm font-medium text-gray-700">Observaciones</label>
          <textarea
            id="observaciones"
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Registrar Nota
          </button>
          <button
            onClick={() => navigate(-1)} // Navega hacia la página anterior
            className="mb-4 px-4 py-2 text-sm bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            ⬅️ Volver
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistroNotasMateria;
