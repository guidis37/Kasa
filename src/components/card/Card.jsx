import "./card.scss"
import Flat from "../flat/Flat"
import { useEffect, useState } from "react"


function Card() {
    const [datas, setDatas] = useState([]);

    useEffect(fetchData, [])

    function fetchData() {
        fetch("data.json")
            .then((res) => res.json())
            .then((res) => setDatas(res))
            .catch(console.error)
    }

    return <div className="card">
     {datas.map(data => {
                return (
                    <Flat
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
    </div>
}

export default Card;