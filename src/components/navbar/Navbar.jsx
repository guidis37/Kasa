import { NavLink } from "react-router-dom";
import "./navbar.scss"
import Logo from "../../assets/logo.png"


function Navbar() {
    return <nav className="Navbar">
                <div className="navbar__logo">
                <img src={Logo} alt="logo" />
                </div>
            <NavLink to="/">
                <div>Accueil</div>
            </NavLink>
            <NavLink to="/about">
                <div>A propos</div>
            </NavLink>
            </nav>
}

export default Navbar;