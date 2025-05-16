import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen">
      {/* Sidebar fijo */}
      <Sidebar isOpen={sidebarOpen} toggle={toggleSidebar} />

      {/* Contenido principal */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <Header toggle={toggleSidebar} />
        
        {/* Espacio debajo del header */}
        <main className="p-6 bg-gray-100 mt-20">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
