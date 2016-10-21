// Creo una accion y la exporto, no es default porque puedo exportar mas de una.
export const seleccionarUsuario = (usuario, skills) => {
	// Todas las acciones tienen que retornar un objeto con estos dos campos
		// type = Tipo de accion, puede ser cualquier cosa es solo una descripcion de la accion
		// payload = Datos que necesita la accion
	return {
		type: "USUARIO_SELECCIONADO",
		payload: {
			usuario: usuario,
			skills: skills
		}
	}
};
// Cada vez que se ejecuta una accion se actualizan TODOS los Reducers