import "./collapse.scss"

function collapse(props)  {
    return (
        <div className="collapse">
                    <p className="descriptiontitle">
                        <span>{props.title}</span>
                        <i className="fa-solid fa-chevron-up"></i>
                        </p>
                    <p className="descriptiontext">{props.content}</p>
                    </div>
    )
}

export default collapse;