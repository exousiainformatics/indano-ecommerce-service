import React from 'react'
import { Container, Image, Button, } from 'react-bootstrap';
// import blogimg from './../../../assets/images/blog-img/common.svg'
// import left from './../../../assets/images/blog-img/left.png'
// import right from './../../../assets/images/blog-img/right.png'
import { NavLink } from 'react-router-dom'
import Carousel from 'react-elastic-carousel';
import FadeUpScroll from './../../../components/scrollComponent/fadeUpScroll/index'

export default function index(props) {
    return (
        <Container style={{ marginTop: '10%' }}>
            <FadeUpScroll><h2 className="serviceHeadText mb-5">All Blog Posts</h2></FadeUpScroll>
            <Carousel pagination={false}  enableAutoPlay={false} className="carosal-blog">
            {props.data.map((data, index) => (
            <div className='wrapper mb-5 pb-5' key={index}>
                    <div className=" p-0">
                        <FadeUpScroll><p className="text-muted font-weight-bold pb-0 mb-0">{data.category}</p></FadeUpScroll>
                        <FadeUpScroll><h2 className="text-light-org font-weight-bold pt-0">{data.heading}</h2></FadeUpScroll>
                        <FadeUpScroll><p className="font-weight-normal descriptionText">{data.subHeading}<br />
                        {data.description}</p></FadeUpScroll>
                        <FadeUpScroll><p className="font-weight-bold descriptionText author">{data.name}</p></FadeUpScroll>
                        <FadeUpScroll><p className="descriptionText text-muted mt-1">{data.date}</p></FadeUpScroll>
                        <FadeUpScroll><NavLink to={data.path}><Button className='blogbtn'>Read Full Blog</Button></NavLink></FadeUpScroll>
                        {/* <Image src={left} height={'40px'} className="ml-3 cursor" />
                        <Image src={right} height={'40px'} className="ml-2 cursor" /> */}
                    </div>
                    <div className=" ml-5 p-0 pb-5">
                    <FadeUpScroll><Image src={data.imgUrl} width={'100%'} /></FadeUpScroll>
                    </div>
            </div>))}
            </Carousel>
            <div className='grids p-0 mb-5'>
            {props.data.map((data, index) => (
                <NavLink className='text-decoration-none text-dark' to='/blog/blog1'>
                <FadeUpScroll><div className='blogCard'>
                        <Image src={data.imgUrl} width={'100%'} />
                        <p className="text-muted font-weight-bold pt-2 mb-0">{data.category}</p>
                        <h4 className="text-light-title font-weight-bold pt-0">{data.heading}</h4>
                        <p>{data.subHeading}<br />
                        {data.description}</p>
                        <p className="font-weight-bold descriptionTextb authorb">{data.name}</p>
                        <p className="text-muted mt-1">{data.date}</p>
                    </div></FadeUpScroll>
                </NavLink>
            ))}
                {/* <NavLink className='text-decoration-none text-dark' to='/blog/blog1'>
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
                </NavLink> */}
            </div>
            <h2 className=" mb-5 text-center under companyHeadText">Load More</h2>
        </Container>
    )
}