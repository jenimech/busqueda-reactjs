import React, { Component } from 'react';

class FormularioBusqueda extends Component {
    constructor(props) {
        super();
        this.state = {
          usuario: props.usuario,
          incluirMiembro: props.incluirMiembro
        };
    }
    handleSubmit(ev){
      ev.preventDefault();
      this.props.onBuscar({
          usuario: this.state.usuario,
          incluirMiembro: this.state.incluirMiembro
      });
    }
    handleUsuario(ev) {
      this.setState({usuario: ev.target.value});
    }
    handleIcluirMiembro(ev) {
      this.setState({incluirMiembro: ev.target.checked});
    }
    render(){
        return <form className="formulario-busqueda" onSubmit={this.handleSubmit.bind(this)}>
          <input className="input-usuario"
          type="text"
          value={this.state.usuario}
          onChange={this.handleUsuario.bind(this)}
          />
          <button className="formulario-submit" type="submit">Buscar</button>
          <label className="check-miembro">
            <input type="checkbox"
            checked={this.state.incluirMiembro}
            onChange={this.handleIcluirMiembro.bind(this)}/>
            Incluir Repocitorios donde el usuario es Miembro
          </label>
        </form>;
    }
}

export default FormularioBusqueda;