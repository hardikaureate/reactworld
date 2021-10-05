import React from 'react'
import AllProject from '../components/Allproject'
import RegisterForm from '../components/RegisterForm'
//import CasestudyProjects from '../components/Casestudyprojects'

const About = () => {
    return (
        <>
            <div id="wrapper">
                <section id="banner" className="style2">
                    <div className="inner">
                        <span className="image">
                            <img src="images/pic07.jpg" alt="" />
                        </span>
                        <header className="major">
                            <h1 className="animate__animated animate__fadeInUp">Case Study</h1>
                        </header>
                        <div className="content animate__pulse animate__animated">
                            <p>Codeworks flagged in 2009 with a clear vision of serving best to our clients with<br /> latest technology solutions to tackle the challenges of the modern market.</p>
                        </div>
                    </div>
                </section>

                
                {/* <CasestudyProjects /> */}
                <AllProject />

                <RegisterForm />
            </div>
        </>
    )
}

export default About
