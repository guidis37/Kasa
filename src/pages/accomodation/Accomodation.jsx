import "./accomodation.scss"
import Collapse from "../../components/collapse/collapse"
import Carousel from "../../components/carousel/carousel"

export default function Accomodation (){



    return (


        <div className="accomodation">
            <Carousel />
            <div className="flatheader">
                <div className="accomodationtitle">
                    <h1>Cosy loft</h1>
                    <h2>Paris, ile de France</h2>
                    <div className="tags">
                    <span>Cozy</span>
                    <span>Canal</span>
                    <span>Paris 10</span>
                    </div>
                </div>
                <div className="flatowner">
                    <div className="flatownerbadge">
                        <h3>
                            <span>Alexandre</span>
                            <span>Dumas</span>
                         </h3>
                        <div className="badge"></div>
                    </div>
                    <div className="accomodationstars">
                    <span className="on">★</span>
                    <span className="on">★</span>
                    <span className="on">★</span>
                    <span className="off">★</span>
                    <span className="off">★</span>
                    </div>
                    </div>
            </div>
            <div className="collapsecontainer">
            <Collapse />
            <Collapse />
            </div>

            

        </div>
    )
}
