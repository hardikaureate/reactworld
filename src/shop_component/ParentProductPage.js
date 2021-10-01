import React from 'react'
import ProductPage from './ProductPage'
import HomeTextBanner from '../components/HomeTextBanner'
import HomeContact from '../components/HomeContact'

const ParentProductPage = () => {
    return (
        <>
            <ProductPage />
            <HomeTextBanner />
            <HomeContact />
        </>
    )
}

export default ParentProductPage
