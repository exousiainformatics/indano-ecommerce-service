import React from 'react'
import First from '../../assets/images/home/dynamic/Banner1.png';
import Second from '../../assets/images/home/dynamic/Banner1.png';
import Third from '../../assets/images/home/dynamic/Banner1.png';
import Banner from './bannerView';
import Package from './servicePackage';

const carouselItems = [
    {
        src: First,
        width: '100%'
    },
    {
        src: Second,
        width: '100%'
    },
    {
        src: Third,
        width: '100%'
    }
]

export default function index() {
    return (
        <div className="mt-5 pt-4">
            <Banner carouselItems={carouselItems} />
            <Package />
        </div>

    )
}
