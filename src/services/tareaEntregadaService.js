import api from './api';

// GET - Listar todas las tareas entregadas
export const listarTareasEntregadas = async () => {
  const response = await api.get('/api/tareas_entregadas');
  return response.data;
};

// GET - Ver una tarea entregada por ID
export const obtenerTareaEntregada = async (id) => {
  const response = await api.get(`/api/tareas_entregadas/${id}`);
  return response.data;
};

// POST - Crear una nueva tarea entregada
export const crearTareaEntregada = async (data) => {
  const response = await api.post('/api/tareas_entregadas', data);
  return response.data;
};

// PUT - Actualizar una tarea entregada
export const actualizarTareaEntregada = async (id, data) => {
  const response = await api.put(`/api/tareas_entregadas/${id}`, data);
  return response.data;
};

// DELETE - Eliminar una tarea entregada
export const eliminarTareaEntregada = async (id) => {
  const response = await api.delete(`/api/tareas_entregadas/${id}`);
  return response.data;
};
