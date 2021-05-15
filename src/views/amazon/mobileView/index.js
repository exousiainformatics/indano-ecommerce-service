import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import Acc from '../../../assets/images/amazon-img/Acc.png';
import Fba from '../../../assets/images/amazon-img/fba.png';
import Prod from '../../../assets/images/amazon-img/prod.png';
import FullAcc from '../../../assets/images/amazon-img/fullAcc.png';
import Pro from '../../../assets/images/amazon-img/pro.png';
import Ar from '../../../assets/images/amazon-img/ar.png';
import Daily from '../../../assets/images/amazon-img/daily.png';
import Bs from '../../../assets/images/amazon-img/bs.png';
import Abs from '../../../assets/images/amazon-img/abs.png';
import { BrowserRouter, Link } from 'react-router-dom';
import FadeUpScroll from './../../../components/scrollComponent/fadeUpScroll/index'

export default function index() {
    return (
        <Container style={{ marginTop: '30%' }}>
            <FadeUpScroll><h1 className="serviceHeadText font-mobile-extra-bigger text-center mb-5">Amazon.in</h1></FadeUpScroll>
            <Container>
                <FadeUpScroll><Row className="text-center">
                    <Col className="col-6 mx-auto">
                        <BrowserRouter>
                            <Link to={{ pathname: "https://sellercentral.amazon.in/gp/on-board/workflow/Registration/login.html?passthrough%2Faccount=soa&passthrough%2FsuperSource=OAR&passthrough%2FmarketplaceID=A21TJRUUN4KGV&passthrough%2Fld=SA-OP-Indano" }} target="_blank" style={{ textDecoration: 'none', color: '#212529' }}>
                                <Image src={Acc} width={'80%'} />
                                <p className="mt-4 font-weight-bold text-size">Account Registration</p>
                            </Link> </BrowserRouter>
                    </Col>
                    <Col className="col-6 pl-5">
                        <Image src={Prod} width={'80%'} />
                        <p className="mt-4 font-weight-bold text-size">Product Listing</p>
                    </Col>
                </Row></FadeUpScroll>
                <FadeUpScroll>
                    <Row className="text-center">
                        <Col className="col-6">
                            <Image src={Pro} width={'70%'} />
                            <p className="mt-4 font-weight-bold text-size">Promotion & Marketing</p>
                        </Col>
                        <Col className="col-6 pl-5">
                            <Image src={Daily} width={'80%'} />
                            <p className="mt-4 font-weight-bold text-size">Daily Updation</p>
                        </Col>
                    </Row></FadeUpScroll>
                <FadeUpScroll><Row className="text-center">
                    <Col className="col-6">
                        <Image src={Abs} width={'70%'} />
                        <p className="mt-4 font-weight-bold text-size">Amazon Boost Services</p>
                    </Col>
                    <Col className="col-6 pl-5">
                        <Image src={Fba} width={'80%'} />
                        <p className="mt-4 font-weight-bold text-size">FBA Services</p>
                    </Col>
                </Row></FadeUpScroll>
                <FadeUpScroll><Row className="text-center">
                    <Col className="col-6">
                        <Image src={FullAcc} width={'60%'} />
                        <p className="mt-4 font-weight-bold text-size">Full Account Management Services</p>
                    </Col>
                    <Col className="col-6 pl-5">
                        <Image src={Bs} width={'90%'} />
                        <p className="mt-4 font-weight-bold text-size">Brand Store creation with A+ Content</p>
                    </Col>
                </Row></FadeUpScroll>
                <FadeUpScroll><Row className="text-center">
                    <Col className="col-12">
                        <Image src={Ar} width={'35%'} />
                        <p className="mt-4 font-weight-bold text-size">Account Reinstatement</p>
                    </Col>
                </Row></FadeUpScroll>

                {/* images section ends */}
                <FadeUpScroll><h2 className="text-light-org mt-4 font-weight-bold">Account Registration</h2></FadeUpScroll>
                <FadeUpScroll><p className=" text-size">For amazon account registration we need certain documents along with few more information. Documents needed for amazon account registration:-</p></FadeUpScroll>
                <FadeUpScroll><ul className=" text-size">
                    <li>PAN card</li>
                    <li>GSTIN number (mandatory)</li>
                    <li>Bank account</li>
                </ul></FadeUpScroll>
                <FadeUpScroll><p className=" text-size">After filling all the needed information, click ‘Register with Amazon’ and now we are successfully registered with Amazon. </p></FadeUpScroll>
                {/* account registration section ends */}
                <FadeUpScroll><h2 className="text-light-org  font-weight-bold mb-3">Product Listing & Cataloging</h2></FadeUpScroll>
                <FadeUpScroll><p className="mb-0 text-size">After completing the registration process we need to list our products on Amazon portal.</p></FadeUpScroll>
                <FadeUpScroll><p className=" text-size">There are 2 ways of Listing:-</p></FadeUpScroll>
                <FadeUpScroll><p className="font-weight-bold text-size">Single Listing</p></FadeUpScroll>
                <FadeUpScroll><p className=" text-size">We create new product listing and do it manually by adding it em or creating a separate list for each item if each one has different category.</p></FadeUpScroll>
                <FadeUpScroll><p className="font-weight-bold text-size">Bulk listing</p></FadeUpScroll>
                <FadeUpScroll><p className=" text-size">Here, we create bulk listing for products and make their variations (if you are dealing in a particular product).</p></FadeUpScroll>
                <FadeUpScroll><p className="mb-2 text-size">points to remember for effective listing</p></FadeUpScroll>
                <Row>
                    <Col className="col-12">
                        <FadeUpScroll><ul className=" text-size">
                            <li>Product title</li>
                            <li>SEO friendly content</li>

                            <li>Description</li>
                            <li>Image editing</li>

                            <li>Image</li>
                            <li>Bullet points</li>
                        </ul></FadeUpScroll>
                    </Col>

                </Row>
                {/* product listing section ends */}<FadeUpScroll>
                    <h2 className="text-light-org  font-weight-bold mb-3">Promotion & Marketing</h2>
                    <p className=" text-size">We market your products and promote it through various tools, software and expertise skills for more traffic.This eventually helps us to create visibility for your products. Product visibility makes it easy for buyer to find your products and you are on track to win great sales.</p>
                    {/* promotion ends here */}</FadeUpScroll><FadeUpScroll>
                    <h2 className="text-light-org  font-weight-bold mb-3">Daily Updation</h2>
                    <p className="mb-2 text-size">Daily updation on your Flipkart account means regular checking and updation of keyword, pricing, promotions etc.</p>
                    <p className=" text-size">This keeps your account health at <span className="font-weight-bold font-italic">‘Excellent’</span>.</p>
                    {/* daily updation ends */}</FadeUpScroll><FadeUpScroll>
                    <h2 className="text-light-org  font-weight-bold mb-3">Amazon Boost Services</h2>
                    <p className=" text-size">Amazon boost services includes an account manager, who will work on different aspects of your account like repricing, deals, promotion, account health management, everyday operations etc.</p>
                    <p className=" text-size">Benefits of Boost Services</p>
                    <Row>
                        <Col className="col-12">
                            <ul className=" text-size">
                                <li>Increase customer reach</li>
                                <li>Brand awareness and product awareness</li>
                                <li>Target potential customer</li>

                                <li>Cost effective</li>
                                <li>See fast results</li>
                            </ul>
                        </Col>
                    </Row>
                    <p className=" text-size">Our account managers optimize your advertisements and manage campaign for effective and
efficient results.</p></FadeUpScroll>
                {/* amazon boost services ends */}<FadeUpScroll>
                    <h2 className="text-light-org  font-weight-bold mb-3">Brand store creation  with A+ content</h2>
                    <p className=" text-size">Amazon give special space to sellers for showcasing of products in more effective way. Amazon A+ content isn’t accessible to all the sellers. The program is only approved after getting brand store approval from Amazon.</p>
                    <p className=" text-size">A+ content starts by understanding your customer’s barrier, then we can develop a strategy to overcome these barriers in your marketing content.</p>
                    <p className=" text-size">Benefits of adding A+ content</p>
                    <ul className=" text-size">
                        <li>Increase conversions</li>
                        <li>Increase sales</li>
                        <li>Encourage repeat purchase</li>
                        <li>Reduce customer return</li>
                    </ul></FadeUpScroll>
                {/* brand store section ends */}<FadeUpScroll>
                    <h2 className="text-light-org  font-weight-bold mb-3">Account Reinstatement</h2>
                    <p className=" text-size">There are many windows of reinstatement, get your account reinstated, our team of experts will help you create an effective appeal with a plan of action.</p>
                    <p className=" text-size">Reasons of sellers account suspension:-</p>
                    <ul className=" text-size">
                        <li> Failure to address intellectual property complaints</li>
                        <li> Operating multiple amazon seller account</li>
                        <li>Amazon seller account hacker</li>
                        <li> Sale of restricted product</li>
                        <li> Inauthentic complaint</li>
                        <li> Using images/ text without permission- copyright infringement</li>
                        <li>Amazon seller accused of unauthorized sales</li>
                        <li>Manipulating amzon customer review</li>
                    </ul></FadeUpScroll>
                {/* account reinstatement ends */}<FadeUpScroll>
                    <h2 className="text-light-org  font-weight-bold mb-3">FBA Services (Transportation)</h2>
                    <p className=" text-size">FBA helps third party seller grow by giving them access to amazon’s world class fulfillment resources and expertise, acclaimed customer services and trusted shipping options. Fulfillment By Amazon (FBA) helps you increase your online sales by giving you access to amazon’s world class fulfillment resources.
                    With Fulfillment By Amazon(FBA) you store your products in Amazon’s warehouse and deliver the order to customers directly through Amazon’s warehouse.
</p></FadeUpScroll><FadeUpScroll>
                    <p className=" text-size">Benefits of using FBA:-</p>
                    <Row>
                        <Col className="col-12">
                            <ul className=" text-size">
                                <li>Focus on business</li>
                                <li>Prime delivery increases product demand</li>
                                <li>Pay as you go</li>
                                <li>Build trust</li>
                                <li>Pay on delivery payments</li>
                                <li>Customers keep coming back for more</li>
                                <li>No growing pain</li>
                            </ul>
                        </Col>
                    </Row></FadeUpScroll><FadeUpScroll>
                    <h2 className="text-light-org  font-weight-bold mb-3">Training</h2>
                    <p className="mb-5 text-size">Get training on everything, how selling on amazon works, day to day operations, how to check your orders, how to manage your amazon account and so on.</p>
                </FadeUpScroll>
            </Container>
        </Container>
    )
}
