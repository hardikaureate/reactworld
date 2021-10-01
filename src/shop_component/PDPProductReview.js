import React, {useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const PDPProductReview = () => {

    const { handle } = useParams()
    const { fetchProductWithHandle, product } = useContext(ShopContext)
    useEffect(() => {
        fetchProductWithHandle(handle)
    }, [fetchProductWithHandle, handle])

    let extractedInfo = "";
    if (product.id) {
        const buff = Buffer.from(product?.id, 'base64');
        const decodedId = buff.toString('ascii');
        extractedInfo = decodedId.split(/[\s/]+/).pop();
    }

    return (
        <>
            {/* <div id="wrapper" className="proreviewsection">
                <div className="inner">
                    <div className="instascript">
                        <div class="yotpo yotpo-main-widget" data-product-id={extractedInfo} data-price="35.00" data-currency="USD" data-name={product.title} data-url={`/products/${product.handle}`} data-image-url=""
                            data-description="" style={{ width: '90%', padding: '35px 0' }}>
                        </div>
                        <div style={{ margin: '0 0 1em 0' }}>
                            <klarna-placement data-key="credit-promotion-auto-size" data-purchase-amount="3500" data-preloaded="true" data-locale="en-US">
                                <div style={{ height: 'auto', width: '100%', display: 'block' }}></div>
                                <link rel="stylesheet" href="https://x.klarnacdn.net/ui/fonts/v1.3/fonts.css" />
                            </klarna-placement>
                        </div>
                    </div>
                </div>
            </div> */}
            <div id="wrapper" className="proreviewsection">
                <div className="inner">
                    <div className="instascript">
                        <div class="yotpo yotpo-main-widget" data-product-id="4746070032433" data-price="35.00" data-currency="USD" data-name="Gua Sha - Stainless Steel" data-url="https://sacheu.com/products/gua-sha" data-image-url="https://cdn.shopify.com/s/files/1/0257/7583/3137/products/sacheu-gua-sha-gua-sha-stainless-steel-15395624288305_large.jpg%3Fv=1623381821"
                            data-description="" style={{ width: '90%', padding: '35px 0' }}>
                        </div>
                        <div style={{ margin: '0 0 1em 0' }}>
                            <klarna-placement data-key="credit-promotion-auto-size" data-purchase-amount="3500" data-preloaded="true" data-locale="en-US">
                                <div style={{ height: 'auto', width: '100%', display: 'block' }}></div>
                                <link rel="stylesheet" href="https://x.klarnacdn.net/ui/fonts/v1.3/fonts.css" />
                            </klarna-placement>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PDPProductReview
