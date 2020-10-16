import React from 'react';
 
class FeaturesTwo extends React.Component {
    render(){
        return (
            <section className="uk-features uk-dark features-area">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m">
                        <div className="uk-item">
                            <div className="single-features-box">
                            <div className="icon">
                                    <i className="flaticon-ux-design"></i>
                                </div>
                                <h3>UX & UI Desgin</h3>
                                <div className="bar"></div>
                                <p>Our UI designers aim to build keen brand awareness to help your company improve customer satisfaction </p>

                                <div className="dot-img">
                                    <img src={require("../../assets/images/dot.png")} alt="dot" className="color-dot" />
                                    <img src={require("../../assets/images/white-dot.png")} alt="dot" className="white-dot" />
                                </div>

                                <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                </div>
                            </div>
                        </div>

                        <div className="uk-item">
                            <div className="single-features-box active">
                            <div className="icon">
                                    <i className="flaticon-android-logo-1"></i>
                                </div>
                                <h3>Mob App Development</h3>
                                <div className="bar"></div>
                                <p>We offer mobile app development services. Whether you want cross-platform mobile apps or prefer the native ones, we can develop them all.</p>

                                <div className="dot-img">
                                    <img src={require("../../assets/images/dot.png")} alt="dot" className="color-dot" />
                                    <img src={require("../../assets/images/white-dot.png")} alt="dot" className="white-dot" />
                                </div>

                                <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                </div>
                            </div>
                        </div>

                        <div className="uk-item">
                            <div className="single-features-box">
                            <div className="icon">
                                    <i className="flaticon-android-logo"></i>
                                </div>
                                <h3>Web Development</h3>
                                <div className="bar"></div>
                                <p>We at STAR-X design websites for you we give your brand an alluring, responsive and, most importantly, user friendly website.</p>

                                <div className="dot-img">
                                    <img src={require("../../assets/images/dot.png")} alt="dot" className="color-dot" />
                                    <img src={require("../../assets/images/white-dot.png")} alt="dot" className="white-dot" />
                                </div>

                                <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default FeaturesTwo;