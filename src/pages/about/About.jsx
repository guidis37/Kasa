import Banner from "../../components/banner/Banner"
import Collapse from "../../components/collapse/collapse"
import "./about.scss"

export default function About (){
    return (
    <div>
        <div className="bannercontainer">
            <Banner />
        </div>
        <div className="aboutcontainer">
            <Collapse />
            <Collapse />
            <Collapse />
            <Collapse />
        </div>
    </div>
        
        
    )
}