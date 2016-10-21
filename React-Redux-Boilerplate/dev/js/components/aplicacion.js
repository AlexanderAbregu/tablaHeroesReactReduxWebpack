// Exporta los componentes HTML

import React from "react";

// Traigo un container
import ListaUsuario from "../containers/listaUsuarios";

import UsuarioDetalle from "../containers/detalleUsuario";

import Navbar from "../containers/navbar/navbar";

global.jQuery = require('jquery');
import $ from 'jquery';
require("bootstrap");

// Creo el componente y le paso el container de ListaUsuario
const Applicacion = () => (
	<div>
		<Navbar />
		<div className="container-fluid">
			<div className="row-fluid">
				<ListaUsuario />
				<hr/>
				<h3>Detalles del Heroe</h3>
				<UsuarioDetalle />
			</div>
		</div>
	</div>
);

export default Applicacion;