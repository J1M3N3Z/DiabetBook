import React from "react";
import {Form} from "react-bootstrap"
import { Button } from 'react-bootstrap';
import "../Login/Login.css"
import Navbar from "../../components/navbar"
import Footer from "../../components/Footer"

const Login = () => {
  return (
    <React.Fragment>
        <Navbar/>
        <div className="login-image">
            <div className="Login p-3 mt-5 pb-md-4 mx-auto">
                <div className="cardLogin">
                    <div className="card-body mt-2">
                        <div className="container-Login">
                            <div>
                                <h1 className="card-title-login text-light">SIGN IN</h1>
                            </div>
                            <Form className="row g-3 needs-validation">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="text-light">Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="text-light">Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3 text-light" controlId="formBasicCheckbox" >
                                <Form.Check type="checkbox" label="Remember me" />
                            </Form.Group>
                            <Button variant="outline-light" type="submit" className="button-login">
                                Agree
                            </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <Footer/>
</React.Fragment>
  );
};

export default Login;