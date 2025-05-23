import api from './api';

// GET - Listar todos los usuarios
export const listarUsuarios = async () => {
  const response = await api.get('/api/usuarios');
  return response.data;
};

// GET - Ver un usuario por ID
export const verUsuario = async (id) => {
  const response = await api.get(`/api/usuarios/${id}`);
  return response.data;
};

// POST - Crear un nuevo usuario
export const crearUsuario = async (data) => {
  const response = await api.post('/api/usuarios', data);
  return response.data;
};

// PUT - Editar un usuario
export const editarUsuario = async (id, data) => {
  const response = await api.put(`/api/usuarios/${id}`, data);
  return response.data;
};

// DELETE - Eliminar un usuario
export const eliminarUsuario = async (id) => {
  const response = await api.delete(`/api/usuarios/${id}`);
  return response.data;
};
