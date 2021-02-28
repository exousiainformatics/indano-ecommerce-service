import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import Group from '../../../assets/images/tatacliq-img/Group.png'

export default function index() {
    return (
        <Container style={{ marginTop: '10%' }}>
            <h1 className="serviceHeadText font-mobile-biggerr">TataCliq</h1>
            <h4 className="mt-3 text-muted font-italic">Its one of leading e-commerce platform around indian marketplace. Tatacliq give their sellers appropriate chance to get onboard for online selling</h4>
            <Row className="mt-5">
                <Col className="col-6">
                    <h3 className="text-orange font-weight-bold mb-3">Seller's Training</h3>
                    <p className="font-weight-bold">Get training on everything, how selling on Tataclip works, day to day operations, how to check your orders, how to manage your Tatacliq account and so on.</p>
                    <p className="font-weight-bold">There are few documents needed for seller onboard process:</p>
                    <ul className="font-weight-bold">
                        <li>PAN card</li>
                        <li>GST certificate</li>
                        <li>CIN</li>
                        <li>Cancelled cheque</li>
                        <li>Company logo</li>
                        <li>Bank confirmation on electronic clearence form with attachment.</li>
                    </ul>
                </Col>
                <Col className="col-5 offset-1">
                    <Image src={Group} width={'70%'} className="pt-5 mt-sm-0 pt-sm-0" />
                </Col>
            </Row>
            <h2 className=" mt-3 text-center serviceHeadText font-mobile-biggerr">Benefits of selling with Tatacliq</h2>
            <Row className="mt-4 mb-5">
                <Col className="col-3 offset-3 font-weight-bold text-center"><p>Plethora of customers</p>
                    <p>Valuable tips</p></Col>
                <Col className="col-3 font-weight-bold text-center"><p>Easily monitor your sales</p>
                    <p>Transparency</p></Col>
            </Row>
        </Container>
    )
}
