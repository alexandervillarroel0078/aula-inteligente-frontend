// src/modules/profesor/pages/ProfesorListPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import profesorService from '../../../services/profesorService';

const ProfesorListPage = () => {
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState('');
  const [mostrarFiltros, setMostrarFiltros] = useState(false);
  const [mostrarColumnas, setMostrarColumnas] = useState(false);
  const [mostrarExportar, setMostrarExportar] = useState(false);

  const [profesores, setProfesores] = useState([]);

  useEffect(() => {
  const obtenerProfesores = async () => {
    try {
      const data = await profesorService.listar();
      setProfesores(data);
    } catch (error) {
      console.error('❌ Error al obtener profesores:', error);
    }
  };

  obtenerProfesores();
}, []);



  const handleVerProfesor = (profesor) => {
    navigate('/panel/profesores/ver', { state: { profesor } });
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
        <h1 className="text-2xl font-bold">Gestión de Profesores</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          + Registrar Profesor
        </button>
      </div>


      <div className="border rounded shadow p-4 bg-white mb-6">
        <div className="mb-4"></div>

       



        <div className="overflow-x-auto bg-white p-4 rounded shadow border border-gray-300">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Código</th>
                <th className="px-4 py-2 text-left">Nombre</th>
                <th className="px-4 py-2 text-left">CI</th>
                <th className="px-4 py-2 text-left">Teléfono</th>
                <th className="px-4 py-2 text-left">Especialidad</th>
                <th className="px-4 py-2 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {profesores.map((profesor, index) => (
                <tr key={profesor.id} className="border-t hover:bg-gray-100">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">PRF-{String(profesor.id).padStart(3, '0')}</td>
                  <td className="px-4 py-2">{profesor.nombre_completo}</td>
                  <td className="px-4 py-2">-</td> {/* No tienes ci */}
                  <td className="px-4 py-2">{profesor.telefono}</td>
                  <td className="px-4 py-2">{profesor.especialidad}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button
                      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                      onClick={() => handleVerProfesor(profesor)}
                    >
                      Ver
                    </button>
                    <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
                      Editar
                    </button>
                    <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default ProfesorListPage;
