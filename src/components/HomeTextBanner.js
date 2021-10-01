import React from 'react'
import { Link } from 'react-router-dom'

const HomeTextBanner = () => {
    return (
        <>
            <div id="wrapper">
                <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2 className="animate__animated animate__fadeInUp">What You Want from Aureate...</h2>
                        </header>
                        <p className="animate__pulse animate__animated">Customers are ever-evolving, and your business needs to behave proactively to win them. Profit-driven eCommerce stores need strategies aligned with user expectations and technically capable enough to scale - we understand this very well. ur experts will give you a detailed road map to win the complex world of commerce.</p>
                        <ul className="actions">
                            <li><Link to="/contact" className="button next animate__zoomIn animate__animated">Talk to us</Link></li>
                        </ul>
                    </div>
                </section>
            </div>
        </>
    )
}

export default HomeTextBanner
