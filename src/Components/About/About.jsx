import './About.scss'
import Phone from "../img/phone.svg";
import Sceles from "../img/scales.svg"


function About() {
    return (
        <>
        <section className='about'>
            <div className="container">
                <div className="about__info">
                    <ul className='about__list'>
                        <li className='about__item'>
                            <img src={Phone} alt="Phone" />
                            <h2 className='about__heading'>Locate with app</h2>
                            <p className='about__text'>Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. </p>
                        </li>

                        <li className='about__item'>
                            <img src={Sceles} alt="Phone" />
                            <h2 className='about__heading'>Pick your scooter</h2>
                            <p className='about__text'>We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost. </p>
                        </li>

                        <li className='about__item'>
                            <img src={Sceles} alt="Phone" />
                            <h2 className='about__heading'>Enjoy the ride</h2>
                            <p className='about__text'>Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps. </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    )
}

export default About;