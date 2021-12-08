import Footer from "../../../components/Footer/Footer"
import "./Inicio.css"
import React from "react"
import { Link } from "react-router-dom"
import person1 from "../../../assets/elias.jpg"
import person2 from "../../../assets/daniel3.jpg"
import Logo2 from "../../../assets/Logo2.png"

const Inicio = () => {
    return (
        <React.Fragment>
            <div className="inicio-img">
                <div>
                    <section id="about" className="about">
                        <div className="container">

                            <div className="row">
                                <div className="col-lg-6" data-aos="fade-right">
                                    <div className="about-image">
                                        <img src={Logo2} className="img-fluid" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-left">
                                    <div className="about-content pt-4 pt-lg-0 pl-0 pl-lg-3 about-texto">
                                        <h1 className="text-center">DiabetBook</h1>
                                        <p className=" text-founts">
                                            DiabetBook es un proyecto el cual esta desarrollado con el fin de ayudar a todas aquellas personas que padecen de diabetes y ayudarlas a sobrellevar su condicion,
                                            por lo tanto presentamos un proyecto el cual les permitira llevar control sobre sus registros, consumos y pues en pocas palabras puedan llevar control de su enfermedad
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>

                <div>
                    <section id="contact" className="contact section-bg">
                        <div className="container" data-aos="fade-up">

                            <div className="section-title text-center text-fount">
                                <h1>CONTACTO</h1>
                                <br />
                                <p>En esta parte se encuentra tanto la informacion de contacto nuestra y tambien nuestra ubicacion mediante las cuales puedes ubicarnos o contactarnos</p>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="info-box mb-4">
                                        <i className="bx bx-map"></i>
                                        <h3>Nuestras Redes</h3>
                                        <p>Elias: <br />
                                            https://www.linkedin.com/in/eliasramosn  https://facebook.com/elias.r.narvaez</p>
                                        <p>Daniel: <br />
                                            https://www.instagram.com/i_am_j1m3n3z/?hl=es  https://www.facebook.com/profile.php?id=100008844840628</p>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="info-box  mb-4">
                                        <i className="bx bx-envelope"></i>
                                        <h3>Nuestros Correos</h3>
                                        <p>Elias: <br />eramosnarvaez@gmail.com</p>
                                        <p>Daniel: <br />jhoanndaniel.2004@gmail.com</p>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="info-box  mb-4">
                                        <i className="bx bx-phone-call"></i>
                                        <h3>Nuestro Numero</h3>
                                        <p>Elias: <br />+57 3008431236</p>
                                        <p>Daniel: <br />+57 3208981980</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="team container">
                    <section id="team" >
                        <div className="team-tittle text-fount" data-aos="fade-in" data-aos-delay="100">
                            <h1 className="text-center">Equipo</h1>
                            <p className="text-center">En esta parte encontraras informacion y una foto de cada uno de los integrantes de nuestro equipo de trabajo</p>
                        </div>

                        <div className="row imagenes" >

                            <div className="col-6" >
                                <div className="member" data-aos="fade-up">
                                    <div className="team-img">
                                        <img src={person2} class="img-fluid" alt="" />
                                    </div>
                                    <div className="member-info">
                                        <h4>Daniel Jimenez</h4>
                                        <div className="social">
                                            <Link to="https://www.facebook.com/profile.php?id=100008844840628"><i className="bi bi-facebook"></i></Link>
                                            <Link to="https://www.instagram.com/i_am_j1m3n3z/"><i className="bi bi-instagram"></i></Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="member" data-aos="fade-up">
                                    <div className="team-img">
                                        <img src={person1} class="img-fluid" alt="" />
                                    </div>
                                    <div className="member-info">
                                        <h4>Elias Narvaez</h4>
                                        <div className="social">
                                            <Link to="https://www.facebook.com/profile.php?id=100008844840628"><i className="bi bi-facebook"></i></Link>
                                            <Link to="https://www.instagram.com/i_am_j1m3n3z/"><i className="bi bi-instagram"></i></Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default Inicio