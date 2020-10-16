import React from 'react';
import { Link } from 'react-router-dom';
// import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
 
class Banner extends React.Component {
    state = {
        isOpen: false
    }

    openModal = () => {
        this.setState({isOpen: true})
    }
    render(){
        // let modalStyles = {overlay: {zIndex: 100000000000000}};
        return (

            <div >
            <div id="home" className="uk-banner main-banner item-bg1">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="uk-container">
                            <div className="main-banner-content">
                                <h2>Be Digitally</h2> <h1 className="mt-2">Transformed <br /> Inside out! </h1>
                                <p>Building Intelligent Apps, We help add value through Mobile Apps technology, custom built for your needs. We have built trust by delivering the best results for clients! Our team is focused on meeting your product Development ultimate targets!</p>
                                <Link to="#" className="uk-button uk-button-default">Get Started</Link>
                                {/* <Link 
                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                    to="#" 
                                    className="video-btn popup-youtube">
                                        <span uk-icon="play"></span> Watch Video
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <ModalVideo 
                style={ modalStyles }
                channel='youtube' 
                isOpen={this.state.isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => this.setState({isOpen: false})} 
            /> */}
            </div>
        );
    }
}
 
export default Banner;