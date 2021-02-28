import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withRouter } from "react-router";
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './assets/scss/_commonVariables.scss';
import Home from './views/home';
import Contact from './views/contact';
import About from './views/about';
import Career from './views/career';
import Blog from './views/blog';
import Amazon from './views/amazon';
import AmazonGlobal from './views/amazonGlobal';
import Flipkart from './views/flipkart';
import Myntra from './views/myntra';
import Tata from './views/tataCliq';
import Ajio from './views/ajio';
import Image from './components/commonComponents/imageContainer';
import Logo from './assets/images/company-logo/logoName.png';
import LogoChanged from './assets/images/company-logo/logo2.png';
import Footer from './components/commonComponents/footer';
import Wlogo from '../src/assets/images/social/Frame.png';
// import BrandTrustUs from '../src/views/home/brandTrustUs/customView';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      isOpen: false
    };
  }

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
    this.setState({ isOpen: false })
  }

  render() {
    const Header = (props) => {
      const { location } = props;
      return (
        <Container fluid className="bg-light fixed-top shadow mb-4">
          <>
          <div className="d-none d-xl-block">
            <Container>
              <Navbar expand="lg">
                <Navbar.Brand href="/"  className="w-46">
                  <span onMouseEnter={() => this.setState({ hover: true })} onMouseOut={() => this.setState({ hover: false })}>
                    <Image src={this.state.hover ? LogoChanged : Logo} width={'70%'} id='brand' />
                  </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav activeKey={location.pathname}>
                    <NavDropdown
                      title="Services"
                      id="basic-nav-dropdown"
                      onMouseEnter={this.handleOpen.bind}
                      onMouseLeave={this.handleClose.bind}
                      open={this.state.isOpen}
                      noCaret
                      className="dropdownHead"
                    >
                      <NavDropdown.Item href="/amazon" className="f-xl-size">Amazon.In</NavDropdown.Item>
                      <NavDropdown.Item href="/amazonglobal" className="f-xl-size">Amazon.Global</NavDropdown.Item>
                      <NavDropdown.Item href="/flipart" className="f-xl-size">Flipkart</NavDropdown.Item>
                      <NavDropdown.Item href="/myntra" className="f-xl-size">Myntra</NavDropdown.Item>
                      <NavDropdown.Item href="/tatacliq" className="f-xl-size">Tata Cliq</NavDropdown.Item>
                      <NavDropdown.Item href="/ajio" className="f-xl-size">ajio</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/about" className="f-xl-size">About us</Nav.Link>
                    <Nav.Link href="/career" className="f-xl-size">Career</Nav.Link>
                    <Nav.Link href="/blog" className="f-xl-size">Blog</Nav.Link>
                    <Nav.Link href="/contact" className="f-xl-size">Contact Us</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Container>
          </div>
          <div className="d-none d-md-block d-xl-none">
            <Container>
              <Navbar expand="lg">
                <Navbar.Brand href="/"  className="w-46">
                  <span onMouseEnter={() => this.setState({ hover: true })} onMouseOut={() => this.setState({ hover: false })}>
                    <Image src={this.state.hover ? LogoChanged : Logo} width={'70%'} id='brand' />
                  </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav activeKey={location.pathname}>
                    <NavDropdown
                      title="Services"
                      id="basic-nav-dropdown"
                      onMouseEnter={this.handleOpen.bind}
                      onMouseLeave={this.handleClose.bind}
                      open={this.state.isOpen}
                      noCaret
                    >
                      <NavDropdown.Item href="/amazon">Amazon.In</NavDropdown.Item>
                      <NavDropdown.Item href="/amazonglobal">Amazon.Global</NavDropdown.Item>
                      <NavDropdown.Item href="/flipart">Flipkart</NavDropdown.Item>
                      <NavDropdown.Item href="/myntra">Myntra</NavDropdown.Item>
                      <NavDropdown.Item href="/tatacliq">Tata Cliq</NavDropdown.Item>
                      <NavDropdown.Item href="/ajio">ajio</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/about">About us</Nav.Link>
                    <Nav.Link href="/career">Career</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <Nav.Link href="/contact">Contact Us</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Container>
          </div>
          <div className="d-md-none">
          <Navbar expand="lg">
                <Navbar.Brand href="/"  className="w-75">
                  <span onMouseEnter={() => this.setState({ hover: true })} onMouseOut={() => this.setState({ hover: false })}>
                    <Image src={this.state.hover ? LogoChanged : Logo} width={'100%'} id='brand' />
                  </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav activeKey={location.pathname}>
                    <NavDropdown
                      title="Services"
                      id="basic-nav-dropdown"
                      onMouseEnter={this.handleOpen.bind}
                      onMouseLeave={this.handleClose.bind}
                      open={this.state.isOpen}
                      noCaret
                      className="mobileDropdown"
                    >
                      <NavDropdown.Item href="/amazon"><span style={{fontSize: '8px'}}>Amazon.In</span></NavDropdown.Item>
                      <NavDropdown.Item href="/amazonglobal"><span style={{fontSize: '8px'}}>Amazon.Global</span></NavDropdown.Item>
                      <NavDropdown.Item href="/flipart"><span style={{fontSize: '8px'}}>Flipkart</span></NavDropdown.Item>
                      <NavDropdown.Item href="/myntra"><span style={{fontSize: '8px'}}>Myntra</span></NavDropdown.Item>
                      <NavDropdown.Item href="/tatacliq"><span style={{fontSize: '8px'}}>Tata Cliq</span></NavDropdown.Item>
                      <NavDropdown.Item href="/ajio"><span style={{fontSize: '8px'}}>Ajio</span></NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/about"><span style={{fontSize: '8px'}}>About us</span></Nav.Link>
                    <Nav.Link href="/career"><span style={{fontSize: '8px'}}>Career</span></Nav.Link>
                    <Nav.Link href="/blog"><span style={{fontSize: '8px'}}>Blog</span></Nav.Link>
                    <Nav.Link href="/contact"><span style={{fontSize:'8px'}}>Contact Us</span></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
          </div>
          <span className="float"><Image src={Wlogo} width={"100%"} className="my-float" /></span>
          </>
        </Container>
      );
    }
    const HeaderWithRouter = withRouter(Header);
    return (
      <React.Fragment>
        <Router>
          <HeaderWithRouter/>
          <Switch>
            <Route exact path="/indano-ecommerce-service" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/career" component={Career} />
            <Route path="/blog" component={Blog} />
            <Route path="/amazon" component={Amazon} />
            <Route path="/amazonglobal" component={AmazonGlobal} />
            <Route path="/flipkart" component={Flipkart} />
            <Route path="/myntra" component={Myntra} />
            <Route path="/tatacliq" component={Tata} />
            <Route path="/ajio" component={Ajio} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </Router>
        {/* <BrandTrustUs/> */}
        <Footer/>
      </React.Fragment>
    )
  }
}
