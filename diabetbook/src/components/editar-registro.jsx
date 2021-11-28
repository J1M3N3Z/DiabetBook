import { Link } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./navbar"

const Editar = () => {
    return (
        <div>
            <Navbar />
            <div className="editar-section">
                <section id="editar">
                    <div className="editar-container">
                        <div className="row no-gutters">
                            <div
                                className="col-xl-5 d-flex align-items-stretch"
                                data-aos="fade-up">
                                <div className="editar-content">
                                    <Link to="/agregar" className="editar-btn btn-outline-secondary"
                                    >Regresar <i className="bx bx-chevron-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <h3 className="editar-tittle text-center">Editar Registro</h3>
                <input
                    type="text"
                    className="form-control my-2"
                    placeholder="Nombre"
                    v-model="noticia.nombre" />
                <input
                    type="text"
                    className="form-control my-2"
                    placeholder="Descripcion"
                    v-model="noticia.descripcion" />

                <button className="btn btn-dark my-2 " type="submit">Editar</button>
            </div>
            <Footer />
        </div>
    )
}

export default Editar