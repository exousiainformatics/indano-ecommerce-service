import React from "react"
import { Container, Image } from "react-bootstrap"
import { NavLink } from 'react-router-dom'
// import Img from './../../../assets/images/blog-img/common.svg'
export default function index() {
    return (
        <Container>
            <h1 className="text-center companyHeadText font-mobile-medium mt-5 mb-5">Resources & Blog</h1>
            <div className='card_wrap mt-5'>
                <NavLink className='text-decoration-none text-dark d-md-block' to='/blog/blog1'>
                    <div class="card_blog_home">
                        <p class='home_blog_card_text text-center mb-0'>E-Commerce <br />Tips & Advice</p>
                    </div>
                </NavLink>
                <NavLink className='text-decoration-none text-dark d-md-block' to='/blog/blog1'>
                    <div class="card_blog_home">
                        <p class='home_blog_card_text text-center mb-0'>E-Commerce <br />Tips & Advice</p>
                    </div>
                </NavLink>
                <NavLink className='text-decoration-none text-dark d-none d-md-block' to='/blog/blog1'>
                    <div class="card_blog_home">
                        <p class='home_blog_card_text text-center mb-0'>E-Commerce <br />Tips & Advice</p>
                    </div>
                </NavLink>
                <NavLink className='text-decoration-none text-dark d-none d-md-block' to='/blog/blog1'>
                    <div class="card_blog_home">
                        <p class='home_blog_card_text text-center mb-0'>E-Commerce <br />Tips & Advice</p>
                    </div>
                </NavLink>
                <NavLink className='text-decoration-none text-dark d-none d-md-block' to='/blog/blog1'>
                    <div class="card_blog_home">
                        <p class='home_blog_card_text text-center mb-0'>E-Commerce <br />Tips & Advice</p>
                    </div>
                </NavLink>
                <NavLink className='text-decoration-none text-dark d-none d-md-block' to='/blog/blog1'>
                    <div class="card_blog_home">
                        <p class='home_blog_card_text text-center mb-0'>E-Commerce <br />Tips & Advice</p>
                    </div>
                </NavLink>
            </div>

        </Container>
    )
}