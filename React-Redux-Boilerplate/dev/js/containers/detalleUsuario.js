import React, {Component} from "react";
import {connect} from "react-redux";

import ImagenUsuario from "./imagenUsuario";

import SkillUsuario from "./skillUsuario";

class UsuarioDetalle extends  Component {

	render() {
		var divStyle = {
	  		filter: 'blur(6px)',
	  		zIndex: '1',
	  		position: 'absolute',
	  		width: '95%'
		};
		var imgStyle = {
			zIndex: '2',
			position: 'absolute',
			margin: '30px'
		}
		if( this.props.usuario ){
			return (
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						<ImagenUsuario />
					</div>
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						<h2 className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							{this.props.usuario.nombre} {this.props.usuario.apellido}
							 <small> {this.props.usuario.edad} Años</small>
						</h2>
						<SkillUsuario />
					</div>
				</div>
			);
		} else {
			return ( <div> Selecciona un heroe heroico e.e </div>);
		}

	}
}

// state esta en el store y almacena en el this.props del componente el objeto que esta en el return
function mapStateToProps( state ){
	// state.usuarioActivo lo toma del store, y usuarioActivo viene del reducer "reducerUsuarioActivo.js"}
	return {
		usuario:  state.usuarioActivo.usuario,
		skills: state.usuarioActivo.skills
	};
}

// Conecta el store, las acciones y demas con el Component. Elementos en especifico del store
	// se pasan con mapStateToProps y Acciones se pasan con matchDsipatchToProps
export default connect(mapStateToProps)(UsuarioDetalle);