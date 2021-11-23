import { Link } from "react-router-dom";
import "../components/Components.css"

const Footer = () => {
  return (
    <div className="footer">
        <div>
            <div className="bg p-2 navbar-fixed-bottom ">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="">
                        <Link to="/inicio" 
                        className="nav-link px-3 text-light">
                            Inicio
                        </Link>
                    </li>
                    <li className="">
                        <Link to="/registro" 
                        className="nav-link px-3 text-light">
                            Registro
                        </Link>
                    </li>
                    <li className="">
                        <Link to="/agregar" 
                        className="nav-link px-3 text-light">
                            Agregar
                        </Link>
                    </li>
                    <li className="">
                        <Link to="/login" 
                        className="nav-link px-3 text-light">
                            Login
                        </Link>
                    </li>
                </ul>
                <p className="text-light text-center">
                    {new Date().getFullYear()} & copyright by J1M3N3Z
                </p>
            </div>
        </div>
    </div> 
  );
};

export default Footer;