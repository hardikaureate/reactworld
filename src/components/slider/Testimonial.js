import React, { useState, useEffect } from 'react'
import './testimonial.css'
import Slider from "react-slick"
import { Image } from '@chakra-ui/react'
import Skeleton from 'react-loading-skeleton'
import ClientData from '../../blogdata/blog.json'


const testimonial = ClientData.testimonials
//console.log(testimonial)

const Testimonial = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => setTimeout(() => setLoading(false), 2000), [])

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 1008,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }

          ]
    };
    return (

        <>
            <Slider Slider {...settings} > {testimonial && testimonial?.map((num, i) =>
                <div className="sliderData" key={i} >
                    <div className="testimonialInfo Container" >
                        <div className="sliderImage" > {loading ? <Skeleton width={135} height={135} /> : <Image src={`/${num.images.src}`} />}
                        </div>
                        <div className="sliderText">
                            {loading ? <Skeleton width={500} height={200} /> : <p>{num.testimonialText && num.testimonialText}</p>}
                            <h3>
                                {loading ? <Skeleton width={500} height={30} /> : num.name && num.name}
                            </h3>
                        </div>
                    </div>
                </div>
            )}
            </Slider>
        </>


    )
}

export default Testimonial
