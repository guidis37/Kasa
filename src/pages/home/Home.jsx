import Banner from "../../components/banner/Banner"
import Card from "../../components/card/Card"
import "./home.scss"


export default function Home (){
    return (
        <div className="home">
            <Banner />
            <Card />
        </div>
    )
}