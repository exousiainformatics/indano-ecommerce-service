import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function index(props) {
    return (
        <div>
            <Container className="text-center mt-5">
                {props.data.map((data, index) => (
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <Row key={index}>
                                    <Col><h2 className="discpHead font-mobile-extra-bigger">{data.title}</h2></Col>
                                </Row>
                                <Row className="mt-4">
                                    {data.subText.map((list, index) => (
                                        <Col xs={4} key={index}>
                                            <p className="listText font-mobile-text">{list}</p>
                                        </Col>
                                    ))}
                                </Row>
                                <Row className="mt-4">
                                    <Col><h2 className="listTitle font-mobile-bigger">{data.titleTwo}</h2></Col>
                                </Row>
                                <Row className="mt-2 mb-5">
                                    <Col xs={12} className="">
                                        <p className="listSubText font-mobile-text">{data.text}</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                ))}
            </Container>
        </div>
    )
}
