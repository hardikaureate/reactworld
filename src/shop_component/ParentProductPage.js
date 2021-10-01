import React from 'react'
import ProductPage from './ProductPage'
import HomeTextBanner from '../components/HomeTextBanner'
import HomeContact from '../components/HomeContact'
import PDPAdsContent from './PDPAdsContent'
import PDPCustLove from './PDPCustLove'
import PDPYoutube from './PDPYoutube'
import Testimonial from '../components/slider/Testimonial'

const ParentProductPage = () => {
    return (
        <>
            <ProductPage />
            <PDPCustLove />
            <PDPAdsContent />
            <PDPYoutube />
            <Testimonial />
            <HomeTextBanner />
            <HomeContact />
        </>
    )
}

export default ParentProductPage
