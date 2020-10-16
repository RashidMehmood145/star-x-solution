import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import woman from '../../assets/images/review.png';
import shapeImg from '../../assets/images/1.png';

const options = {
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    smartSpeed: 2000,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-right'></i>"
    ],
}
 
class Testimonials extends React.Component {

    state = {
        isOpen: false
    }

    openModal = () => {
        this.setState({isOpen: true})
    }

    render(){
        return (
            <section id="clients" className="feedback-area  uk-section uk-feedback">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
                        <div className="item">
                            <div className="feedback-img">
                                <img src={woman} alt="Testimonials" />

                                <img src={shapeImg} className="shape-img" alt="Testimonials" />

                                <Link 
                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                    to="#" 
                                    className="video-btn popup-youtube">
                                        <i className="flaticon-multimedia"></i> Watch Video
                                </Link>
                            </div>
                        </div>

                        <ModalVideo 
                            channel='youtube' 
                            isOpen={this.state.isOpen} 
                            videoId='bk7McNUjWgw' 
                            onClose={() => this.setState({isOpen: false})} 
                        />

                        <div className="item">
                            <div className="feedback-inner">
                                <div className="uk-section-title section-title">
                                    <span>What Client Says About US</span>
                                    <h2>Our Testimonials</h2>
                                    <div className="bar"></div>
                                </div>

                                <OwlCarousel 
                                    className="feedback-slides owl-carousel owl-theme"
                                    {...options}
                                >
                                    <div className="single-feedback">
                                        <i className="flaticon-quote"></i>
                                        <p>Voice GPS Driving Directions Maps : GPS Navigationfind directions best gps into all navigation apps also has broad range of supplementary maps directions features like a talking gps which gives you course map to users an opportunity to use voice commands to search for different locations and navigat...</p>

                                        <div className="client">
                                            <h3>Demi Moore</h3> 
                                            <span>Voice GPS Driving Directions App</span>
                                        </div>
                                    </div>

                                    <div className="single-feedback">
                                        <i className="flaticon-quote"></i>
                                        <p>Lose belly fat and weight in 30 days is a best application for anyone who searching for an application with the help he/she can lose weight.Fitness workout app has three sick pack abs workout plans. Namely Beginner, Intermediate, and Advanced 30 Day Fitness Challenge..</p>

                                        <div className="client">
                                            <h3>Dave Dan</h3>
                                            <span>Lose Belly Fat & Weight App </span>
                                        </div>
                                    </div>

                                    <div className="single-feedback">
                                        <i className="flaticon-quote"></i>
                                        <p>Voice SMS is very amazing and useful app for writing without typing. It has access to write the SMS by voice. Idea was great to build this nice app and features. I like it so much and recommend you to install it.</p>

                                        <div className="client">
                                            <h3>Jack Alis</h3>
                                            <span>Voice Message App</span>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Testimonials;