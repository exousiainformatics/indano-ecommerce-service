import React from 'react'
// import { Container, Image, Row, Col, Form, Button, } from 'react-bootstrap';
import { Container, Image, Button, } from 'react-bootstrap';
import blogimg from './../../../assets/images/blog-img/common.svg'
import left from './../../../assets/images/blog-img/leftwhite.png'
import right from './../../../assets/images/blog-img/rightwhite.png'
import {NavLink} from 'react-router-dom'
import FadeUpScroll from '../../../components/scrollComponent/fadeUpScroll/index';

export default function index() {
    return (
        <Container className="p-0" style={{ marginTop: '17%' }}>
            <div className='head '>
                <div className='text-wrap pl-4 pb-3 pt-4 mt-5'>
                <FadeUpScroll><h2 className="text-light font-weight-bold pt-0">E-commerce: Yesterday, Today, & Tomorrow!</h2></FadeUpScroll>
                <FadeUpScroll><p className='text-light'>Upasana</p></FadeUpScroll>
                <FadeUpScroll><NavLink to='/blog/blog1'><Button className='blogbtnMobile'>Read Full Blog</Button></NavLink></FadeUpScroll>
                <FadeUpScroll><Image src={left} height={'30px'} className="ml-3 cursor" />
                    <Image src={right} height={'30px'} className="ml-2 cursor" /></FadeUpScroll>
                </div>
            </div>
            <FadeUpScroll><h2 className="serviceHeadText text-center mt-4 mb-4">All Blog Posts</h2></FadeUpScroll>
            <FadeUpScroll><div className='blogCard'>
                <Image src={blogimg} width={'100%'} />
                <div className='ml-4 mr-4'>
                    <p className="text-muted font-weight-bold pt-2 mb-0">Marketing & Promotion</p>
                    <h4 className="text-light-title font-weight-bold pt-0">E-commerce <br />Tips & Advice</h4>
                    <p className="font-weight-bold descriptionTextb authorb">Albert Flores, Business analyst</p>
                    <NavLink to='/blog/blog1'><p className="color mt-1">Read Full Blog</p></NavLink>
                    <hr className='text-muted'/>
                </div>
            </div></FadeUpScroll>
            <FadeUpScroll><div className='blogCard mt-4 mb-5'>
                <Image src={blogimg} width={'100%'} />
                <div className='ml-4 mr-4'>
                    <p className="text-muted font-weight-bold pt-2 mb-0">Marketing & Promotion</p>
                    <h4 className="text-light-title font-weight-bold pt-0">E-commerce <br />Tips & Advice</h4>
                    <p className="font-weight-bold descriptionTextb authorb">Albert Flores, Business analyst</p>
                    <NavLink to='/blog/blog1'><p className="color mt-1">Read Full Blog</p></NavLink>
                    <hr className='text-muted'/>
                </div>
            </div></FadeUpScroll>
        </Container>
    )
}