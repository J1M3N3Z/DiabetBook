import "./Home.css"
import { Link } from "react-router-dom";
import React from "react";


const Home = () =>{
    return (
        <React.Fragment>
        <div className="home" id="home">
            <div className="home-container" >
                <h1>BIENVENIDO A DIABETBOOK</h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <Link to="/inicio" className="btn-get-started scrollto" type="button">
                    <i className="bx bx-chevrons-down"></i>
                </Link>
            </div>
        </div>
        </React.Fragment>
    );
}

export default Home 