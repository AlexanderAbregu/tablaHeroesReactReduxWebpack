// Aqui se guarda el usuario activo. El seleccionado

// Como cada vez que se ejecuta una accion se actualizan todos los reducers, este reducer va a recibir la accion y ejecutamos el switch
export default function( state = {}, accion ){
	switch( accion.type ){
		case "USUARIO_SELECCIONADO":
			// Como sabemos que la accion que se ejecuto fue un click sobre un usuario, retornamos el objeto del usuario.
				// De esta forma, otro component leera ESTE reducer y mostrara la informacion.
			return accion.payload; // Retorna el usuario y skills
			break;
	}
	return state;
}