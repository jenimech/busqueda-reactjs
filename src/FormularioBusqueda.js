import React, { Component } from 'react';
import { Form, Button, FormControl, FormGroup, Checkbox, Row } from 'react-bootstrap';

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
        return <Form inline onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup controlId="formBasicText">
            <Row>
                <FormControl 
                type="text"
                value={this.state.usuario}
                onChange={this.handleUsuario.bind(this)}
                />    
                <Button bsStyle="primary">Buscar</Button>
            </Row>
            <Row>
                <Checkbox 
                checked={this.state.incluirMiembro}
                onChange={this.handleIcluirMiembro.bind(this)}>
                Incluir Repositorios donde el usuario es Miembro
                </Checkbox>
            </Row>
          </FormGroup>
        </Form>;
    }
}

export default FormularioBusqueda;