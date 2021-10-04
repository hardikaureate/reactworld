import React from 'react';
import { Link } from 'react-router-dom'
import HomeTextBanner from './HomeTextBanner'

const InnerMenu = () => {
    
    return (
        <div>
            <div id="main">

                {/* <!-- One --> */}
                <section id="one" className="tiles">
                    <article>
                        <span className="image">
                            <img src="images/pic01.jpg" alt="" />
                        </span>
                        <header className="major">
                            <h3><Link to="/portfolio" className="link animate__animated animate__fadeInUp">Customer First Experience</Link></h3>
                            <p className="animate__animated animate__slideInDown">In the end, we want a business, which driven by customers.</p>
                        </header>
                    </article>
                    <article>
                        <span className="image">
                            <img src="images/pic02.jpg" alt="" />
                        </span>
                        <header className="major">
                            <h3><Link to="/portfolio" className="link animate__animated animate__fadeInUp">Ingenious innovation</Link></h3>
                            <p className="animate__animated animate__slideInDown">We constantly experiment and evaluate the headless commerce</p>
                        </header>
                    </article>
                    <article>
                        <span className="image">
                            <img src="images/pic03.jpg" alt="" />
                        </span>
                        <header className="major">
                            <h3><Link to="/portfolio" className="link animate__animated animate__fadeInUp">Agility and speed</Link></h3>
                            <p className="animate__animated animate__slideInDown">We believe in the world of eCommerce "speed" defines the winner.</p>
                        </header>
                    </article>
                    <article>
                        <span className="image">
                            <img src="images/pic04.jpg" alt="" />
                        </span>
                        <header className="major">
                            <h3><Link to="/portfolio" className="link animate__animated animate__fadeInUp">Experience worth a decade</Link></h3>
                            <p className="animate__animated animate__slideInDown">Our team of experts have experience in their respective fields</p>
                        </header>
                    </article>
                    <article>
                        <span className="image">
                            <img src="images/pic05.jpg" alt="" />
                        </span>
                        <header className="major">
                            <h3><Link to="/portfolio" className="link animate__animated animate__fadeInUp">eCommerce agency</Link></h3>
                            <p className="animate__animated animate__slideInDown">We build customer-first digital commerce experience for international brands</p>
                        </header>
                    </article>
                    <article>
                        <span className="image">
                            <img src="images/pic06.jpg" alt="" />
                        </span>
                        <header className="major">
                            <h3><Link to="/portfolio" className="link animate__animated animate__fadeInUp">Less friction, More sell</Link></h3>
                            <p className="animate__animated animate__slideInDown">We help to increasing eCommerce store conversion rates.</p>
                        </header>
                    </article>
                </section>

                {/* <!-- Two --> */}
                <HomeTextBanner />

            </div>
        </div>
    )
}

export default InnerMenu
