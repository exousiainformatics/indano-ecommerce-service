import React from 'react'
import CustomView from './customView';
import MobileView from './mobileView';
import blogImg from './../../assets/images/blog-img/common.svg'
export default function index() {
    const blogData =[{
        category:'E-commerce',
        heading:'E-commerce: Yesterday, Today, & Tomorrow!',
        subHeading:'Can you imagine your life without Amazon, Flipkart, Myntra, or Nykaa today?',
        description:'That is how e-commerce has taken over our lives and made it simpler to function. Starting from dresses to groceries, now everything that we need is available at our fingertips without even stepping out of our comfort or our homes.',
        name:'Albert Flores, Business analyst',
        date:'Feb 2, 2021',
        path:'/blog/blog1',
        imgUrl:blogImg,
    },
    {
        category:'E-commerce',
        heading:'E-commerce:Yesterday, Today, & Tomorrow!',
        subHeading:'Can you imagine your life without Amazon, Flipkart, Myntra, or Nykaa today?',
        description:'That is how e-commerce has taken over our lives and made it simpler to function. Starting from dresses to groceries, now everything that we need is available at our fingertips without even stepping out of our comfort or our homes.',
        name:'Albert Flores, Business analyst',
        date:'Feb 2, 2021',
        path:'/blog/blog1',
        imgUrl:blogImg,
    }]
    return (
        <div>
            <div className="d-none d-md-block">
                <CustomView data={blogData}/>
            </div>
            <div className="d-md-none">
                <MobileView />
            </div>
        </div>
    )
}
