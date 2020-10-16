import React from 'react';
import { Link } from 'react-router-dom';
 
class ServiceTwoContent extends React.Component {
    render(){
        return (
           <div id="services">
            
                    <div className="uk-section-title section-title uk-container">
                        <span>What We Do</span>
                        <h2>Our Services</h2>
                        <div className="bar"></div>
                    </div>
                
            <section/>
            <section className="services-area uk-services uk-section">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s">
                        <div className="item">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-plan"></i>
                                </div>
                                <h3><Link to="#">Digital Branding</Link></h3>
                                <div className="bar"></div>
                                <p> As digital brand pioneers, we specialize in creating all the branding needed in the digital world, including Mobile and web presentations.  </p>

                                <Link to="#" className="link-btn"><span>Read More</span> <i className="flaticon-right"></i></Link>

                                <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-think"></i>
                                </div>
                                <h3><Link to="#">Creative Solutions</Link></h3>
                                <div className="bar"></div>
                                <p>We are committed to the success of our clients. Because we provide a personal, relationship-driven service to our clients.</p>

                                <Link to="#" className="link-btn"><span>Read More</span> <i className="flaticon-right"></i></Link>

                                <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-shout"></i>
                                </div>
                                <h3><Link to="#">Marketing Solutions</Link></h3>
                                <div className="bar"></div>
                                <p>Our clients' success is at the heart of what we do, so we work to understand client needs in a responsive and proactive manner .</p>

                                <Link to="#" className="link-btn"><span>Read More</span> <i className="flaticon-right"></i></Link>

                                <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-analytics-1"></i>
                                </div>
                                <h3><Link to="#">Business Analytics</Link></h3>
                                <div className="bar"></div>
                                <p>We provide easy-to-use, self-service BI capabilities and the deployment of real-time analytics directly to mobile devices and Microsoft applications.</p>

                                <Link to="#" className="link-btn"><span>Read More</span> <i className="flaticon-right"></i></Link>

                                <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                </div>
                            </div>
                        </div>

                        {/* <div className="item">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-ux-design"></i>
                                </div>
                                <h3><Link to="#">UX & UI Design</Link></h3>
                                <div className="bar"></div>
                                <p>Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur adipiscing elit.</p>

                                <Link to="#" className="link-btn"><span>Read More</span> <i className="flaticon-right"></i></Link>

                                <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="item">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-camera"></i>
                                </div>
                                <h3><Link to="#">Photography</Link></h3>
                                <div className="bar"></div>
                                <p>Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur adipiscing elit.</p>

                                <Link to="#" className="link-btn"><span>Read More</span> <i className="flaticon-right"></i></Link>

                                <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                </div>
                            </div>
                        </div> */}
{/* 
                        <div className="item">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-project"></i>
                                </div>
                                <h3><Link to="#">Management</Link></h3>
                                <div className="bar"></div>
                                <p>Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur adipiscing elit.</p>

                                <Link to="#" className="link-btn"><span>Read More</span> <i className="flaticon-right"></i></Link>

                                <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                </div>
                            </div>
                        </div> */}

                        <div className="item">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-chat"></i>
                                </div>
                                <h3><Link to="#">Social Media</Link></h3>
                                <div className="bar"></div>
                                <p>We confidently give a variety of social media writing with posting services to assist you unswervingly or indirectly market your offerings through online social media.</p>

                                <Link to="#" className="link-btn"><span>Read More</span> <i className="flaticon-right"></i></Link>

                                <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-data"></i>
                                </div>
                                <h3><Link to="#">Data Science</Link></h3>
                                <div className="bar"></div>
                                <p>Use next gen analytics to power a data driven company that will help you make sure that you are the best in market.</p>

                                <Link to="#" className="link-btn"><span>Read More</span> <i className="flaticon-right"></i></Link>

                                <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pagination-area">
                        <ul className="uk-pagination uk-flex-center">
                            <li><Link to="#"><span className="flaticon-back"></span></Link></li>
                            <li><Link to="#">1</Link></li>
                            <li><Link to="#">2</Link></li>
                            <li className="uk-active"><Link to="#">3</Link></li>
                            <li><Link to="#">4</Link></li>
                            <li><Link to="#"><span className="flaticon-right"></span></Link></li>
                        </ul>
                    </div>
                </div>
            </section>
            </div>
        );
    }
}
 
export default ServiceTwoContent;