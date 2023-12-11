import { NavLink } from "react-router-dom";
import "./flat.scss"

function Flat(props){
    return  (
        <NavLink to="/accomodation/{id}" className="flat">
        <img src={props.cover} alt={props.title} />
			<h3>{props.title}</h3>
        </NavLink>
    )
}

export default Flat;