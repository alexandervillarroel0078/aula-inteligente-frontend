import api from './api';

// GET - Listar todas las tareas
export const listarTareas = async () => {
  const response = await api.get('/api/tareas');
  return response.data;
};

// GET - Ver una tarea por ID
export const verTarea = async (id) => {
  const response = await api.get(`/api/tareas/${id}`);
  return response.data;
};

// POST - Crear una nueva tarea
export const crearTarea = async (data) => {
  const response = await api.post('/api/tareas', data);
  return response.data;
};

// PUT - Editar una tarea
export const editarTarea = async (id, data) => {
  const response = await api.put(`/api/tareas/${id}`, data);
  return response.data;
};

// DELETE - Eliminar una tarea
export const eliminarTarea = async (id) => {
  const response = await api.delete(`/api/tareas/${id}`);
  return response.data;
};
