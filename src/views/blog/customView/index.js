import React from 'react'
import { Container, Image, Button, } from 'react-bootstrap';
import blogimg from './../../../assets/images/blog-img/common.svg'
import left from './../../../assets/images/blog-img/left.png'
import right from './../../../assets/images/blog-img/right.png'
import { NavLink } from 'react-router-dom'

export default function index() {
    return (
        <Container style={{ marginTop: '10%' }}>
            <h2 className="serviceHeadText mb-5">All Blog Posts</h2>
            <div className='wrapper mb-5 pb-5'>
                <div className=" p-0">
                    <p className="text-muted font-weight-bold pb-0 mb-0">Ecommerce</p>
                    <h2 className="text-light-org font-weight-bold pt-0">E-commerce:<br />Yesterday, Today, & <br />Tomorrow!</h2>
                    <p className="font-weight-normal descriptionText">Can you imagine your life without Amazon,<br />
                     Flipkart, Myntra, or Nykaa today?<br />
                    That is how e-commerce has taken over our lives<br />
                    and made it simpler to function. Starting from<br />
                    dresses to groceries, now everything that we need<br />
                    is available at our fingertips without even stepping<br />
                    out of our comfort or our homes.</p>
                    <p className="font-weight-bold descriptionText author">Albert Flores, Business analyst</p>
                    <p className="descriptionText text-muted mt-1">Feb 2 ,2021</p>
                    <NavLink to='/blog/blog1'><Button className='blogbtn'>Read Full Blog</Button></NavLink>
                    <Image src={left} height={'40px'} className="ml-3 cursor" />
                    <Image src={right} height={'40px'} className="ml-2 cursor" />
                </div>
                <div className=" ml-5 p-0 pb-5">
                    <Image src={blogimg} width={'100%'} />
                </div>
            </div>
            <div className='grids p-0 mb-5'>
                <NavLink className='text-decoration-none text-dark' to='/blog/blog1'>
                    <div className='blogCard'>
                        <Image src={blogimg} width={'100%'} />
                        <p className="text-muted font-weight-bold pt-2 mb-0">Marketing & Promotion</p>
                        <h4 className="text-light-title font-weight-bold pt-0">E-commerce Tips & Advice</h4>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.</p>
                        <p className="font-weight-bold descriptionTextb authorb">Albert Flores, Business analyst</p>
                        <p className="text-muted mt-1">Feb 2 ,2021</p>
                    </div>
                </NavLink>
                <NavLink className='text-decoration-none text-dark' to='/blog/blog1'>
                    <div className='blogCard'>
                        <Image src={blogimg} width={'100%'} />
                        <p className="text-muted font-weight-bold pt-2 mb-0">Marketing & Promotion</p>
                        <h4 className="text-light-title font-weight-bold pt-0">E-commerce Tips & Advice</h4>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.</p>
                        <p className="font-weight-bold descriptionTextb authorb">Albert Flores, Business analyst</p>
                        <p className="text-muted mt-1">Feb 2 ,2021</p>
                    </div>
                </NavLink>
                <NavLink className='text-decoration-none text-dark' to='/blog/blog1'>
                    <div className='blogCard'>
                        <Image src={blogimg} width={'100%'} />
                        <p className="text-muted font-weight-bold pt-2 mb-0">Marketing & Promotion</p>
                        <h4 className="text-light-title font-weight-bold pt-0">E-commerce Tips & Advice</h4>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.</p>
                        <p className="font-weight-bold descriptionTextb authorb">Albert Flores, Business analyst</p>
                        <p className="text-muted mt-1">Feb 2 ,2021</p>
                    </div>
                </NavLink>
                <NavLink className='text-decoration-none text-dark' to='/blog/blog1'>
                    <div className='blogCard'>
                        <Image src={blogimg} width={'100%'} />
                        <p className="text-muted font-weight-bold pt-2 mb-0">Marketing & Promotion</p>
                        <h4 className="text-light-title font-weight-bold pt-0">E-commerce Tips & Advice</h4>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.</p>
                        <p className="font-weight-bold descriptionTextb authorb">Albert Flores, Business analyst</p>
                        <p className="text-muted mt-1">Feb 2 ,2021</p>
                    </div>
                </NavLink>
                <NavLink className='text-decoration-none text-dark' to='/blog/blog1'>
                    <div className='blogCard'>
                        <Image src={blogimg} width={'100%'} />
                        <p className="text-muted font-weight-bold pt-2 mb-0">Marketing & Promotion</p>
                        <h4 className="text-light-title font-weight-bold pt-0">E-commerce Tips & Advice</h4>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.</p>
                        <p className="font-weight-bold descriptionTextb authorb">Albert Flores, Business analyst</p>
                        <p className="text-muted mt-1">Feb 2 ,2021</p>
                    </div>
                </NavLink>
                <NavLink className='text-decoration-none text-dark' to='/blog/blog1'>
                    <div className='blogCard'>
                        <Image src={blogimg} width={'100%'} />
                        <p className="text-muted font-weight-bold pt-2 mb-0">Marketing & Promotion</p>
                        <h4 className="text-light-title font-weight-bold pt-0">E-commerce Tips & Advice</h4>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.</p>
                        <p className="font-weight-bold descriptionTextb authorb">Albert Flores, Business analyst</p>
                        <p className="text-muted mt-1">Feb 2 ,2021</p>
                    </div>
                </NavLink>
                <NavLink className='text-decoration-none text-dark' to='/blog/blog1'>
                    <div className='blogCard'>
                        <Image src={blogimg} width={'100%'} />
                        <p className="text-muted font-weight-bold pt-2 mb-0">Marketing & Promotion</p>
                        <h4 className="text-light-title font-weight-bold pt-0">E-commerce Tips & Advice</h4>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.</p>
                        <p className="font-weight-bold descriptionTextb authorb">Albert Flores, Business analyst</p>
                        <p className="text-muted mt-1">Feb 2 ,2021</p>
                    </div>
                </NavLink>
                <NavLink className='text-decoration-none text-dark' to='/blog/blog1'>
                    <div className='blogCard'>
                        <Image src={blogimg} width={'100%'} />
                        <p className="text-muted font-weight-bold pt-2 mb-0">Marketing & Promotion</p>
                        <h4 className="text-light-title font-weight-bold pt-0">E-commerce Tips & Advice</h4>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.</p>
                        <p className="font-weight-bold descriptionTextb authorb">Albert Flores, Business analyst</p>
                        <p className="text-muted mt-1">Feb 2 ,2021</p>
                    </div>
                </NavLink>
                <NavLink className='text-decoration-none text-dark' to='/blog/blog1'>
                    <div className='blogCard'>
                        <Image src={blogimg} width={'100%'} />
                        <p className="text-muted font-weight-bold pt-2 mb-0">Marketing & Promotion</p>
                        <h4 className="text-light-title font-weight-bold pt-0">E-commerce Tips & Advice</h4>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.</p>
                        <p className="font-weight-bold descriptionTextb authorb">Albert Flores, Business analyst</p>
                        <p className="text-muted mt-1">Feb 2 ,2021</p>
                    </div>
                </NavLink>
            </div>
            <h2 className=" mb-5 text-center under companyHeadText">Load More</h2>
        </Container>
    )
}