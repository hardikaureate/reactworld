import React from 'react'
import RegisterForm from '../components/RegisterForm'
import ShopProducts from '../shop_component/ShopProducts'

const MainShop = () => {
    return (
        <>
            <div id="wrapper">
                <section id="banner" className="style2">
                    <div className="inner">
                        <span className="image">
                            <img src="images/pic07.jpg" alt="" />
                        </span>
                        <header className="major">
                            <h1 className="animate__animated animate__fadeInUp">Aureate Shop</h1>
                        </header>
                        <div className="content animate__pulse animate__animated">
                            <p>Codeworks flagged in 2009 with a clear vision of serving best to our clients with<br /> latest technology solutions to tackle the challenges of the modern market.</p>
                        </div>
                    </div>
                </section>

                <section id="two">
                    <div className="inner">
                        <div class="box alt">
                            <div class="gtr-50 gtr-uniform">
                                <ShopProducts />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <RegisterForm />
        </>
    )
}

export default MainShop
