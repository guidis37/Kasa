import { NavLink } from "react-router-dom";
import "./flat.scss"

function Flat({id, title, cover}){
    return  (
        <NavLink to="/accomodation/{id}" className="flat">
        <img src={cover} alt={title} />
			<h3>{title}</h3>
        </NavLink>
    )
}

export default Flat;