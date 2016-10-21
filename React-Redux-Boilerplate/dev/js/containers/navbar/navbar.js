import React, {Component} from "react";

import ReactDOM from "react-dom";

// Cuando a users se le añade algun elemento nuevo, este Component se actualiza automaticamente (solo)
class Navbar extends Component {
	componentDidMount(){
		// Cuando se renderize el componente, le hago focus.
   		ReactDOM.findDOMNode(this.refs.inputBusqueda).focus();
	}

	render(){
		return (
			<div>
				<nav className="navbar navbar-default navbar-inverse">
					<div className="container">
						<div className="navbar-header">
							<a href="#" className="navbar-brand">Lista de Heroes</a>
						</div>
						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
							<form className="navbar-form navbar-right">
								<div className="form-group">
									<div className="input-group">
										<span className="input-group-addon">
											<span className="glyphicon glyphicon-search"></span>
										</span>
										<input className="form-control" placeholder="Search" ref="inputBusqueda"/>
									</div>
								</div>
							</form>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;