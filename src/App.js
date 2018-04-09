import React, { Component } from 'react';
import './App.css';
import FormularioBusqueda from './FormularioBusqueda';
import Resultados from './Resultados';

class App extends Component {
  constructor(){
    super();
    this.state = {
      resultados: [],
      usuario: 'jenimech',
      incluirMiembro: false
    };
  }

  componentDidMount() {
    this.buscarResultados(this.state);
  }

  cambiarCriterioBusqueda(state) {
    this.setState(state);
    this.buscarResultados(state);
  }

  buscarResultados(params) {
    var url = 'https://api.github.com/users/' + params.usuario + '/repos?sort=updated'
    if (params.incluirMiembro){
      url += '&type=all';
    }
    fetch(url).then(function(response){
      if(response.ok) {
        response.json().then(function(body){
          console.log(body);
          this.setState({resultados: body});
        }.bind(this));
      } else {
        this.setState({resultados: []});
      }
    }.bind(this));
  }
  render() {
    return (
      <div className="app">
        <FormularioBusqueda 
          usuario={this.state.usuario}
          incluirMiembro={this.state.incluirMiembro}
          onBuscar={this.cambiarCriterioBusqueda.bind(this)}
        />
        <Resultados resultados={this.state.resultados}/>
      </div>
    );
  }
}

export default App;
