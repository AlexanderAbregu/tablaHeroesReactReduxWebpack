import React, {Component} from "react";
import {connect} from "react-redux";

class SkillUsuario extends  Component {

	render() {
		console.log(this.props.usuario);
		return (
			<div className="container-fluid col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<table className="table table-hover">
					<thead>
						<tr>
							<th colSpan="2"><h4>Skills</h4></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>Fuerza:</th>
							<td>{this.props.skills.fuerza}</td>
						</tr>
						<tr>
							<th>Agilidad:</th>
							<td>{this.props.skills.agilidad}</td>
						</tr>
						<tr>
							<th>Aguante:</th>
							<td>{this.props.skills.aguante}</td>
						</tr>
						<tr>
							<th>Poder de Ataque:</th>
							<td>{this.props.skills.poderDeAtaque}</td>
						</tr>
						<tr>
							<th>Tipo de Arma:</th>
							<td>{this.props.skills.tipoArma}</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}

}

// state esta en el store y almacena en el this.props del componente el objeto que esta en el return
function mapStateToProps( state ){
	// state.usuarioActivo lo toma del store, y usuarioActivo viene del reducer "reducerUsuarioActivo.js"
	return {
		skills:  state.usuarioActivo.skills
	};
}

// Conecta el store, las acciones y demas con el Component. Elementos en especifico del store
	// se pasan con mapStateToProps y Acciones se pasan con matchDsipatchToProps
export default connect(mapStateToProps)(SkillUsuario);