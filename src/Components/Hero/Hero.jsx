import "./Hero.scss"
import LeftRight from "../img/right.svg";
import BigWall from "../img/bigwall.svg";
import Matat from "../img/download.png"
import React from "react";

function Hero() {
    const xRef = React.useRef()
    return (
        <>
        <section className="hero">
            <div className="container">
                <div className="hero__info">
                    <h1 className="hero__heading">Scooter sharing <br/> made simple</h1>
                    <div className="hero__img--info">
                        <img className="hero__img--left" src={LeftRight} alt="LeftRight" />
                        <div className="text__div">
                        <p className="hero__text">Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!</p>
                        <button ref={xRef} onClick={() => {
                            xRef.current.classList.add("block")
                        }} className="hero__button">Get Scootin</button>
                        </div>
                        <img className="hero__big--img" src={BigWall} alt="wallbig" />
                    </div>
                </div>

                <div ref={xRef} className="hero__modal">
                    <div className="hero__modal--info">
                        <button className="hero__modal--button" ref={xRef} onClick={() => {
                            xRef.current.classList.remove("block")
                        }}>X</button>
                        <h2 className="hero__modal--heading">Matatsikl haydashni o'rganish uachun</h2>
                        <img src={Matat} alt="Matat"  width={500} height={200} />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Hero;