import "./Zero.scss"
import ZeroImg from "../img/zeroImg.png"

function Zero() {
    return(
        <>
        <section className="zero">
            <div className="container">
                <div className="zero__info">
                    <h4 className="zero__heading">Zero hassle payments</h4>
                    <p className="zero__text">Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.</p>
                    <button className="header__button">Learn More</button>
                </div>

                <picture>
                    <img src={ZeroImg} alt="ZeroImg" />
                </picture>
            </div>
        </section>
        </>
    )
}

export default Zero;