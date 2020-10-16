import React from 'react';
import lax from 'lax.js';
import signature from '../../assets/images/signature.png';
import about1 from '../../assets/images/back-image.png';
import about2 from '../../assets/images/front-image.png';
import one from '../../assets/images/1.png';
// import LaxButton from '../Common/LaxButton';
 
class About extends React.Component {
    constructor(props) {
        super(props)
        lax.setup()
    
        document.addEventListener('scroll', function(x) {
            lax.update(window.scrollY)
        }, false)
    
        lax.update(window.scrollY)
    }
    render(){
        return (
            <section id="about" className="uk-about  about-area uk-section">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
                        <div className="item">
                            <div className="about-content">
                                <div className="uk-section-title section-title">
                                    <span>About Us</span>
                                    <h2>Leading the way in Star-X Solution</h2>
                                    <div className="bar"></div>
                                </div>

                                <div className="about-text">
                                    <div className="icon">
                                        <i className="flaticon-quality"></i>
                                    </div>
                                    <h3>Best Digital Agency in the World</h3>
                                    <p>We build affordable technology solutions for Different software platform, large & small. By applying modern design principles along with the latest in mobile & web technologies, we create tailored solutions that add value by connecting people with each other, businesses with their customers, and decision makers with valuable information, while simplifying Advanced Development processes, accelerating production, and lowering costs.</p>
                             

                                    <div className="signature">
                                        <img src={signature} alt="signature" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="about-img">
                                <img src={about1} className="about-img1" alt="about-img" />
                                <img src={about2} className="about-img2" alt="about-img" />
                                <img src={one} className="shape-img" alt="shape" />

                                {/* <LaxButton /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default About;