import React from 'react'
import { Container, Row, Image } from 'react-bootstrap';
import { NavLink, BrowserRouter,Link } from 'react-router-dom';
import Img from './../../../assets/images/blog-img/common.svg'
import Insta from './../../../assets/images/blog-img/insta.svg'
import Linkd from './../../../assets/images/blog-img/linkd.svg'
import Fb from './../../../assets/images/blog-img/fb.svg'

export default function index() {
    return (
        <div>
            <div style={{ marginTop: '9%' }} className="p-0 container-md">
                <div className="d-none d-md-block">
                    <div className="back_category_wrapper">
                        <NavLink to='/blog'><p>Back</p></NavLink>
                        <p>Category : <span>E-Commerce</span></p>
                    </div>
                    <h1 className="serviceHeadText text-center">E-Commerce : Yesterday,</h1>
                    <h1 className="serviceHeadText text-center">Today, and Tomorrow!</h1>
                    <p className='text-center title mt-3 mb-0 pb-0'>Upasana <span>(Content Writer)</span></p>
                    <p className="text-center reading_time mt-0 pt-0 pb-5"><span className='pb-3'>15 min read</span></p>
                </div>
                {/* upto Upasana  */}
                <img src={Img} width={'100%'} />

                <Row className='mt-5'>
                    <div className="blog_content pr-md-5 col-12 col-md-8 pr-4 pl-md-3 pl-4 mb-5 pb-5">
                        <div className='d-block d-md-none'>
                            <h1 className="serviceHeadText">E-Commerce : Yesterday,</h1>
                            <h1 className="serviceHeadText">Today, and Tomorrow!</h1>
                            <p className=' mt-3 mb-4 '><span className="pb-2 upsna">Upasana</span></p>
                        </div>
                        <p className=" after_heading">Can you imagine your life without Amazon,
                     Flipkart, Myntra, or Nykaa today?</p>
                        <div className='content mt-md-5'>
                            <p>That is how e-commerce has taken over our lives and made it simpler to function.
                            Starting from dresses to groceries, now everything that we need is available at our
                            fingertips without even stepping out of our comfort or our homes. And what better way
                            it is to shop with the perks of great deals and discounts that are nowadays offered by
                        these platforms.</p>

                            <p>If we go back in years, people hardly used e-commerce platforms to buy anything at all
                            and stuck to the traditional way of purchasing good and services which means you had to
                            move out of your house and go and hunt for the stuff of your requirement at various
                            outlets till you found it or in worse situation settle for an alternate option that was
                            available. This meant you had to pay for things that were your second choice in the first
                            place and pay an equal amount or more for the same. Not until 2005 did people across the
                            globe became comfortable with opting for online shopping. In India, we can safely say it
                         began a lot later.</p>

                            <p>It was only in the latter half of 2017 that the world started trusting online shopping
                            as an alternate method of purchasing. The reason behind it was the obvious lack of time
                            and energy due to the busy working schedule that left us with little or no room for running
                            these errands. A solid 4.3% hike was witnessed in the rate of the retail sales of goods and
                        services online during this period. A total of <b>USD 115 billion</b> was recorded during the third
                        quarter of 2017, including a <b>3.1%</b> increase in the online bill payment services.</p>

                            <p>However, the most common question that pesters most of us even today happens to be <b>‘why should
                        we choose E-commerce over physical retail shops?’</b> well, the answer is simple; in comparison to the
                        physical retail outlets, online options currently available sifts through by the customers and
                        provides an extensive database making it easy to shop for the good and services required from
                        anywhere anytime. With the considerable information available today; including information such
                        as product or service reviews or testimonials, competitive prices, options available for the
                        product of your choice, thus making it an easier job for the customer to make up their mind
                        whether or not to buy the product in mind. <b>Online platforms also allow you to make immediate
                        purchase options making it further convenient for us.</b></p>

                            <p className='paraColor'>Also, marketing and sales via online platform happen to be economicaland extremely progressive
                            alternative compared to the traditional methods. Online analytics also is an added bonus that
                        lets us know how well our goods or services doing </p>

                            <p>However recently e-commerce has not experienced any slowdown in its growth spree and the
                            credit goes to the constant need of the customer and their increasing reliance on them. The
                            driving factor behind it remains to be the amazing deals and offers that come with the online
                            retails that gives them a slight over the physical outlets. This helps the online business
                            to understand the buying behavior of the customers they are catering to hence allows them to
                        out beat their services in the past.</p>

                            <p>However, here’s a small interesting trivia for all of you; the first-ever online
                            transaction recorded in human history is dated back to 1972 when a student of Stanford
                            University sold some cannabis online to some MIT student using the Arpanet platform
                            account (which also stands for Advanced Research Projects Agency Network). It was a
                            packet switching network that implemented a TCP or IP protocol suite which is considered
                        to be the precursor of the Internet.</p>

                            <p>1995 became the milestone year in bringing the Search Engine Optimization method with
                            Yahoo! Followed shortly by Google in 1998. Thereafter these two channels became the two
                            biggest platforms for an increased revenue channel for e-commerce retails. The foundation
                            of PayPal in the same year 1998 made the process seamless while making the payment process
                            of global e-commerce for online vendors, commercial users, and auction sites a cakewalk.
                            The process of a financial online transaction with utmost security (as per the industry
                            norms introduced in 2004) further simplified the online transaction process. Presently,
                            PayPal has an astounding 79 percent higher checkout rates compared to all other players
                        in the respective area.</p>

                            <p>The improvement in the quality and affordability of the internet to the common man has
                            also provided an extra boost to better access to online shopping destinations or sites.
                            Globally there has been witnessed a staggering rate of online shopping among the user.
                            The credit goes to the faster internet connection via broadband and network data provision
                            along with an amplified penetration has further amped the facilitated product research for
                            interested buyers who are more interested in the search of competitive alternatives in
                        affordable prices and attractive offers.</p>

                            <p className='paraColor'>In the current times, the e-commerce industry stands on a USD 1.915 trillion (data
                        refers to the 2016 readings). </p>

                            <p>Platforms such as online Marketplace, M-commerce, and Digital marketing and Social
                            Shopping, have become an eminent a convenient choice for vendors to sell, promote their
                            products so that their products are directly and conveniently reach their customer thus
                            getting rid of the concept of middlemen hence slashing down the extra expense on their
                        cut in the products available.</p>

                            <p>Furthermore, the concept of AI (Artificial Intelligence) and machine learning are
                            foreseen as the booster for growth and development of the e-commerce industry since
                            the very base of these stand on the advancement of technology and sociocultural influences
                        that entices the interest of the modern populace.</p>

                            <p className='paraColor text-dark'>In short, we can safely say that undoubtedly, new information and innovation in
                            technology has helped make the whole process of purchasing more consistent for the
                            buyers and as well as sellers and even given route for better approaches to purchase/sell
                        products and services.</p>

                            <p className='paraColor'>Furthermore, this proceeding with progress is simply going to give individuals more
                        motivation to help e-commerce for quite a long time to come.</p>
                        </div>
                    </div>
                    <div className='col-md-4 pl-5 d-none d-md-block'>
                        <h4 className='font-weight-bold'>SHARE</h4>
                        <BrowserRouter>
                        <Link to={{ pathname: "https://www.instagram.com/invites/contact/?i=3q694vmnhw84&utm_content=27dfpsp" }} target="_blank">
                                   <Image src={Insta} width={'18%'} className='mt-3 cursor-pointer' />
                                   </Link>
                        </BrowserRouter>
                        <br />
                        <BrowserRouter>
                        <Link to={{ pathname: "https://www.linkedin.com/company/indano-e-commerce-services" }} target="_blank">
                                    <Image src={Linkd} width={'18%'} className='mt-3 cursor-pointer' />
                                    </Link>
                        </BrowserRouter>
                        <br />
                        <BrowserRouter>
                        <Link to={{ pathname: "https://www.facebook.com/indanoservice/" }} target="_blank">
                                  <Image src={Fb} width={'18%'} className='mt-3 cursor-pointer' />
                                  </Link>
                        </BrowserRouter>

                        <h3 className='font-weight-bold mt-5'>CATEGORIES</h3>
                        <p className='category_list mt-4'>Article</p>
                        <p className='category_list'>Advanced Ecommerce</p>
                        <p className='category_list'>Ecommerce Technology</p>
                        <p className='category_list'>Ecommerce Marketing</p>
                        <p className='category_list'>Ecommerce Resources</p>
                        <p className='category_list'>Digital Marketing</p>
                        <p className='category_list'>Marketing Tips</p>
                        <p className='category_list'>B2B</p>
                        <p className='category_list'>SEO</p>
                        <p className='category_list'>Marketing Tricks</p>
                    </div>
                </Row>
            </div>
            <div className='footer_blog mt-5 pt-5 pb-5 flexx'>
                <h1 className='footer_title text-center'>Want more insight like this?</h1>
                <input type="text" placeholder="Your Email Id" className="inpt mt-4 pl-3"/>
                <button className="submit d-block mt-4">Submit</button>
            </div>
        </div>
    )
}