import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flexx-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link className="navbar-brand text-white" to="/">
                         Inicio
                    </Link>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"> 
                        <li>
                            <Link className="text-secondary nav-link px-2" 
                                activeClassname="text-white"
                                to="/Registro">
                                    Registro
                            </Link>
                        </li>  
                        <li>
                            <Link className="text-secondary nav-link px-2" 
                             activeClassname="text-white"
                             exact
                             to="/Añadir">
                                    Añadir
                            </Link>
                        </li>
                        <li>
                            <Link className="text-secondary nav-link px-2" 
                            activeClassname="text-white"
                             exact
                            to="/login">
                                     Login
                            </Link>
                        </li> 
                    </ul>
                </div>
            </div>
        </header>
    )}

export default NavBar;