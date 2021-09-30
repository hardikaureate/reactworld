import React from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

const Footer = () => {
    return (
        <>
            <div id="wrapper">
                <footer id="footer">
                    <div className="inner mainfooter">
                        <div className="footerOne">
                            <ul className="icons">
                                <li><a href="https://twitter.com/hardik171192" target="_blank" className="icon brands alt fa-twitter"><span className="label">Twitter</span></a></li>
                                <li><a href="https://www.facebook.com/hardik.2626/" target="_blank" className="icon brands alt fa-facebook-f"><span className="label">Facebook</span></a></li>
                                <li><a href="https://www.instagram.com/hardikdevani/" target="_blank" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
                                <li><a href="https://github.com/hardikaureate" target="_blank" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
                                <li><a href="https://in.linkedin.com/in/hardik-devani-4b9335b0" target="_blank" className="icon brands alt fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
                            </ul>
                            <ul className="copyright">
                                <li>© {(new Date().getFullYear())} Hardik Devani</li><li>Design: <a target="_blank" href="https://hardik2626.github.io/reactlive">HD's Developer</a></li>
                            </ul>
                        </div>
                        <div className="footerTwo">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1206.1473713674466!2d72.82173637828168!3d21.18154719280015!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf7f61d1fcb814eb6!2sAureate%20Labs!5e0!3m2!1sen!2sin!4v1632722938248!5m2!1sen!2sin" width="100%" height="250" style={{ border: '0' }} allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>

                </footer>
            </div>
        </>
    )
}

export default Footer
