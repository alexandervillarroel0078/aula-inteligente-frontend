// src/pages/Bienvenido.jsx
import React from 'react';

const Bienvenido = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">¡Bienvenido!</h1>
        <p className="text-gray-700">Has iniciado sesión exitosamente.</p>
      </div>
    </div>
  );
};

export default Bienvenido;
