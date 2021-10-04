import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const MegaSlider = () => {
    /*const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            paritialVisibilityGutter: 60
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            paritialVisibilityGutter: 50
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            paritialVisibilityGutter: 30
        }
    };*/

    const images = [
        // "https://images.unsplash.com/photo-1549989476-69a92fa57c36",
        // "https://images.unsplash.com/photo-1517825738774-7de9363ef735",
        // "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8",
        // "https://images.unsplash.com/photo-1549737328-8b9f3252b927",
        // "https://images.unsplash.com/photo-1552410260-0fd9b577afa6",
        "https://images.unsplash.com/photo-1549833284-6a7df91c1f65",
        "https://images.unsplash.com/photo-1618142990632-1afb1bd67e7c",
        "https://images.unsplash.com/photo-1550064824-8f993041ffd3"
    ];
    return (
        <>
            <div id="wrapper">
                    <Carousel showArrows={true} className="fullwidthslider" autoPlay={1} interval={10000} showArrows={0} showThumbs={false}>
                        {/* {images.slice(0, 5).map(image => { */}
                        {images.map((image, key) => {
                            return (
                                <>
                                    <img draggable={false} style={{ width: "100%", height: "100%" }} src={image} key={key}/>
                                </>
                            );
                        })}
                    </Carousel>
                </div>
        </>
    )
}

export default MegaSlider
