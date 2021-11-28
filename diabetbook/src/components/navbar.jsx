import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"

const NavBar = () => {
    return (
        <header className="p-3 bg-dark text-white">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <Link to="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap" src={Logo}/>
        </Link>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 navbar-font">
          <li><Link to="/Inicio" className="nav-link px-2 text-white ">Inicio</Link></li>
          <li><Link to="/registro" className="nav-link px-2 text-white">Registro</Link></li>
          <li><Link to="/Agregar" className="nav-link px-2 text-white">Agregar</Link></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="navbar-button">
            <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
            <button 
                type="button" className="btn btn-outline-light me-2">
                Sign-up
            </button>
            
        </div>
      </div>
    </div>
  </header>
        
        
    )}

export default NavBar;