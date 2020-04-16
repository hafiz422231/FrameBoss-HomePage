import React from 'react';
import './works.scss';
import HeadingTop from '../../shared/headingTop/headingTop';

const Works = () => {

    return(
        <div className="works-wrapper">
            
            <HeadingTop data1="Our Impressive Works" data2="Design a custom frame for photo,art, and more." />

            <div className="row mt-5 mb-5">
                <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6 left-side">
                    <img src="/assets/imgs/work_left.png" alt="" />
                    <div className="bord"></div>              
                </div>
                <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="row p-0">

                        <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6 col-xl-6 right-side">
                            <img src="/assets/imgs/work_3.png" alt="" />
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6 col-xl-6 right-side">
                            <img src="/assets/imgs/work_2.png" alt="" />
                        </div>
                        <div className="pt-5 col-md-12 col-sm-12 col-xs-12 col-lg-12 col-xl-12 right-side-img">
                            <img src="/assets/imgs/work_1.png" alt="" />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Works;