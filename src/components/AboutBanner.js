import React, { useState } from 'react'
import Modal from './model/Model'

const AboutBanner = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div id="wrapper">
                <div id="main" class="alt">

                    <section id="one">
                        <div class="inner">
                            <header class="major">
                                <h1 className="animate__animated animate__fadeInUp">About</h1>
                            </header>

                            {/* <img className="image main" onClick={() => setShow(true)} src="images/MERN.jpg" alt="" />
                            <Modal show={show} onClose={() => setShow(false)}>
                                <span className="image main"><img src="images/MERN.jpg" alt="" /></span>
                            </Modal> */}
                            <span className="image main"><img src="images/MERN.jpg" alt="" /></span>
                            <p className="animate__animated animate__slideInDown">At Codeworks we are digital explorers. Technology is the ship in which we travel, navigating the waters of the digital domain, as well as the precious cargo we deliver. As critical thinkers and problem solvers, development is the wind in our sails. There are no borders to what we can discover and create, and no limits to what we can do for you. We aim high to meet your standards and get you results.</p>
                            <p className="animate__animated animate__slideInDown">Market shifts, technological developments, and increasing competition are affecting the revenue growth and operating efficiencies of companies across industries. To be successful in this fiercely challenging & competitive environment, organizations need to harness next-generation technologies & solutions to provide superior experiences to their customers.</p>
                            <p className="animate__animated animate__slideInDown">Codeworks’s capabilities across industries cover the entire spectrum, be it meeting critical demands of the Pharmaceutical industry ecosystem or leveraging advanced technology-based credit assessment tools for Banking & Financial institutions. Codeworks’s experience in enabling channel sales management in the Retail industry and setting up automation for business efficiency has transformed many businesses. Having delivered modernized software architecture for Travel & Hospitality enterprises, smart Content Management Systems for the Publishing and Education sector, and seamless communication across platforms for the Telecommunication & Media industry, Codeworks’s team has played a vital role in delivering top-notch solutions that give a competitive advantage to businesses.</p>
                        </div>
                    </section>

                </div>
            </div>
        </>
    )
}

export default AboutBanner
