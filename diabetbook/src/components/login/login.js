import React from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { APIHOST as host } from '../../app.json';
import './login.css';
import { isNull } from 'util';
import Cookies from 'universal-cookie';
import { calculaExpiracionSesion } from '../helper/helper';
import Loading from '../loading/loading';

const cookies = new Cookies();

export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      usuario: '',
      pass: '',
    };
  }

  iniciarSesion() {
    this.setState({ loading: true });

    axios
      .post(`${host}/usuarios/login`, {
        usuario: this.state.usuario,
        pass: this.state.pass,
      })
      .then((response) => {
        if (isNull(response.data.token)) {
          alert('Usiario y/o contraseña invalidos');
        } else {
          cookies.set('_s', response.data.token, {
            path: '/',
            expires: calculaExpiracionSesion(),
          });

          this.props.history.push('/crudSimple');
        }

        this.setState({ loading: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <Container id="login-container">
        <Loading show={this.state.loading} />
        <Row>
          <Col>
            <div className="login-fondo">
              <div className="" tabindex="-1" role="dialog" id="modalSignin">
                <div className="modal-dialog" role="document">
                  <div className="modal-content rounded-5 shadow">
                    <div className="modal-header p-5 pb-4 border-bottom-0">
                      <h1 className="fw-bold mb-0">Login</h1>
                    </div>

                    <div className="modal-body p-5 pt-0">
                      <form className="">
                        <div className="form-floating mb-3">
                          <input class="form-control rounded-4" id="floatingInput" placeholder="UserName" onChange={(e) =>
                            this.setState({ usuario: e.target.value })
                          } />
                          <label for="floatingInput">Username</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input type="password" className="form-control rounded-4" id="floatingPassword" placeholder="Password" onChange={(e) => this.setState({ pass: e.target.value })} />
                          <label for="floatingPassword">Password</label>
                        </div>
                        <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit" onClick={() => {
                          this.iniciarSesion();
                        }}>Sign up</button>
                        <hr className="my-4" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
