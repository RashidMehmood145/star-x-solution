import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/startXlogo-white.png';
import footerShapeOne from '../../assets/images/footer-shape1.png';
import footerShapeTwo from '../../assets/images/footer-shape2.png';
import GoTop from './GoTop';
 
class Footer extends React.Component {
    render(){
        return (
            <footer className="footer-area uk-dark uk-footer">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-4@m uk-child-width-1-2@s">
                        <div className="item">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link to="index.html">
                                        <img src={logo} alt="logo" width="160px"  />
                                    </Link>
                                </div>

                                <p>Building Intelligent Apps, We help add value through Mobile Apps technology, custom built for your needs.</p>
                            </div>
                        </div>

                        <div className="item">
                                {/* <div className="single-footer-widget">
                                    <h3>New York</h3>
                                    <div className="bar"></div>

                                    <div className="location">
                                        <p>198 Collective Street <br /> Manhattan <br /> Kingston <br /> United State</p>
                                    </div>
                                </div> */}
                        </div>

                        <div className="item">
                            <div className="single-footer-widget">
                                <h3>Rawalpindi</h3>
                                <div className="bar"></div>

                                <div className="location">
                                    <p>Plot no 24, <br /> commercials Hub <br /> bahira town phase 8 <br /> Pakistan</p>
                                </div>
                            </div>
                        </div>
               

                        <div className="item">
                            <div className="single-footer-widget">
                                <h3>Contact</h3>
                                <div className="bar"></div>

                                <ul className="contact-info">
                                    <li><Link to="#">www.starxsolution.com</Link></li>
                                    <li><Link to="#">+9251-5410-350</Link></li>
                        
                                </ul>
                                <ul className="social">
                                    <li><a href="https://www.facebook.com/starxsolution" alt="fb"><i className="flaticon-logo"></i></a></li>
                                    {/* <li><Link to="#"><i className="flaticon-twitter"></i></Link></li> */}
                                    <li><a href="https://www.linkedin.com/in/star-x-solution-8365581b6/" alt="linkedin"><i className="flaticon-linkedin"></i></a></li>
                                    {/* <li><Link to="#"><i className="flaticon-logo-1"></i></Link></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-2@s">
                            <div className="item">
                                <p>© Star-X. All Rights Reserved, 2020</p>
                            </div>
{/* 
                            <div className="item">
                                <ul>
                                    <li><Link to="#">Terms & Conditions</Link></li>
                                    <li><Link to="#">Privacy Policy</Link></li>
                                </ul>
                            </div> */}
                        </div>
                        <GoTop scrollStepInPx="50" delayInMs="16.66" />
                    </div>
                </div>

                <div className="br-line"></div>
                <div className="footer-shape1">
                    <img src={footerShapeOne} alt="shape" />
                </div>
                <div className="footer-shape2">
                    <img src={footerShapeTwo} alt="shape" />
                </div>
            </footer>
        );
    }
}
 
export default Footer;