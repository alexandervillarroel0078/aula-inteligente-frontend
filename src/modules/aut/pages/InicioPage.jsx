import React, { useState } from "react";
import { FaRegDotCircle } from "react-icons/fa";

const paquetesData = [
  {
    titulo: "Paquete 1: Acceso y Personal",
    descripcion: "Gestión de inicio de sesión, roles y personal.",
    color: "bg-blue-100",
    casos: [
      "CU01: Iniciar sesión",
      "CU02: Cerrar sesión",
      "CU03: Asignar roles y permisos",
      "CU04: Gestión de profesores",
    ],
  },
  {
    titulo: "Paquete 2: Gestión Académica",
    descripcion: "Gestión de alumnos, grados, materias y asignaciones.",
    color: "bg-green-100",
    casos: [
      "CU05: Gestionar alumnos",
      "CU06: Gestionar grados",
      "CU07: Gestionar materias",
      "CU08: Asignar grupo a materia",
    ],
  },
  {
    titulo: "Paquete 3: Seguimiento y Evaluación",
    descripcion: "Registro de notas, asistencias, participaciones y desempeño.",
    color: "bg-yellow-100",
    casos: [
      "CU09: Registrar notas",
      "CU10: Registrar asistencias",
      "CU11: Registrar participaciones",
      "CU12: Desempeño alumnos por grupo",
    ],
  },
  {
    titulo: "Paquete 4: Análisis y Visualización",
    descripcion: "Consultas, análisis de datos, tareas y rendimiento.",
    color: "bg-purple-100",
    casos: [
      "CU13: Consultar visualización histórica",
      "CU14: Crear tareas",
      "CU15: Enviar retroalimentación",
      "CU16: Calificar tareas entregadas",
      "CU17: Generar análisis de desempeño",
      "CU18: Visualizar rendimiento individual",
      "CU19: Visualizar resumen académico",
      "CU20: Visualizar datos de IA",
    ],
  },
];

const InicioPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [paqueteActivo, setPaqueteActivo] = useState(null);

  const abrirModal = (paquete) => {
    setPaqueteActivo(paquete);
    setModalOpen(true);
  };

  const cerrarModal = () => {
    setModalOpen(false);
    setPaqueteActivo(null);
  };

  return (
    <div className="p-6 relative">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Inicio - Paquetes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {paquetesData.map((paquete, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-md border border-gray-300 ${paquete.color} p-5`}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{paquete.titulo}</h2>
            <p className="text-sm text-gray-600 mb-4">{paquete.descripcion}</p>

            <button
              onClick={() => abrirModal(paquete)}
              className="text-sm text-white bg-pink-500 px-4 py-2 rounded hover:bg-pink-600 transition"
            >
              Ver detalle
            </button>
          </div>
        ))}
      </div>

      {modalOpen && paqueteActivo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">
            <h3 className="text-lg font-bold text-gray-800 mb-4">{paqueteActivo.titulo}</h3>
            <ul className="space-y-2 mb-4">
              {paqueteActivo.casos.map((caso, i) => (
                <li key={i} className="flex items-center text-sm text-gray-700">
                  <FaRegDotCircle className="text-pink-500 mr-2" />
                  {caso}
                </li>
              ))}
            </ul>
            <button
              onClick={cerrarModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
            >
              &times;
            </button>
            <div className="text-right">
              <button
                onClick={cerrarModal}
                className="mt-4 bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InicioPage;
