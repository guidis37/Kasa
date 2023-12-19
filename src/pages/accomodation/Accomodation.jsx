import "./accomodation.scss"
import Collapse from "../../components/collapse/collapse"
import Carousel from "../../components/carousel/carousel"
import { useParams } from 'react-router-dom'; 

export default function Accomodation() {

        let {id} = useParams();

  

    fetch("/data.json")
    .then((res) => res.json())
    .then((flats) => {
        const flat = flats.find(flat => flat.id === id);

        if (flat == null) return <div>Loading...</div>;

        const name = flat.host.name;
        console.log(name)
        const [firstName, lastName] = name.split(" ");
            return (
        
                <div className="accomodation">
                    <Carousel pictures={flat.pictures}/>
                    <div className="flatheader">
                        <div className="accomodationtitle">
                            <h1>{flat.title}</h1>
                            <h2>{flat.location}</h2>
                            <div className="tags">
                            {flat.tags.map((tag) => (
                                <span key={tag}>{tag}</span>
                            )
                            )}
                            </div>
                        </div>
                        <div className="flatowner">
                            <div className="flatownerbadge">
                                <h3>
                                    <span>{firstName}</span>
                                    <span>{lastName}</span>
                                 </h3>
                                <div className="badge">
                                <img src={flat.host.picture} alt="" />
                                </div>
                            </div>
                            <div className="accomodationstars">
                            {[1, 2, 3, 4, 5].map((num) => (
                                <span key={num} className={flat.rating >= num ? "on" : "" }>★</span>
                            ))}
                            </div>
                            </div>
                    </div>
                    <div className="collapsecontainer">
                    <Collapse title="Description" content={flat.description} />
                    <Collapse title="Equipements" content={flat.equipments.map((eq) => (
                            <li key={eq}>{eq}</li>
                    ))} />
                    </div>
        
                    
        
                </div>
            )

    })
    .catch(console.error)

}

