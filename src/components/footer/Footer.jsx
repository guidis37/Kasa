import "./Footer.scss"
import Logofooter from "../../assets/logoblack.png"

function Footer() {
    return <div className="footer">
        <div className="footer__logo">
            <img src={Logofooter} alt="logofooter" width="100" />
        </div>
        <div className="footer__text">© 2020 Kasa. All rights reserved</div>
    </div>
}

export default Footer;