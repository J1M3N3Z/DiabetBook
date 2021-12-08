import React from 'react';
import { Container , Row} from 'react-bootstrap';
import { request } from '../../helper/helper';
import Loading from '../../loading/loading';
import MessagePrompt from '../../prompts/message';

export default class CrudSimpleCrear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rediret: false,
      message: {
        text: '',
        show: false,
      },
      loading: false,
      crudSimple: {
        fila_1: '',
        fila_2: '',
        fila_3: '',
      },
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
  }

  setValue(index, value) {
    this.setState({
      crudSimple: {
        ...this.state.crudSimple,
        [index]: value,
      },
    });
  }

  guardarCrudSimple() {
    this.setState({ loading: true });
    request
      .post('/crudSimple', this.state.crudSimple)
      .then((response) => {
        if (response.data.exito) {
          this.setState({
            rediret: response.data.exito,
            message: {
              text: response.data.msg,
              show: true,
            },
          });
        }
        this.setState({ loading: false });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: true });
      });
  }

  onExitedMessage() {
    if (this.state.rediret) this.props.changeTab('buscar');
  }

  render() {
    return (
      <Container id="crudSimple-crear-container">
        <MessagePrompt
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2500}
          onExited={this.onExitedMessage}
        />

        <Loading show={this.state.loading} />
        <Row>
          <div className="agregar-section">
            <h1 className="agregar-tittle text-center">Agregar Registro</h1>
            <br/>
            <input
              type="text"
              className="form-control my-2"
              placeholder="Nombre"
              v-model="noticia.nombre"
              onChange={(e) => this.setValue('fila_1', e.target.value)} />
              <br/>
            <input
              type="text"
              className="form-control my-2"
              placeholder="Descripcion"
              v-model="noticia.descripcion"
              onChange={(e) => this.setValue('fila_2', e.target.value)} />
              <br/>
            <input
              type="text"
              className="form-control my-2"
              placeholder="Resultados"
              v-model="noticia.descripcion"
              onChange={(e) => this.setValue('fila_3', e.target.value)} />
              <br/>
            
            <button className="btn btn-success my-2 " type="submit"
              onClick={() => console.log(this.guardarCrudSimple())}>Agregar</button>

          </div>
        </Row>
      </Container>
    );
  }
}
