import React from 'react'
import Carousel from '../../../components/commonComponents/carousel';
import First from '../../../assets/images/about/dynamic/banner.png';

const carouselItems=[
    {
        src: First,
        width: '100%'
    },
    {
        src: First,
        width: '100%'
    }
]

export default function index() {
    return (
        <div className="mt-5 mt-md-0">
                <div className="pt-2 mt-md-0 pt-md-0">
                <Carousel
                    carouselItems={carouselItems}
                    interval={1000}
                    indicators={false}
                    controls={false}
                />
                </div>
            </div>
    )
}
