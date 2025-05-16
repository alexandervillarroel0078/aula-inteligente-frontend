// src/pages/Bienvenido.jsx
import React from 'react';
import { jwtDecode } from 'jwt-decode';

const Bienvenido = () => {
  let usuario = null;

  try {
    const token = localStorage.getItem('token');
    if (token) {
      usuario = jwtDecode(token);
    }
  } catch (e) {
    console.error("Token inválido o expirado:", e);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">¡Bienvenido!</h1>
        {usuario ? (
          <>
            <p className="text-gray-700 mb-2">Nombre de usuario: <strong>{usuario.nombre_usuario}</strong></p>
            <p className="text-gray-700">Rol: <strong>{usuario.rol}</strong></p>
          </>
        ) : (
          <p className="text-red-600">No se pudo obtener la información del usuario.</p>
        )}
      </div>
    </div>
  );
};

export default Bienvenido;
