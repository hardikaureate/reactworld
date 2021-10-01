import React from 'react';
import { Link } from 'react-router-dom'
import allarts from '../blogdata/blog.json'


const PDPAdsContent = () => {

    const bgone = allarts.article_one
    const bgtwo = allarts.article_two
    const bgthree = allarts.article_three
    const bgfour = allarts.article_four

    var article1 = { backgroundImage: 'url(/' + bgone.hoverURL + ')' }
    var article2 = { backgroundImage: 'url(/' + bgtwo.hoverURL + ')' }
    var article3 = { backgroundImage: 'url(/' + bgthree.hoverURL + ')' };
    var article4 = { backgroundImage: 'url(/' + bgfour.hoverURL + ')' };
    return (
        <div>
            <div id="main">

                {/* <!-- One --> */}
                <section id="one" className="tiles">
                    <article style={article1}>
                        <span className="image">
                            <img src="images/pic01.jpg" alt="" />
                        </span>
                        <header className="major">
                            <h3><Link to="/portfolio" className="link animate__animated animate__fadeInUp">WHY STAINLESS STEEL? </Link></h3>
                            <p className="animate__animated animate__slideInDown">Anti-bacterial - As opposed to jade and rose quartz, stainless steel is non-porous, which prevents bacteria build-up that can transfer to your skin</p>
                            <p className="animate__animated animate__slideInDown">Self-cooling - Naturally cold to the touch, you don't even need to put it in the freezer</p>
                        </header>
                    </article>
                    <article style={article2}>
                        <span className="image">
                            <img src="images/pic02.jpg" alt="" />
                        </span>
                        <header className="major">
                            <h3><Link to="/portfolio" className="link animate__animated animate__fadeInUp">THE STAINLESS STEEL GUA SHA ✨</Link></h3>
                            <p className="animate__animated animate__slideInDown">Eco-friendly - Our tools are made with recycled material and are 100% recyclable, and our beautiful packaging is made with recycled cardboard</p>
                            <p className="animate__animated animate__slideInDown">Durable - Jade and rose quartz gua shas easily break if dropped but these tools will last forever</p>
                        </header>
                    </article>

                    <article style={article4}>
                        <span className="image">
                            <img src="images/pic05.jpg" alt="" />
                        </span>
                        <header className="major">
                            <h3><Link to="/portfolio" className="link animate__animated animate__fadeInUp">HOW TO USE ✨</Link></h3>
                            <p className="animate__animated animate__slideInDown">*MUST use with a serum or a balm/oil with A LOT of slip! In a scraping motion, start from the center of your face and scrape outwards. Use the small divot on nose bridge, in between brows, and jawline and larger edges on cheeks and forehead. Use 3X a week.</p>
                        </header>
                    </article>
                    <article style={article3}>
                        <span className="image">
                            <img src="images/pic06.jpg" alt="" />
                        </span>
                        <header className="major">
                            <h3><Link to="/portfolio" className="link animate__animated animate__fadeInUp">FACIAL ROLLER </Link></h3>
                            <p className="animate__animated animate__slideInDown">**Use as part of your cleansing routine or after you’ve applied toner/serum. Start from the center of your face and roll outwards to push stagnant lymph away from the face. Use the bigger side for jaw/forehead/cheeks and the smaller side for eyes/brows. Use for 2 minutes every morning!</p>
                        </header>
                    </article>
                </section>

                {/* <!-- Two --> */}


            </div>
        </div>
    )
}

export default PDPAdsContent
