// src/layout/DashboardLayout.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(true); // mostrar u ocultar sidebar

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />

      {/* Contenido principal */}
      <div className="flex-1 min-h-screen transition-all duration-300">
        {/* Header negro fijo */}
        <div className="bg-black text-white h-16 flex items-center justify-between px-6 fixed top-0 left-0 right-0 z-30">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
            ☰
          </button>
          <h1 className="text-lg font-semibold">Aula Inteligente</h1>
          <i className="fas fa-user-circle text-2xl"></i>
        </div>

        {/* Ajustar espacio para que el contenido no quede debajo del header */}
        <div className={`pt-16 transition-all duration-300 ${isOpen ? "ml-64" : "ml-0"}`}>
          <div className="p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
