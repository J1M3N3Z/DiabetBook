const NavBar = () => {
    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flexx-wrap align-items-center justify-content-center justify-content-lg-start">
                    <children className="navbar-brand text-white" to="/">
                        Inicio
                    </children>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"> 
                        <li>
                            <children className="text-secondary nav-link px-2" 
                            activeClassname="text-white"
                            to="/Registro">
                                registro
                            </children>
                        </li>  

                        <li>
                            <children className="text-secondary nav-link px-2" 
                            activeClassname="text-white"
                            exact
                            to="/Añadir">
                                Añadir
                            </children>

                        </li>

                        <li>
                            <children className="text-secondary nav-link px-2" 
                            activeClassname="text-white"
                            exact
                            to="/login">
                                Login
                            </children>
                        </li> 
                    </ul>
                </div>
            </div>
        </header>
    )}

export default NavBar;