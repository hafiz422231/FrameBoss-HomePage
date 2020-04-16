import React from 'react';
import './clientt.scss';
import HeadingTop from '../../shared/headingTop/headingTop';

const Client = () => {
    return(
        <div className="client-wrapper">

            <HeadingTop data1="We Love Our Client" data2="Design a custom frame for photo,art, and more." />

            <div className="row mt-5">

                <div className="col-md-4 col-lg-4 col-xl-3 col-sm-12 col-xs-12">
                    <img src="/assets/imgs/women.png" alt="women" width="100%" id="women" />
                </div>
                <div className="col-md-8 col-lg-8 col-xl-8 col-sm-12 col-xs-12 text">
                    <h6 className="title">JERMY COURSE</h6>
                    <p className="title-heading">(Graphic Designer)</p>
                    <div className="inner-div">
                            <p className="paragraph">
                                <img src="/assets/icons/comas_1.png" className="mr-3" alt="qoutes" />
                                    I was looking a way to save my University degree from getting damaged while showing to others and I found index. framing options. I have got my degree framed in stylish design which is also adding beauty to my room.
                                <img src="/assets/icons/comas_2.png" alt="qoutes" className="ml-2" />
                            </p>
                        <div className="inner-arrows">
                            <img src="/assets/icons/arrow_left.png" alt="arrow-left" /> 
                            <span> | </span> 
                            <img src="/assets/icons/arrow_right.png" alt="arrow-right" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Client;