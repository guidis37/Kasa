import "./card.css"
import Flat from "../flat/Flat"
import Datas from "../../data/data"

function Card() {
    return <div className="card">
     {Datas.map(data => {
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