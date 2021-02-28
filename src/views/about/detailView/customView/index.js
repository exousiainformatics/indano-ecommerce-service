import React from 'react'
import {Container, Col} from 'react-bootstrap';
import LeftRightScroll from '../../../../components/scrollComponent/leftRightScroll';
export default function index(props) {
    return (
        <Container>
            <h3 className="discpHead text-center">Service</h3>
            <Col md={8} className="offset-2 mt-2">
            <p className="companySubHeadText text-center">We are Official service partners of Amazon and Flipkart. We also give services for Myntra, tatacliq & Ajio.</p>
            </Col>
            <div>
                <LeftRightScroll leftRight={true} smallText={true} data={props.serviceData} />
            </div>
        </Container>
    )
}
