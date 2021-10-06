import React from 'react'
import { Link } from 'react-router-dom'

const AboutCont = () => {
    return (
        <>
            <div id="main">
                {/* <!-- Two --> */}
                <section id="two" className="spotlights">
                    <section>
                        <Link to="/" className="image animate__animated animate__zoomIn effect_lily">
                            <img src="images/vision.jpg" alt="" data-position="center center" />
                            <figcaption>
                                <div>
                                    <h2>Our <span>Vision</span></h2>
                                    <p>Best eCommerce Company in Surat</p>
                                </div>
                            </figcaption>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3 className="animate__animated animate__fadeInUp">VISION</h3>
                                </header>
                                <p className="animate__animated animate__slideInDown">Build the best eCommerce web-app and solution which increase clients' business.We develop according to the market trend to make your business more convenient for your customers.</p>
                                <ul className="actions">
                                    <li><Link to="/portfolio" className="button animate__zoomIn animate__animated">Learn more</Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link to="/" className="image animate__animated animate__zoomIn effect_lily">
                            <img src="images/mission.jpg" alt="" data-position="top center" />
                            <figcaption>
                                <div>
                                    <h2>Our <span>Mission</span></h2>
                                    <p>eCommerce solution for clients</p>
                                </div>
                            </figcaption>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3 className="animate__animated animate__fadeInUp">MISSION</h3>
                                </header>
                                <p className="animate__animated animate__slideInDown">To deliver an eCommerce solution for clients in a reliable manner using a suitable technology stack.Customer success is our success and we are always in a quest to providing the best to our customers, even it takes to go extra miles.</p>
                                <ul className="actions">
                                    <li><Link to="/portfolio" className="button animate__zoomIn animate__animated">Learn more</Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link to="/" className="image animate__animated animate__zoomIn effect_lily">
                            <img src="images/core-values.png" alt="" data-position="25% 25%" />
                            <figcaption>
                                <div>
                                    <h2>Core <span>Values</span></h2>
                                    <p>We are committed to deliver the best quality</p>
                                </div>
                            </figcaption>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3 className="animate__animated animate__fadeInUp">Core Values</h3>
                                </header>
                                <p className="animate__animated animate__slideInDown">We are committed to deliver the best quality work and provide pleasing customer support whenever needed.We optimize your requirement with best analysis and that will add more advancement in building something good.</p>
                                <ul className="actions">
                                    <li><Link to="/portfolio" className="button animate__zoomIn animate__animated">Learn more</Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>

                {/* <!-- Three --> */}
                <section id="three">
                    <div className="inner">
                        <header className="major">
                            <h2 className="animate__animated animate__fadeInUp">Planning</h2>
                        </header>
                        <p className="animate__animated animate__slideInDown">Our team of professionals utilizes available resources and technology to plan and present business design.We embrace the challenge of learning new technology or methodology to excel in what we do.</p>
                        <ul className="actions">
                            <li><Link to="/contact" className="button next animate__zoomIn animate__animated">Get Started</Link></li>
                        </ul>
                    </div>
                </section>
            </div>
        </>
    )
}

export default AboutCont
