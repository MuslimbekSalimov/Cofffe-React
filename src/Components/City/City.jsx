import "./City.scss"
import CityImg from "../img/cityImg.png"

function City() {
    return(
        <>
        <section className="city">
            <div className="container">
                <picture>
                    <img src={CityImg} alt="CityImg" />
                </picture>

                <div className="city__info">
                    <h4 className="city__heading">Coming to a city near you</h4>
                    <p className="city__text">Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.</p>
                    <button className="header__button">Learn More</button>
                </div>
            </div>
        </section>
        </>
    )
}


export default  City;