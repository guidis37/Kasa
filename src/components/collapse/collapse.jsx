import "./collapse.scss"
import { useState } from "react";

function Collapse(props)  {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="collapse">
                    <p className="descriptiontitle" onClick={() => setIsOpen(!isOpen)}>
                        <span>{props.title}</span>
                        <i className={isOpen ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
                        </p>
                    <p className={isOpen ? 'collapse_content' : 'collapse_content_hidden'}>{props.content}</p>
                    
                    </div>
    )
}

export default Collapse;