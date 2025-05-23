import axios from './api'; // Este es tu archivo donde se define baseURL

const endpoint = '/api/profesores';


const profesorService = {
  // GET: Listar todos los profesores
  listar: async () => {
    const res = await axios.get(endpoint);
    return res.data;
  },

  // GET: Obtener un profesor por ID
  obtener: async (id) => {
    const res = await axios.get(`${endpoint}/${id}`);
    return res.data;
  },

  // POST: Crear un nuevo profesor
  crear: async (datos) => {
    const res = await axios.post(endpoint, datos);
    return res.data;
  },

  // PUT: Actualizar un profesor existente
  actualizar: async (id, datos) => {
    const res = await axios.put(`${endpoint}/${id}`, datos);
    return res.data;
  },

  // DELETE: Eliminar un profesor
  eliminar: async (id) => {
    const res = await axios.delete(`${endpoint}/${id}`);
    return res.data;
  }
};

export default profesorService;
