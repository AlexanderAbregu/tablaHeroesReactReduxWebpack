// Aca se une todoslos reducers ya que el store es UN OBJETO enorme

// Importo de redux para combinar
import {combineReducers} from "redux";

// Como tiene export default toma lo unico que exporta
import reducerUsuarios from "./reducerUsuarios";

import usuarioActivoReducer from "./reducerUsuarioActivo";

import reducerSkills from "./reducerSkills";

// Creo el Reducer de reducers (Un reducer donde estara todo) para luego enviar al store
const todosReducers = combineReducers( {
	usuarios: reducerUsuarios,
	usuarioActivo: usuarioActivoReducer, // usuario, skills
	usuarioSkill: reducerSkills
} );

export default todosReducers;