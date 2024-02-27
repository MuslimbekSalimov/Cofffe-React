import "./Sign.scss";
import Ios from "../img/ios.png"
import Android from "../img/android.svg"

function Sign() {
    return (
        <>
        <section className="sign">
            <div className="container">
                <h5 className="sign__heading">Sign up and <br/> Scoot off today</h5>
                <picture>
                    <img src={Ios} alt="Ios" />
                    <img src={Android} alt="Android" />
                </picture>
            </div>
        </section>
        </>
    )
}

export default Sign;