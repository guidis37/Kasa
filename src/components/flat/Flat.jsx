import { NavLink } from "react-router-dom";
import "./flat.css"

function Flat(){
    return <div className="flat">
        <NavLink to="/accomodation" style={{ textDecoration: 'none' }}>
        <div className="titleflat">Titre de la location</div>
        </NavLink>
    </div>
}

export default Flat;