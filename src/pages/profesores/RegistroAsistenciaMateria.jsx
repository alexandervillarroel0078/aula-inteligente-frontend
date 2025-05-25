import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { registrarAsistenciasMateria } from '../../services/profesorService';
import axios from 'axios';
const RegistroAsistenciaMateria = () => {
    const { materiaId, profesorId } = useParams();
    const navigate = useNavigate();
    const [alumnos, setAlumnos] = useState([]);
    const [fecha, setFecha] = useState('');
    const [periodoId, setPeriodoId] = useState(1);
    const [asistencias, setAsistencias] = useState({});

    // 🔹 Simulación de alumnos (temporal para prueba)
    useEffect(() => {
        const fetchAlumnos = async () => {
            try {
                // Asegúrate de usar la URL correcta para el backend
                const response = await axios.get(`http://localhost:5000/api/materias/${materiaId}/estudiantes`);

                // Aquí puedes ver la estructura completa de los datos
                console.log(response.data);  // Para revisar cómo es la respuesta

                // Si la respuesta tiene la propiedad 'estudiantes', la usamos
                if (response.data && response.data.estudiantes) {
                    setAlumnos(response.data.estudiantes);  // Establecer la lista de estudiantes
                } else {
                    console.error('❌ No se encontraron estudiantes en la respuesta.');
                }
            } catch (error) {
                console.error('❌ Error al obtener los estudiantes:', error);  // Mostrar mensaje de error
            }
        };

        if (materiaId) fetchAlumnos();  // Llamar a la función si materiaId está disponible
    }, [materiaId]);


    const toggleAsistencia = (alumnoId) => {
        setAsistencias((prev) => ({
            ...prev,
            [alumnoId]: !prev[alumnoId],
        }));
    };

    const handleGuardar = async () => {
        const payload = {
            fecha,
            periodo_id: periodoId,
            asistencias: alumnos.map((a) => ({
                alumno_id: a.id,
                presente: asistencias[a.id] || false,
            })),
        };

        // Verifica el payload antes de enviarlo
        console.log(payload);  // Verifica que el formato es el esperado

        // Validar que al menos un alumno esté marcado como presente
        const algunoAsistio = payload.asistencias.some(a => a.presente);

        if (!algunoAsistio) {
            alert('⚠️ Debes marcar al menos un alumno como presente.');
            return;
        }

        try {
            await registrarAsistenciasMateria(materiaId, payload);
            alert('✅ Asistencias registradas correctamente');
            navigate(-1);
        } catch (error) {
            alert('❌ Error al registrar asistencias. Intenta nuevamente.');
        }
    };



    return (
        <div className="p-4 max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Registrar Asistencia</h2>

            <div className="mb-4">
                <label className="block mb-1 text-sm font-medium text-gray-700">Fecha de la clase</label>
                <input
                    type="date"
                    className="w-full border rounded px-3 py-2"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                />
            </div>


            <div className="mb-4">
                <label className="block mb-1 text-sm font-medium text-gray-700">Periodo (Bimestre)</label>
                <select
                    className="w-full border rounded px-3 py-2"
                    value={periodoId}
                    onChange={(e) => setPeriodoId(Number(e.target.value))}
                >
                    <option value={1}>1er Bimestre</option>
                    <option value={2}>2do Bimestre</option>
                    <option value={3}>3er Bimestre</option>
                    <option value={4}>4to Bimestre</option>
                </select>
            </div>

            <h4 className="text-md font-semibold mb-2">Alumnos</h4>
            <ul className="mb-4 space-y-2">
                {alumnos.map((a) => (
                    <li key={a.id} className="flex items-center justify-between border-b pb-2">
                        <span>{a.nombre_completo}</span>
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2"
                                checked={asistencias[a.id] || false}
                                onChange={() => toggleAsistencia(a.id)}
                            />
                            Asistió
                        </label>
                    </li>
                ))}
            </ul>

            <div className="flex justify-between">
                <button
                    onClick={() => navigate(-1)}
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                >
                    ⬅️ Cancelar
                </button>
                <button
                    onClick={handleGuardar}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    💾 Guardar Asistencias
                </button>
            </div>
        </div>
    );
};

export default RegistroAsistenciaMateria;
