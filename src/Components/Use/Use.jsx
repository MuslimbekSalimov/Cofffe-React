import "./Use.scss"
import UseImf from "../img/useImg.png"

function Use() {
    return(
        <>
        <section className="use">
            <div className="container">
                <div className="use__info">
                    <h3 className="use__heading">Easy to use <br/> <span>  riding telemetry</span></h3>
                    <p className="use__text">The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.</p>
                    <button className="header__button">Learn More</button>
                </div>

                <picture>
                    <img src={UseImf} alt="Useimg" />
                </picture>
             </div>    
         </section>
        </>
    )
}

export default Use;