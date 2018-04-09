import React, { Component } from 'react';
import moment from 'moment';

class Resultados extends Component {
  render(){
    return <ul className="resultados-lista">
      {this.props.resultados.map(function(resultado){
        return <ItemResultado key={resultado.id} resultado={resultado} />
      }.bind(this))}
    </ul>;
  }
}

class ItemResultado extends Component {
  render(){
    var resultado = this.props.resultado;
    return <li className="resultado">
      <h3><a href={resultado.html_url} target="blank">
        {resultado.name}</a>
      </h3>
      <p className="resultado-info">
        {resultado.fork && <span className="resultado-fork">
        <i className="fa fa-code-fork"/> Forkeado
        </span>}
      </p>
      <p className="resultado-description">{resultado.description}</p>
      <p className="resultado-actualizado">Actualizado {moment(resultado.updated_at).fromNow()}</p>
    </li>;
  }
}

export default Resultados;