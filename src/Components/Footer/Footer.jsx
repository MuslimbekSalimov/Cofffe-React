import "./Footer.scss"
import FooterLogo from '../img/footerLogo.png'
import Facebook from '../img/FAcebook.png'
import Twitter from "../img/Twitter.png"
import Instagram from "../img/Inastagram.png"

function Footer() {
    return (
        <>
        <footer className="footer">
            <div className="container">
                <div className="footer__info">
                <a href="#logo">
                    <img className="footer__logo--img" src={FooterLogo} alt="FooterLogo" />
                </a>

                <ul className="list">
                    <li className="item"> 
                        <a className="header__link" href="#Link">About</a>
                    </li>

                    <li className="item"> 
                        <a className="header__link" href="#Link">Location</a>
                    </li>

                    <li className="item"> 
                        <a className="header__link" href="#Link">Careers</a>
                    </li>
                </ul>
                </div>

                <picture>
                    <img src={Facebook} alt="Facebook" />
                    <img src={Twitter} alt="Twitter" />
                    <img src={Instagram} alt="Instagram" />
                </picture>
            </div>
        </footer>
        </>
    )
}

export default Footer;