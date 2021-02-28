import React from 'react'
import {Container, Col} from 'react-bootstrap';
import BottomUpScroll from '../../../../components/scrollComponent/bottomUpScroll';
export default function index(props) {
    return (
        <Container>
            <h3 className="discpHead text-center font-mobile-extra-bigger">Service</h3>
            <Col md={8} className="mt-2">
            <p className="companySubHeadText text-center font-mobile-medium">We are Official service partners of Amazon and Flipkart. We also give services for Myntra, tatacliq & Ajio.</p>
            </Col>
            <div>
                <BottomUpScroll data={props.serviceData} />
            </div>
        </Container>
    )
}
