import { Link } from "react-router-dom";
import "../components/Components.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="bg-dark p-1 navbar-fixed-bottom ">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="">
                    <Link to="/" 
                    className="nav-link px-3 text-muted">
                        Inicio
                    </Link>
                </li>
                <li className="">
                    <Link to="/registro" 
                    className="nav-link px-3 text-muted">
                        Registro
                    </Link>
                </li>
                <li className="">
                    <Link to="/añadir" 
                    className="nav-link px-3 text-muted">
                        Añadir
                    </Link>
                </li>
                <li className="">
                    <Link to="/login" 
                    className="nav-link px-3 text-muted">
                        Login
                    </Link>
                </li>
                <li className="">
                    <Link to="/" 
                    className="nav-link px-3 text-muted">
                        Inicio
                    </Link>
                </li>
            </ul>
            <p className="text-muted text-center">
                {new Date().getFullYear()}
            </p>
        </div>
    </div> 
  );
};

export default Footer;