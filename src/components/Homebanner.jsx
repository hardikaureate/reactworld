import React from "react"
import { Link } from "react-router-dom"
//import HomeContact from './HomeContact'
//import InnerMenu from './InnerMenu'

const Homebanner = () => {
    return (
        <div>
            <div id="wrapper">
                {/* <!-- Banner --> */}
                <section id="banner" className="major">
                    <div className="inner">
                        <header className="major">
                            <h1 className="animate__animated animate__fadeInUp">
                                Hi, I'm HARDIK DEVANI
                            </h1>
                        </header>
                        <div className="content">
                            <p className="animate__animated animate__slideInDown">
                                Creating awesome digital experiences for online <br />
                                stores using Headless Commerce & PWA.
                            </p>
                            <ul className="actions">
                                <li>
                                    <Link
                                        to="/about"
                                        className="button next scrolly animate__zoomIn animate__animated">
                                        Get Started
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Homebanner
