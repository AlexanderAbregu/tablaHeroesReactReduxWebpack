import React, {Component} from "react";

import {bindActionCreators} from "redux";

import {connect} from "react-redux";

// Importo las acciones que quiera, en este caso solo "seleccionarUsuario"
import {seleccionarUsuario} from "../actions/index";

// Cuando a users se le añade algun elemento nuevo, este Component se actualiza automaticamente (solo)
class ListaUsuario extends Component {

	retornarSkills( idUser ){
		for( let i = 0; i < this.props.skills.length; i++ ){
			if( this.props.skills[i]._id == idUser ){
				return this.props.skills[i];
			}
		}
		return {};
	}

	createListItems(){
		// onClick ... La funcion esta en this.props porque fueenlazada con la funcion matchDispatchToProps
		return this.props.users.map((usuario, index) => {
			return (
				<tr key={usuario._id} onClick={ () => this.props.seleccionarUsuario(usuario, this.retornarSkills( usuario._id ) )} >
					<th>{index+1}</th>
					<td>{usuario.nombre}</td>
					<td>{usuario.apellido}</td>
					<td>{usuario.edad}</td>
				</tr>
			);
		});
	}

	render(){
		return (
			<table className="table table-hover table-striped">
				<thead>
					<tr>
						<th>#</th>
						<th>Nombre</th>
						<th>Apellido</th>
						<th>Edad</th>
					</tr>
				</thead>
				<tbody>
					{ this.createListItems() }
				</tbody>
			</table>
		);
	}
}

// state esta en el store y almacena en el this.props del componente el objeto que esta en el return
function mapStateToProps( state ){
	return {
		users: 	state.usuarios,
		skills: 	state.usuarioSkill
	};
}

// Paso las actions (en actions/index.js) a las props de este Component. De ese modo se llaman con this.props.nombreFunc
function matchDispatchToProps(dispatch){
	//Enlaza las aciones a las props  bajo el nombre de seleccionarUsuario. Ahora es this.props.seleccionarUsuario()
	return bindActionCreators({seleccionarUsuario: seleccionarUsuario}, dispatch)
}

// Conecta el store, las acciones y demas con el Component. Elementos en especifico del store
	// se pasan con mapStateToProps y Acciones se pasan con matchDsipatchToProps
export default connect(mapStateToProps, matchDispatchToProps)(ListaUsuario);