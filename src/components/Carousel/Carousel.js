import React from 'react';
import {useSelector} from "react-redux";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./Carousel.css"

function Carousel(props) {

    const {singleContent} = useSelector(state => state.simpleReducer)

    const handleDragStart = (e) => e.preventDefault();

    const items = singleContent.images?.map((item) => (
        <div className="carouselItem">
            <img
                src={item}
                onDragStart={handleDragStart}
                className={"carouselItem__img"}
            />
            <b className="carouselItem__text">{item?.name}</b>
        </div>
    ));

    const responsive = {
        0: {
            items: 1
        },
        512: {
            items: 1
        },
        768: {
            items: 1
        },
        1024: {
            items: 1
        }
    };

    return (
        <>
            <AliceCarousel
                autoPlay
                responsive={responsive}
                mouseTracking
                items={items}
                infinite
                disableDotsControls
                disableButtonsControls
                autoPlayInterval={800}
            />
        </>
    );
}

export default Carousel;