import React, {Component} from "react";
import {connect} from "react-redux";

class ImagenUsuario extends  Component {

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
		};
		return (
			<div>
				<img className="img-rounded" style={imgStyle} height="300px" src={this.props.usuario.foto}/>
				<div style={divStyle}>
					<img className="img-rounded" width="100%" height="350px" src={this.props.usuario.foto}/>
				</div>
			</div>
		);
	}
}

// state esta en el store y almacena en el this.props del componente el objeto que esta en el return
function mapStateToProps( state ){
	// state.usuarioActivo lo toma del store, y usuarioActivo viene del reducer "reducerUsuarioActivo.js"
	return {
		usuario:  state.usuarioActivo.usuario
	};
}

// Conecta el store, las acciones y demas con el Component. Elementos en especifico del store
	// se pasan con mapStateToProps y Acciones se pasan con matchDsipatchToProps
export default connect(mapStateToProps)(ImagenUsuario);