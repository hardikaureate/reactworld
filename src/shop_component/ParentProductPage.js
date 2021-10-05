import React from 'react'
import ProductPage from './ProductPage'
import HomeTextBanner from '../components/HomeTextBanner'
import PDPAdsContent from './PDPAdsContent'
import PDPCustLove from './PDPCustLove'
import PDPYoutube from './PDPYoutube'
import Testimonial from '../components/slider/Testimonial'
import PDPProductReview from './PDPProductReview'
import PDPRelatedProduct from '../components/slider/PDPRelatedProduct'
import RegisterForm from '../components/RegisterForm'

const ParentProductPage = () => {
    return (
        <>
            <ProductPage />
            <PDPCustLove />
            <PDPAdsContent />
            <PDPYoutube />
            <Testimonial />
            <PDPProductReview />
            <PDPRelatedProduct title="Related Sacheu Products"/>
            <HomeTextBanner />
            <RegisterForm />
        </>
    )
}

export default ParentProductPage
