import React from 'react';

const ResumenEstudiante = ({ alumno }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Detalles de usuario */}
      <div className="bg-white border rounded-lg shadow p-6 space-y-3">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-gray-700">📌 Detalles de usuario</h2>
          <button className="text-blue-600 text-sm hover:underline">Editar perfil</button>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600">Dirección de correo</p>
          <p className="text-sm text-gray-800">
            {alumno.email} <span className="text-gray-500">(Oculto a usuarios sin permisos)</span>
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600">País</p>
          <p className="text-sm text-gray-800">{alumno.pais}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600">Ciudad</p>
          <p className="text-sm text-gray-800">{alumno.ciudad}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600">Zona horaria</p>
          <p className="text-sm text-gray-800">{alumno.zona_horaria}</p>
        </div>
      </div>

      {/* Detalles del curso */}
      <div className="bg-white border rounded-lg shadow p-6 space-y-2">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">📘 Detalles del curso</h2>
        <p><strong>Perfiles de curso:</strong></p>
       {alumno?.cursos?.length > 0 ? (
  <ul className="list-disc list-inside text-sm text-blue-600">
    {alumno.cursos.map((curso, index) => (
      <li key={index} className="hover:underline cursor-pointer">{curso}</li>
    ))}
  </ul>
) : (
  <p className="text-sm text-gray-500">Sin cursos registrados.</p>
)}

        <p><strong>Rol:</strong> {alumno.rol}</p>
        <p><strong>Grupo:</strong> {alumno.grupo}</p>
      </div>

      {/* Actividad de accesos */}
      <div className="bg-white border rounded-lg shadow p-6 space-y-2">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">🕐 Actividad de accesos</h2>
        <p><strong>Último acceso:</strong> Domingo, 18 de mayo de 2025, 09:19</p>
      </div>

      {/* Informes */}
      <div className="bg-white border rounded-lg shadow p-6 space-y-2">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">📊 Informes</h2>
        <ul className="list-disc list-inside text-blue-600 text-sm space-y-1">
          <li><a href="#" className="hover:underline">Sesiones del navegador</a></li>
          <li><a href="#" className="hover:underline">Resumen de Calificaciones</a></li>
          <li><a href="#" className="hover:underline">Calificaciones</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ResumenEstudiante;
