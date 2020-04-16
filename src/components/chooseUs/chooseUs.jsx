import React from 'react';
import './chooseUs.scss';
import CustomBtn from '../../shared/button/custombtn';

const ChooseUs = (props) => {
    return(
        <div className="choose-wrapper">

            <div className="row mt-5">

                <div className="col-md-7 col-lg-7 col-xl-7 col-sm-12 col-xs-12 left">
                    <div className="top-heading">
                        <h2>Why Choose Us</h2>
                        <p>Our countless frames types are loved by global frame lovers, due to the variety,quality yet simplicity.</p>
                    </div>
                    <div className="icons">
                        <div className="row pl-0">

                            {
                                props.data.map( m => (
                                    <div key={m.id} className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12 left">
                                        <div className="row-inner w-100">
                                            <div className="col-md-6 p-0 col-lg-6 col-xl-6 col-sm-12 col-xs-12 left-inner">
                                        
                                                <img src={m.image} alt={m.title} id="bus" />
                                        
                                            </div>
                                            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 right-inner">
                                                <div className="inner-text">
                                                    <p className="heading">{m.title}</p>
                                                    <p className="txt">{m.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            
                        </div>
                        
                        <CustomBtn text="Start framing" className="button" />

                    </div>
                </div>
                <div className="col-md-5 col-lg-5 col-xl-4 col-sm-12 col-xs-12 right">
                    <img src="/assets/imgs/frame.png" alt="frame" className="frame" />
                    <img src="/assets/imgs/flower.png" alt="pic" className="pic" />
                </div>

            </div>

        </div>
    );
}

export default ChooseUs;
                                