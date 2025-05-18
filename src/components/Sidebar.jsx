// src/components/Sidebar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHome, FaUsers, FaUserShield, FaUserTie, FaBuilding, FaBookOpen, FaSignOutAlt, FaChevronDown, FaChevronRight
} from "react-icons/fa";

const Sidebar = ({ isOpen, toggle }) => {
  const navigate = useNavigate();
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (label) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

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
        {
          label: "Gestión Académica",
          children: [
            { label: "Alumnos", icon: <FaUsers />, path: "/panel/alumnos" },
            { label: "Profesores", icon: <FaUserTie />, path: "/panel/profesores" },
            { label: "Cursos / Aulas", icon: <FaBuilding />, path: "/panel/grados" },
            { label: "Materias", icon: <FaBookOpen />, path: "/panel/materias" },
            { label: "Períodos", icon: <FaBookOpen />, path: "/panel/periodos" },
          ]
        },
        {
          label: "Evaluaciones",
          children: [
            { label: "Notas", icon: <FaBookOpen />, path: "/panel/notas" },
            { label: "Asistencia", icon: <FaBookOpen />, path: "/panel/asistencias" },
            { label: "Participación", icon: <FaBookOpen />, path: "/panel/participaciones" },
            { label: "Observaciones", icon: <FaBookOpen />, path: "/panel/observaciones" },
          ]
        },
        {
          label: "Complementos",
          children: [
            { label: "Tareas", icon: <FaBookOpen />, path: "/panel/tareas" },
            { label: "Asignaciones", icon: <FaBookOpen />, path: "/panel/asignaciones" },
            { label: "Predicción", icon: <FaBookOpen />, path: "/panel/prediccion" },
          ]
        },
        {
          label: "Seguridad",
          children: [
            { label: "Usuarios", icon: <FaUsers />, path: "/panel/usuarios" },
            { label: "Roles", icon: <FaUserShield />, path: "/panel/roles" },
          ]
        },
        ,
        {
          label: "Perfil del profesor",
          children: [
            { label: "Usuarios", icon: <FaUsers />, path: "/panel/usuarios" },
            { label: "Roles", icon: <FaUserShield />, path: "/panel/roles" },
          ]
        }
      ]
    }
  ];

  return (
    <aside className={`
  bg-black text-white fixed top-16 left-0 z-20 w-64 h-[calc(100vh-4rem)]
  overflow-y-auto p-4 transition-transform duration-300 ease-in-out
  ${isOpen ? 'translate-x-0' : '-translate-x-full'}
`}>

      {items.map((section, i) => (
        <div key={i} className="mb-6">
          <p className="text-gray-400 text-xs font-semibold mb-2">{section.section}</p>
          <ul className="space-y-2">
            {section.links.map((link, j) => (
              link.children ? (
                <li key={j}>
                  <div
                    className="flex items-center justify-between cursor-pointer hover:bg-gray-700 p-2 rounded"
                    onClick={() => toggleSubmenu(link.label)}
                  >
                    <span className="flex items-center gap-2">
                      <FaBookOpen />
                      {link.label}
                    </span>
                    {openSubmenus[link.label] ? <FaChevronDown /> : <FaChevronRight />}
                  </div>
                  {openSubmenus[link.label] && (
                    <ul className="pl-6 mt-2 space-y-1">
                      {link.children.map((sub, k) => (
                        <li
                          key={k}
                          className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded cursor-pointer"
                          onClick={() => {
                            navigate(sub.path);
                            toggle(); // cerrar sidebar si deseas
                          }}
                        >
                          <span>{sub.icon}</span>
                          <span>{sub.label}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li
                  key={j}
                  className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded cursor-pointer"
                  onClick={() => {
                    navigate(link.path);
                    toggle();
                  }}
                >
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                </li>
              )
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
