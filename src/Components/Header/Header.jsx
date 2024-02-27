import "./Header.scss"
import Logo from "../img/logo.svg"
import React from "react";
import BestImg from '../img/download.jpg'

function Header() {
    const xRef = React.useRef()
    return (
        <>
        <header className="header">
            <div className="container">
                <div className="header__info">
                <a className="header__link--img" href="#link">
                    <img className="header__img" src={Logo} alt="Logo" />
                </a>

                <ul className="header__list">
                    <li className="header__item">
                        <a className="header__link" href="#link">About</a>
                    </li>

                    <li className="header__item">
                        <a className="header__link" href="#link">Location</a>
                    </li>

                    <li className="header__item">
                        <a className="header__link" href="#link">Careers</a>
                    </li>
                </ul>
                </div>

                <div className="header__button--div">
                    <button ref={xRef} onClick={() => {
                        xRef.current.classList.add("block")
                    }} className="header__button">Get Scootin</button>
                </div>

                <div ref={xRef} className="modal">
                    <div className="modal__info">
                        <button className="modal__button" ref={xRef} onClick={() => {
                            xRef.current.classList.remove("block")
                        }} >X</button>
                        <h1 className="modal__heading">Welecome to Our Web site</h1>
                        <img src={BestImg} alt="BestImg" width={500} height={300}/>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header;