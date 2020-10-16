import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import teamOne from '../../assets/images/Hassan-Afzal.png';
import teamTwo from '../../assets/images/Haider-Zaman.png';
import teamThree from '../../assets/images/Shahzad-Ahmad-(CEO).png';
import teamFour from '../../assets/images/Salman.png';
import teamFive from '../../assets/images/Arshad-Iqbal.png';

const options = {
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 2000,
    margin: 15,
    autoplayHoverPause: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        786: {
            items: 2
        },
        1200: {
            items: 5
        }
    }
}
 
class Team extends React.Component {
    render(){
        return (
            <section id="team" className="team-area  uk-team uk-section">
                <div className="uk-container">
                    <div className="uk-section-title section-title">
                        <span>Meet Our Partners</span>
                        <h2>Our Team</h2>
                        <div className="bar"></div>

                        <Link to="#" className="uk-button uk-button-default">View All</Link>
                    </div>
                </div>

                <OwlCarousel 
                    className="team-slides owl-carousel owl-theme uk-container"
                    {...options}
                >
                    <div className="single-team">
                        <ul className="team-social">
                            <li><Link to="#"><i className="flaticon-logo"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-twitter"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-linkedin"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-logo-1"></i></Link></li>
                        </ul>

                        <img src={teamOne} alt="team" />

                        <div className="team-content">
                            <h3>M Hassaan Afzal</h3>
                            <span>CEO FHA Technology</span> 
                        </div>
                    </div>

                    <div className="single-team">
                        <ul className="team-social">
                            <li><Link to="#"><i className="flaticon-logo"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-twitter"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-linkedin"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-logo-1"></i></Link></li>
                        </ul>

                        <img src={teamTwo} alt="team" />

                        <div className="team-content">
                            <h3>Haider Zaman</h3>
                            <span>CEO EASTGATE Technology</span>
                        </div>
                    </div>

                    <div className="single-team">
                        <ul className="team-social">
                            <li><Link to="#"><i className="flaticon-logo"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-twitter"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-linkedin"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-logo-1"></i></Link></li>
                        </ul>

                        <img src={teamThree} alt="team" />

                        <div className="team-content">
                            <h3>Shahzad Ahmad</h3>
                            <span>CEO Star-X Solution</span>
                        </div>
                    </div>

                    <div className="single-team">
                        <ul className="team-social">
                            <li><Link to="#"><i className="flaticon-logo"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-twitter"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-linkedin"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-logo-1"></i></Link></li>
                        </ul>

                        <img src={teamFour} alt="team" />

                        <div className="team-content">
                            <h3>Salman Hassan Qasir</h3>
                            <span>CEO COMPULOGIC Standard Solution </span>
                        </div>
                    </div>

                    <div className="single-team">
                        <ul className="team-social">
                            <li><Link to="#"><i className="flaticon-logo"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-twitter"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-linkedin"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-logo-1"></i></Link></li>
                        </ul>

                        <img src={teamFive} alt="team" />

                        <div className="team-content">
                            <h3>Arshad Iqbal</h3>
                            <span>COO Star X Solution</span>
                        </div>
                    </div>

                  
                </OwlCarousel>
            </section>
        );
    }
}
 
export default Team;