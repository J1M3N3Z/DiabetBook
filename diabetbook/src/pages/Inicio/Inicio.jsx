import Navbar from "../../components/navbar"
import Footer from "../../components/Footer"
import "./Inicio.css"
import React from "react"
import { Link } from "react-router-dom"
import "../../assets/person1.jpg" 
import person1 from "../../assets/person1.jpg"

const Inicio = () => {
    return (
        <React.Fragment>
            <div className="inicio-img">
                <div >
                    <Navbar />
                    <section id="cta" class="cta">
                        <div className="container" data-aos="zoom-in">
                            <div className="text-center">
                                <h3>Linea de Atencion</h3>
                                <p> A continuacion encontraras un enlace por medio del cual te dirigiras a nuestra linea de atencion donde te podras comunicar con nosotros</p>
                                <Link className="cta-btn" to="https://api.whatsapp.com/send?phone=+573233453113">WhatsApp</Link>
                            </div>
                        </div>
                    </section>
                </div>

                <div>
                    <section id="contact" className="contact section-bg">
                        <div className="container" data-aos="fade-up">

                            <div className="section-title text-center">
                                <h2>CONTACTO</h2>
                                <p>En esta parte se encuentra tanto la informacion de contacto nuestra y tambien nuestra ubicacion mediante las cuales puedes ubicarnos o contactarnos</p>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="info-box mb-4">
                                        <i className="bx bx-map"></i>
                                        <h3>Nuestra Direccion</h3>
                                        <p>absdas</p>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="info-box  mb-4">
                                        <i className="bx bx-envelope"></i>
                                        <h3>Nuestro Correo</h3>
                                        <p>kabskdba</p>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="info-box  mb-4">
                                        <i className="bx bx-phone-call"></i>
                                        <h3>Nuestro Numero</h3>
                                        <p>+57 165165165</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="team">
                    <section id="team" >
                            <div class="team-tittle" data-aos="fade-in" data-aos-delay="100">
                                <h2 className="text-center">Equipo</h2>
                                <p className="text-center">En esta parte encontraras informacion y una foto de cada uno de los integrantes de nuestro equipo de trabajo</p>
                            </div>

                            <div className="row">

                                <div className="col-lg-4 col-md-6">
                                    <div className="member" data-aos="fade-up">
                                        <div className="team-img">
                                            <img src={person1} class="img-fluid" alt=""/>
                                        </div>
                                        <div className="member-info">
                                            <h4>Fumiko Takahashi</h4>
                                            <div className="social">
                                                <Link to="https://www.facebook.com/profile.php?id=100008844840628"><i className="bi bi-facebook"></i></Link>
                                                <Link to="https://www.instagram.com/i_am_j1m3n3z/"><i className="bi bi-instagram"></i></Link>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="member" data-aos="fade-up">
                                        <div className="team-img">
                                            <img src={person1} class="img-fluid" alt=""/>
                                        </div>
                                        <div className="member-info">
                                            <h4>Fumiko Takahashi</h4>
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