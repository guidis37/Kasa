import "./carousel.scss"

function carousel(props) {
    return (
        <div className="carouselcontainer">
        <img src= {props.imageUrl} alt="" />
    </div>
    )
}

export default carousel