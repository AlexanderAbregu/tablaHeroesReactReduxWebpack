import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";


// REDUX:
	// Traigo "store"
	import {createStore} from "redux";

	// Importo el Provider
	import {Provider} from "react-redux";

	// Importo el objeto que contiene todos los reducers
	import todosReducers from "./reducers";

	// Obtengo el component que quiero mandar
	import Applicacion from "./components/aplicacion";

	// Creo una store con todos el objeto "todosReducers" que contiene todos los reducers
	const store = createStore( todosReducers );

// Mando el component al render
ReactDOM.render(
		<Provider store={store}>
			<Applicacion />
		</Provider>,
		document.getElementById("root")
	);