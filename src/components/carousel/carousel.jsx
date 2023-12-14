import "./carousel.scss"
import React, { useState } from 'react';

function Carousel(props) {
    const pictures= props.pictures;

    const [currentPicture, setCurrentPicture] = useState(0)

    const getClassName = (i) => {
        if (i === currentPicture) return "show";
        return "";
    };

    const moveToNext = () => {
        setCurrentPicture((currentPicture + 1) % pictures.length);
    };

    const moveToPrevious = () => {
        const newCurrentPicture = currentPicture - 1;
        if (newCurrentPicture < 0) {
            setCurrentPicture(pictures.length - 1);
            return;
        }
            setCurrentPicture(currentPicture - 1);
    };
    return (
        <div className="carouselcontainer">
        <div className="imagecontainer">  
             {pictures.map((pic, i) => (
                <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
             ))}
        </div>
            <button className="btn previous" onClick={moveToPrevious}>
                <i className="fas fa-chevron-left"></i>
            </button>
            <span className="slidecounter">
            {currentPicture + 1} / {pictures.length}
            </span>
            <button className="btn next" onClick={moveToNext}>
                <i className="fas fa-chevron-next"></i>
            </button>
    </div>
    )
}

export default Carousel