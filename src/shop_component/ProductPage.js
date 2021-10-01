import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import './../assets/CSS/productpage.css'
import { ShopContext } from '../context/ShopContext'
import { Grid, Image, Text, Heading, Flex } from '@chakra-ui/react'
import Skeleton from 'react-loading-skeleton'
import NumberInput from './NumberInput'

const ProductPage = () => {
    const { handle } = useParams()
    const { fetchProductWithHandle, addItemToCheckout, product } = useContext(ShopContext)
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
        fetchProductWithHandle(handle)
    }, [fetchProductWithHandle, handle])

    const [imageclick, setImageclick] = useState(0)
    const [loading, setLoading] = useState(true)
    const [productQuantity, setProductQuantity] = React.useState(1)
    const handleProductQuantity = (quantityAsString, quantityAsNumber) => {
        setProductQuantity(quantityAsNumber)
    }

    let extractedInfo = "";
    if (product.id) {
        const buff = Buffer.from(product?.id, 'base64');
        const decodedId = buff.toString('ascii');
        extractedInfo = decodedId.split(/[\s/]+/).pop();
    }
    console.log('review-->', product)

    //    if (!product.title) return <div>Loading....</div>
    return (
        <>
            <div id="wrapper">
                <section id="two">
                    <div className="inner">
                        <div class="box alt">
                            <div class="gtr-50 gtr-uniform">
                                <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} m="auto">

                                    <div className="proLeft productImage">
                                        <div className="imageThumbnail">
                                            {product.images && product.images.map((item, i) => {
                                                return loading ? <Skeleton width={90} height={70} /> : <Image key={i} onClick={() => setImageclick(i)} className="productMainImage" src={item && item.src} width="10%" height="auto" />
                                            })}
                                        </div>
                                        <Flex className="productImg" justifyContent="center" alignItems="center">
                                            {loading ? <Skeleton width={650} height={600} /> : <Image src={product.images[imageclick].src} />}
                                        </Flex>
                                    </div>

                                    <Flex flexDirection="column" justifyContent="center" px="2rem" className="pdpmeta">
                                        <Heading pb="2rem" className="PDP_productTitle">
                                            {loading ? <Skeleton width={650} height={70} /> : `${product.title}`}

                                        </Heading>
                                        
                                        {/* <Heading pb="2rem" className="PDP_productTitle">{product.id}</Heading> */}
                                        <Text className="PDP_cartprice" fontWeight="bold" pb="1rem">{loading ? <Skeleton width={75} height={70} /> : `$${product.variants[0].price}`}</Text>


                                        <Text>
                                        <div style={{ textAlign: 'center' }} className="prosreview">
                                            <div class="yotpo bottomLine" data-product-id={extractedInfo} style={{ display: 'inline-block' }}></div>
                                        </div>
                                        </Text>

                                        <Text pb="2rem" color="gray.500" className="propagedesc">{loading ? <Skeleton width={650} height={200} /> : <div dangerouslySetInnerHTML={{ __html: product.description }}></div>}</Text>

                                        <div className="klarnaText">
                                            4 interest-free payments of $6.00. <strong>Klarna</strong> Learn more
                                        </div>

                                        <div className="cartgroup">
                                            <div className="Container cartInput">
                                                <NumberInput inputProps={{ 'aria-label': 'Product quantity' }} onChange={handleProductQuantity} />
                                            </div>
                                            <div className="Container cart-btn cartsize">
                                                {loading ? <Skeleton height={42} /> : <button className=" animate__zoomIn animate__animated" onClick={() => addItemToCheckout(product.variants[0].id, 1)} quantity={productQuantity}>Add To Cart</button>}
                                            </div>
                                        </div>
                                    </Flex>
                                </Grid>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ProductPage
