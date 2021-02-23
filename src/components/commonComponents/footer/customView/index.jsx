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
import FacebookOrg from './../../../../assets/images/social/fb.png';
import InstagramOrg from './../../../../assets/images/social/insta.png';
import LinkedinOrg from './../../../../assets/images/social/linkdin.png';
import { Container, Row, Col } from 'react-bootstrap';


export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            hover1: false,
            hover2: false
        };
    }

    render() {
        return (
            <Container fluid className="footerContainer">
                <Container className="pt-5 pb-5 pb-5">
                    <Row>
                        <Col md={6} className="mt-4">
                            <Row>
                                <Col md={12}>
                                    <span className="footerHeadText">
                                        INDANO E-COMMERCE SERVICES
                                    </span>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={8} className="mt-4">
                                    <span className="footerText">
                                        Ground Floor F-76 Adhyapak Nagar,
                                        Nangloi, New Delhi, Pin Code-110041
                                    </span>
                                </Col>
                                <Col md={8} className="mt-3">
                                    <Image src={Call} width={'8%'} />
                                    <span className="footerText pl-4">
                                        +91-7985435146 (Official)
                                    </span>
                                </Col>
                                <Col md={8} className="mt-3">
                                    <Image src={Msg} width={'8%'} />
                                    <span className="footerText pl-4">
                                        info@indano.in (Official)
                                    </span>
                                </Col>
                                <Col md={10} className="mt-3">
                                    <Image src={Support} width={'6.5%'} />
                                    <span className="footerText pl-4">
                                        +91-9311079540 (Seller support)
                                    </span>
                                </Col>
                                <Col md={10} className="mt-3">
                                    <Image src={Msg} width={'6.5%'} />
                                    <span className="footerText pl-4">
                                        info.indano@gmail.com (Seller support)
                                    </span>
                                </Col>
                            </Row>
                        </Col>
                        {/* second-column-starts  */}
                        <Col md={3} className="mt-4">
                            <Row>
                                <Col md={12}>
                                    <span className="footerHeadText">
                                        COMPANY
                                    </span>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={8} className="mt-4">
                                    <span className="footerText">
                                        About us
                                    </span>
                                </Col>
                                <Col md={8} className="mt-4">
                                    <span className="footerText">
                                        Privacy Policy
                                    </span>
                                </Col>
                                <Col md={8} className="mt-4">
                                    <span className="footerText">
                                        Careers
                                    </span>
                                </Col>
                                <Col md={8} className="mt-4">
                                    <span className="footerText">
                                        Blogs
                                    </span>
                                </Col>
                            </Row>
                        </Col>
                        {/* second column ends  */}

                        {/* third column starts  */}
                        <Col md={3} className="mt-4">
                            <Row>
                                <Col md={12}>
                                    <span className="footerHeadText">
                                        CONTACT US
                                    </span>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={8} className="mt-4">
                                    <span className="footerText">
                                        Get in touch
                                    </span>
                                </Col>
                                <Col md={8} className="mt-4">
                                    <Row>
                                        <Col href="/">
                                            <span className="pointer" onMouseEnter={() => this.setState({ hover: true })} onMouseOut={() => this.setState({ hover: false })}>
                                                <Image src={this.state.hover ? FacebookOrg : Facebook} width={'100%'} />
                                            </span>
                                        </Col>
                                        <Col href="/">
                                        <span className="pointer" onMouseEnter={() => this.setState({ hover1: true })} onMouseOut={() => this.setState({ hover1: false })}>
                                                <Image src={this.state.hover1 ? InstagramOrg : Instagram} width={'100%'} />
                                            </span>
                                        </Col>
                                        <Col>
                                        <span className="pointer" onMouseEnter={() => this.setState({ hover2: true })} onMouseOut={() => this.setState({ hover2: false })}>
                                                <Image src={this.state.hover2 ? LinkedinOrg : Linkedin} width={'100%'} />
                                            </span>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={8} className="mt-4 ml-4">
                                    <Image src={Logo} width={'65%'} />
                                </Col>
                            </Row>
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