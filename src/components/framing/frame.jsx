import React from 'react';
import './frame.scss';
import HeadingTop from '../../shared/headingTop/headingTop';

const FrameComponent = (props) => {
    
    return(
        <div className="frame-wrapper">
            
            <HeadingTop data1="What Are You Framing?" data2="Design a custom frame for photos,art, and more." />

            <div className="row mt-5">
                {
                    props.data.map( m => (
                        <div key={m.id} className="col-lg-2 col-xl-2 col-md-4 col-sm-6 col-xs-12 frames">
                            <div className="background" 
                             >
                                <img src={m.image} alt={m.text} />
                                <div className="overlay"></div>
                                <button className="button">FRAME NOW</button>
                            </div>
                            <p className="text">{m.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default FrameComponent;