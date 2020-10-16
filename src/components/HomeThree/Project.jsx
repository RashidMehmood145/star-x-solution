import React from 'react';
// import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import project1 from '../../assets/images/gps.png';
import project2 from '../../assets/images/lose-belly.png';
import project3 from '../../assets/images/share.png';
import project4 from '../../assets/images/weather.png';
import project5 from '../../assets/images/voice-sms.png';
import project6 from '../../assets/images/stickers.png';

const options = {
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 2000,
    margin: 30,
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
            items: 4
        }
    }
}
 
class Project extends React.Component {
    render(){
        return (
            <section id="project" className="project-area  uk-project uk-section">
                <div className="uk-container">
                    <div className="uk-section-title section-title">
                        <span>Our Completed Projects</span>
                        <h2>Recent Projects</h2>
                        <div className="bar"></div>

                        <a href="https://play.google.com/store/apps/developer?id=Alpha+App+Tech" className="uk-button uk-button-default">All Projects</a>
                    </div>
                </div>

                <OwlCarousel 
                    className="project-slides owl-carousel owl-theme"
                    {...options}
                >
                    <div className="single-project">
                        {/* <a href="https://play.google.com/store/apps/details?id=com.voice.gps.driving.directions.maps.gps.tracker.navigation.find.route" className="project-img">
                            <img src={project1} alt="Project" />
                        </a> */}
                        <a style={{display: "table-cell"}} href="https://play.google.com/store/apps/details?id=com.voice.gps.driving.directions.maps.gps.tracker.navigation.find.route" target="_blank" rel="noopener noreferrer" className="project-img"><img src={project1} alt="Project" /></a>

                        <div className="project-content">
                            <h3><a style={{display: "table-cell"}} href="https://play.google.com/store/apps/details?id=com.voice.gps.driving.directions.maps.gps.tracker.navigation.find.route"  target="_blank" rel="noopener noreferrer"> Voice GPS Driving Directions</a></h3>
                        </div>
                    </div>

                    <div className="single-project">
                        <a style={{display: "table-cell"}} href="https://play.google.com/store/apps/details?id=com.lose.belly.fat.weightlose.fatburning.femalefitness.absworkout.exercise"  target="_blank" className="project-img" rel="noopener noreferrer">
                            <img src={project2} alt="Project" />
                        </a>

                        <div className="project-content">
                            <h3><a style={{display: "table-cell"}} href="https://play.google.com/store/apps/details?id=com.lose.belly.fat.weightlose.fatburning.femalefitness.absworkout.exercise"  target="_blank" rel="noopener noreferrer">Lose Belly Fat & Weight</a></h3>
                         
                        </div>
                    </div>

                    <div className="single-project">
                        <a style={{display: "table-cell"}} href="https://play.google.com/store/apps/details?id=com.shareTo.fast.file.sharing.apps.music.documents.transfer" className="project-img"  target="_blank" rel="noopener noreferrer">
                            <img src={project3} alt="Project" />
                        </a>

                        <div className="project-content"> 
                            <h3><a style={{display: "table-cell"}} href="https://play.google.com/store/apps/details?id=com.shareTo.fast.file.sharing.apps.music.documents.transfer"  target="_blank" rel="noopener noreferrer">	
 All Files & Media Sharing</a></h3>
                        </div>
                    </div>

                    <div className="single-project">
                        <a style={{display: "table-cell"}} href="https://play.google.com/store/apps/details?id=com.weather.weather.forecast.weather.today.weather.live" className="project-img"  target="_blank" rel="noopener noreferrer">
                            <img src={project4} alt="project" />
                        </a>

                        <div className="project-content">
                            <h3><a style={{display: "table-cell"}} href="https://play.google.com/store/apps/details?id=com.weather.weather.forecast.weather.today.weather.live"  target="_blank" rel="noopener noreferrer">	
Weather Forecast weather Today</a></h3>
                            
                        </div>
                    </div>

                    <div className="single-project">
                        <a style={{display: "table-cell"}} href="https://play.google.com/store/apps/details?id=write.voicesms.Speech.to.text.messages.voicetyping" className="project-img"  target="_blank" rel="noopener noreferrer">
                            <img src={project5} alt="project" />
                        </a>

                        <div className="project-content">
                            <h3><a style={{display: "table-cell"}} href="https://play.google.com/store/apps/details?id=write.voicesms.Speech.to.text.messages.voicetyping"  target="_blank" rel="noopener noreferrer">Voice Message App</a></h3>
                          
                        </div>
                    </div>
                    <div className="single-project">
                        <a style={{display: "table-cell"}} href="https://play.google.com/store/apps/details?id=com.newstikers.stikerforwhatsapp.wastikerapps" className="project-img"  target="_blank" rel="noopener noreferrer">
                            <img src={project6} alt="project" />
                        </a>

                        <div className="project-content">
                            <h3><a style={{display: "table-cell"}} href="https://play.google.com/store/apps/details?id=com.newstikers.stikerforwhatsapp.wastikerapps"  target="_blank" rel="noopener noreferrer">	
Funny Stikers For WhatsApp</a></h3>
                            
                        </div>
                    </div>
                </OwlCarousel>
            </section>
        );
    }
}
 
export default Project;