import React, { Component } from 'react';
import _commonVariables from './../../../../assets/scss/_commonVariables.scss';
import './../../../../assets/scss/footer.scss';
import Image from './../../imageContainer/index';
import Call from '../../../../assets/images/social/Group.png'
import Msg from '../../../../assets/images/social/Vector-1.png';
import Support from '../../../../assets/images/social/Vector-2.png';
import Facebook from '../../../../assets/images/social/fbb.png';
import Instagram from '../../../../assets/images/social/inst.png';
import Linkedin from '../../../../assets/images/social/lkd.png';
import Logo from '../../../../assets/images/company-logo/logo-transparent.png'
import { Container, Row, Col } from 'react-bootstrap';
export default class index extends Component {
    render() {
        return (
            <Container fluid className="footerContainer">
                <Container className="pt-5 pb-5 pb-5">
                    <Row>
                        <Col md={8} className=" text-center">
                            <span className="textTouch">
                                Get in Touch
                                    </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mt-4 social-img col-3 mx-auto">
                            <Image src={Facebook} />
                        </Col>
                        <Col className="mt-4 social-img col-3 mx-auto">
                            <Col xs={11} className="offset-1">
                            <Image src={Instagram} />
                            </Col>
                        </Col>
                        <Col className="mt-4 social-img col-3 mx-auto">
                            <Col xs={11} className="offset-1">
                            <Image src={Linkedin}/>
                            </Col>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="mt-4">
                            <Row>
                                <Col md={12}>
                                    <span className="footerHeadText-m">
                                        INDANO E-COMMERCE SERVICES
                                    </span>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={8} className="mt-4">
                                    <span className="footerText-m">
                                        <p>Ground Floor F-76 Adhyapak Nagar,</p> 
                                        <p>Nangloi, New Delhi, Pin Code-110041</p>
                                    </span>
                                </Col>
                                <Col md={8} className="mt-3">
                                    <Image src={Call} width={'6%'} />
                                    <span className="footerText-m pl-4">
                                        +91-7985435146 (Official)
                                    </span>
                                </Col>
                                <Col md={8} className="mt-3">
                                    <Image src={Msg} width={'6%'} />
                                    <span className="footerText-m pl-4">
                                        info@indano.in (Official)
                                    </span>
                                </Col>
                                <Col md={10} className="mt-3">
                                    <Image src={Support} width={'6%'} />
                                    <span className="footerText-m pl-4">
                                        +91-9311079540 (Seller support)
                                    </span>
                                </Col>
                                <Col md={10} className="mt-3">
                                    <Image src={Msg} width={'6%'} />
                                    <span className="footerText-m pl-4">
                                        info.indano@gmail.com (Seller support)
                                    </span>
                                </Col>
                            </Row>
                        </Col>
                        {/* second-column-starts  */}
                    </Row>
                    <Row>
                    <Col xs={3} className="mt-4 offset-9">
                            <Image src={Logo} width={'100%'} />
                        </Col>
                    </Row>
                    <Row className="trash">
                        <Col>
                         
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}