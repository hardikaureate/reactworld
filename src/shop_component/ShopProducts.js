import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import Skeleton from 'react-loading-skeleton'
import { Box, Image } from '@chakra-ui/react'
import '../assets/CSS/shoppage.css'
const ShopProducts = () => {
    const { fetchAllProducts, products, addItemToCheckout } = useContext(ShopContext)
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
        fetchAllProducts()
    }, [fetchAllProducts])
    console.log('Shop-Products', products)

    if (!products) return <div>...Loading</div>
    return (
        <>

            <Box>
                <div className="product-listing">
                    {products.map((product, i) => (
                        <>
                            <div className="itemBox" key={i}>
                                <div className="item">
                                    {product.variants[0].compareAtPrice > product.variants[0].price ? (<span className="sale">SALE</span>) : (<span></span>)}
                                    <div className="imageContainer">
                                        <Link to={`/products/${product.handle}`} key={product.id} aria-label={`Navigate to ${product.title} product page`}>
                                            {loading && <Skeleton height={306} />}
                                            {!loading && <Image src={product.images[0].src} height={316} />}
                                        </Link>
                                    </div>
                                    <div className="productInfo">
                                        <Link to={`/products/${product.handle}`}>
                                            {loading && <Skeleton height={30} />}
                                            {!loading && <h3 className="itemName">{product.title}</h3>}
                                        </Link>
                                        <p className="relatedProPrice">
                                            {loading ? <Skeleton height={30} /> : `$${product.variants[0].price}`}
                                        </p>
                                        {/* <Button mt="3%" className="cartButton" onClick={() => addItemToCheckout(product.variants[0].id, 1)}>
                                            Add To Cart
                                        </Button> */}
                                        <a href="#" className="button small fit" onClick={() => addItemToCheckout(product.variants[0].id, 1)}>
                                            Buy Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </Box>

        </>
    )
}

export default ShopProducts
