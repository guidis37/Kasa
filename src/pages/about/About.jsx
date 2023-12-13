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
            <Collapse title="Fiabilité" content="Un peu de texte" />
            <Collapse title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
            <Collapse title="Service" content="Un peu de texte" />
            <Collapse title="Sécurité" content="Un peu de texte" />
        </div>
    </div>
        
        
    )
}