import React, { Component } from 'react';

class FormularioBusqueda extends Component {
    render(){
        return <form className="formulario-busqueda">
          <input className="input-usuario"
          type="text"
          value={this.props.usuario}
          />
          <button className="formulario-submit" type="submit">Buscar</button>
          <label className="check-miembro">
            <input type="checkbox"
            checked={this.props.incluirMiembro}/>
            Incluir Repocitorios donde el usuario es Miembro
          </label>
        </form>;
    }
}

export default FormularioBusqueda;