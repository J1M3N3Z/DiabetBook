import React from "react";
import "../Inicio/Inicio.css"
import Navbar from "../../components/navbar"
import Footer from "../../components/Footer"

const Inicio = () => {
    return(
    <div className="inicio" id="inicio">
        <Navbar/>
            <h1>
                importante
            </h1>
        <Footer/>
    </div>
    )
}

export default Inicio