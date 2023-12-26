import "./accomodation.scss"
import Collapse from "../../components/collapse/collapse"
import Carrousel from "../../components/carrousel/carrousel"
import { useParams } from 'react-router-dom'; 
import React, { useState, useEffect} from "react";
import Error from "../error/Error";

export default function Accomodation() {

        const {id} = useParams();
        const [flatData, setFlatData] = useState(null);

  
useEffect(() => {


    fetch("/data.json")
    .then((res) => res.json())
    .then((flats) => {
        const flat = flats.find(flat => flat.id === id);
        console.log(flat.host.name)


        if(flat == null) {

        return <div>Loading...</div>;
        }
        else {setFlatData(flat)}
        })
    .catch(console.error)
},[id])



            return (
        
               <>
               {
                flatData ? (
                <>
                <div className="accomodation">
                    <Carrousel pictures={flatData.pictures}/>
                        <div className="flatheader">
                            <div className="accomodationtitle">
                                <h1>{flatData.title}</h1>
                                <h2>{flatData.location}</h2>
                                <div className="tags">
                                {flatData.tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                )
                                )}
                                </div>
                            </div>
                        
                            <div className="flatowner">
                                <div className="flatownerbadge">
                                    <h3>
                                        <span>{flatData.host.name}</span>

                                    </h3>
                                    <div className="badge">
                                    <img src={flatData.host.picture} alt="" />
                                    </div>
                                </div>
                                <div className="accomodationstars">
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <span key={num} className={flatData.rating >= num ? "on" : "" }>★</span>
                                ))}
                                </div>
                            </div>
                        </div>
                    <div className="collapsecontainer">
                        <Collapse title="Description" content={flatData.description} />
                        <Collapse title="Equipements" content={flatData.equipments.map((eq) => (
                            <li key={eq}>{eq}</li>
                    ))} />
                    </div>
                    </div>    
                </>
                                    ) : (<Error />)
                                }
                           </>         
            )

    }
/*

*/

        

