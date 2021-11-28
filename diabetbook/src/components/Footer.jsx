import { Link } from "react-router-dom";
import "../components/Components.css"
import misiontic from "../assets/misiontic.png"

const Footer = () => {
  return (
    <div className="footer">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <svg className="bi" width="30" height="24"></svg>
          </Link>
          <span className="text-muted span-text">© 2021 DiabetBook</span>   
        </div>

        

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><Link className="text-muted" to="#"><i class="bi bi-facebook"></i></Link></li>
          <li className="ms-3"><Link className="text-muted" to="#"><svg class="bi" width="24" height="24"></svg></Link></li>
          <li className="ms-3"><Link className="text-muted" to="#"><svg class="bi" width="24" height="24"></svg></Link></li>
          <a href="https://www.instagram.com/i_am_j1m3n3z/"><i class="bi bi-instagram"></i></a>
        </ul>
        <div className="footer-img">
            <img src={misiontic} class="img-fluid" alt=""/>
        </div>
      </footer>
    </div>
  );
};

export default Footer;