import { Link } from "react-router-dom";
import "./flat.scss"

function Flat(props){

    return  (
        <Link
         to={`/accomodation/${props.id}`}

          className="flat">
        <img src={props.cover} alt={props.title} />
			<h3>{props.title}</h3>
        </Link>
    )
}

export default Flat;