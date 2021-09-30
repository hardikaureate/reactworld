import React, { Suspense } from 'react';
import Homebanner from '../components/Homebanner'
import HomeContact from '../components/HomeContact'
import InnerMenu from '../components/InnerMenu'
import LazyLoad from 'react-lazyload'
import MegaSlider from '../components/MegaSlider';

// const Homebanner = React.lazy(() => import('../components/Homebanner'));
// const HomeContact = React.lazy(() => import('../components/HomeContact'));
// const InnerMenu = React.lazy(() => import('../components/InnerMenu'));

const Home = () => {
    return (
        <div>
            {/* <Suspense fallback={<div style={{ position: 'fixed', left: '0%', top: '0%', zIndex: '9999', backgroundColor: 'lavender', width: '100%', height: '100%' }}>
            </div>}> */}
            <LazyLoad height={500}>
                <Homebanner />
            </LazyLoad>
            {/* <LazyLoad height={500}>
                <MegaSlider />
            </LazyLoad> */}
            <LazyLoad height={500}>
                {/* <!-- Main --> */}
                <InnerMenu />
            </LazyLoad>
            <LazyLoad height={500}>
                {/* <!-- Contact --> */}
                <HomeContact />
            </LazyLoad>
            {/* </Suspense> */}
        </div>
    )
}
export default Home
