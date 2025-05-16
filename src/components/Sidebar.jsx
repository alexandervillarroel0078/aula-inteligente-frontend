// src/components/Sidebar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaUsers, FaUserShield, FaUserTie, FaBuilding, FaBookOpen, FaSignOutAlt } from "react-icons/fa";

const Sidebar = ({ isOpen, toggle }) => {
  const navigate = useNavigate();

  const items = [
    {
      section: "INICIO",
      links: [
        { label: "Inicio", icon: <FaHome />, path: "/inicio" }
      ]
    },
    {
      section: "MÓDULOS",
      links: [
        { label: "Usuarios", icon: <FaUsers />, path: "/usuarios" },
        { label: "Roles", icon: <FaUserShield />, path: "/roles" },
        { label: "Empleados", icon: <FaUserTie />, path: "/empleados" },
        { label: "Residentes", icon: <FaBuilding />, path: "/residentes" },
        { label: "Bitácora", icon: <FaBookOpen />, path: "/bitacora" },
      ]
    }
  ];

  return (
    <aside className={`
      bg-black text-white min-h-[calc(100vh-4rem)] p-4 fixed top-16 left-0 z-20
      transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      w-64
    `}>
      {items.map((section, i) => (
        <div key={i} className="mb-6">
          <p className="text-gray-400 text-xs font-semibold mb-2">{section.section}</p>
          <ul className="space-y-2">
            {section.links.map((link, j) => (
              <li
                key={j}
                className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded cursor-pointer"
                onClick={() => {
                  navigate(link.path);
                  toggle(); // opcional para cerrar el menú al hacer clic
                }}
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="mt-10">
        <li
          className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 p-2 rounded text-center cursor-pointer"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}
        >
          <FaSignOutAlt />
          <span>Cerrar sesión</span>
        </li>
      </div>
    </aside>
  );
};

export default Sidebar;
