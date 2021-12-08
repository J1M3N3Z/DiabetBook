import React from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import { request } from '../../helper/helper';
import Loading from '../../loading/loading';
import MessagePrompt from '../../prompts/message';
import ConfirmationPromprs from '../../prompts/confirmation';

export default class CrudSimpleEditar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idCrudSimple: this.props.getIdCrudSimple(),
      rediret: false,
      message: {
        text: '',
        show: false,
      },
      confirmation: {
        title: 'Modificar ',
        text: '¿Deseas modificar?',
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
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  componentDidMount() {
    this.getCrudSimple();
  }

  getCrudSimple() {
    this.setState({ loading: true });
    request
      .get(`/crudSimple/${this.state.idCrudSimple}`)
      .then((response) => {
        this.setState({
          crudSimple: response.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
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
      .put(`/crudSimple/${this.state.idCrudSimple}`, this.state.crudSimple)
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

  onCancel() {
    this.setState({
      confirmation: {
        ...this.state.confirmation,
        show: false,
      },
    });
  }

  onConfirm() {
    this.setState(
      {
        confirmation: {
          ...this.state.confirmation,
          show: false,
        },
      },
      this.guardarCrudSimple()
    );
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
        <ConfirmationPromprs
          show={this.state.confirmation.show}
          title={this.state.confirmation.title}
          text={this.state.confirmation.text}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
        />
        <Loading show={this.state.loading} />

        <Row>
          <h1>Editar</h1>
        </Row>
        <Row>
          <Form>
            <div className="agregar-section">
              <h1 className="agregar-tittle text-center">Agregar Registro</h1>
              <br />
              <input
                type="text"
                className="form-control my-2"
                placeholder="Nombre"
                v-model="noticia.nombre"
                value={this.state.crudSimple.fila_1}
                onChange={(e) => this.setValue('fila_1', e.target.value)} />
              <br />
              <input
                type="text"
                className="form-control my-2"
                placeholder="Descripcion"
                v-model="noticia.descripcion"
                value={this.state.crudSimple.fila_2}
                onChange={(e) => this.setValue('fila_2', e.target.value)} />
              <br />
              <input
                type="text"
                className="form-control my-2"
                placeholder="Resultados"
                v-model="noticia.descripcion"
                value={this.state.crudSimple.fila_3}
                onChange={(e) => this.setValue('fila_3', e.target.value)} />
              <br />

              <button className="btn btn-warning my-2 " type="submit" variant="primary"
                onClick={() => console.log(this.guardarCrudSimple())}>Agregar</button>

            </div>
          </Form>
        </Row>
      </Container>
    );
  }
}
