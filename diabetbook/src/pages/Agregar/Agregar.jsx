import Navbar from "../../components/navbar"
import Footer from "../../components/Footer"
import React from "react"
import "./Agregar.css"

const Agregar = () => {
    return (
        <div>
            <Navbar />
            <div className="agregar-section">
                <h3 className="agregar-tittle text-center">Agregar Noticia</h3>
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

                <button className="btn btn-dark my-2 " type="submit">Agregar</button>

            </div>
            <Footer />
        </div >
    )
}

export default Agregar