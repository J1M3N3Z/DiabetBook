import "./Home.css"
import { Link } from "react-router-dom";
import React from "react";
import { MdTouchApp } from "react-icons/md";


const Home = () =>{
    return (
        <React.Fragment>
        <div className="home" id="home">
            <div className="home-container" >
                <h1>BIENVENIDO A DIABETBOOK</h1>
                <Link to="/inicio" className="btn-get-started scrollto" type="button">
                    <i className="bx bx-chevrons-down">
                        <MdTouchApp/>
                    </i>
                </Link>
            </div>
        </div>
        </React.Fragment>
    );
}

export default Home 