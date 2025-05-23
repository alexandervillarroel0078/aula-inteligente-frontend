import api from './api';

// GET - Listar todos los grados
export const listarGrados = async () => {
  const response = await api.get('/api/grados');
  return response.data;
};

// GET - Ver un grado por ID
export const verGrado = async (id) => {
  const response = await api.get(`/api/grados/${id}`);
  return response.data;
};

// POST - Crear un nuevo grado
export const crearGrado = async (gradoData) => {
  const response = await api.post('/api/grados', gradoData);
  return response.data;
};

// PUT - Editar un grado
export const editarGrado = async (id, gradoData) => {
  const response = await api.put(`/api/grados/${id}`, gradoData);
  return response.data;
};

// DELETE - Eliminar un grado
export const eliminarGrado = async (id) => {
  const response = await api.delete(`/api/grados/${id}`);
  return response.data;
};
