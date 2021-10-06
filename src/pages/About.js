import React from 'react'
import AboutBanner from '../components/AboutBanner'
import AboutCont from '../components/AboutCont'
import LazyLoad from 'react-lazyload'
import RegisterForm from '../components/RegisterForm'
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
                <RegisterForm />
            </LazyLoad>
        </div>
    )
}

export default About
