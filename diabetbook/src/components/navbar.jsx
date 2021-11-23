import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        
        <header className="navbar">
            <div className="p-3 bg text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <img src="../assets/logo.png" alt="" />
                        <Link className="navbar-brand text-light" 
                            to="/Inicio">
                                Inicio
                        </Link>
                            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"> 
                                <li>
                                    <Link 
                                        className="text-secondary nav-link px-2 text-light"
                                        uppercase 
                                        to="/Registro">
                                            Registro
                                    </Link>
                                </li>  
                                <li>
                                    <Link 
                                        className="text-secondary nav-link px-2 text-light" 
                                        exact to="/Agregar">
                                            Agregar
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        className="text-secondary nav-link px-2 text-light" 
                                        exact to="/login">
                                            Login
                                    </Link>
                                </li>
                                <li>
                                    <input 
                                        className="form-control px- text-dark" 
                                        type="search" placeholder="Search" 
                                        aria-label="Search"/>
                                </li>
                                <button className="btn btn-outline-light text-dark" type="submit" >
                                    Buscar
                                </button>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        
    )}

export default NavBar;