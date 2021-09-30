import React from 'react'
import AboutBanner from '../components/AboutBanner'
import AboutCont from '../components/AboutCont'
import HomeContact from '../components/HomeContact'
import LazyLoad from 'react-lazyload'
const About = () => {
    return (
        <div>
            <LazyLoad throttle={200} height={500}>
                <AboutBanner />
            </LazyLoad>
            <LazyLoad height={500}>
                <AboutCont />
            </LazyLoad>
            <LazyLoad height={500}>
                <HomeContact />
            </LazyLoad>
        </div>
    )
}

export default About
