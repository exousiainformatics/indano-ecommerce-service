import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import FadeUpScroll from '../../../../components/scrollComponent/fadeUpScroll/index'
export default function index(props) {
    return (
        <div>
            <Container className="text-center">
                {props.data.map((data, index) => (
                    <Container>
                        <Row>
                            <Col md={10} className="offset-1">
                            <FadeUpScroll><Row key={index}>
                                    <Col><h2 className="companyHeadText">{data.title}</h2></Col>
                                </Row></FadeUpScroll>
                                <Row className="mt-5">
                                    {data.subText.map((list, index) => (
                                        <Col md={4} key={index}>
                                        <FadeUpScroll><p className="listText">{list}</p></FadeUpScroll>
                                        </Col>
                                    ))}
                                </Row>
                                <FadeUpScroll><Row className="mt-5">
                                    <Col><h2 className="listTitle font-italic">{data.titleTwo}</h2></Col>
                                </Row></FadeUpScroll>
                                <Row className="mt-4 mb-5">
                                    <Col md={10} className="offset-1">
                                    <FadeUpScroll><p className="listSubText text-size font-italic">{data.text}</p></FadeUpScroll>
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
