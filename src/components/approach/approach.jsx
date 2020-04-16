import React from 'react';
import './approach.scss';
import CustomBtn from '../../shared/button/custombtn';

const CustomApproach = () => {
    return(
        <div className="approch-wrapper">

            <div className="row mt-5">

                <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6 left">
                    <img src="/assets/imgs/proo.jpg" alt="product" id="pro" />
                </div>

                <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6 right">

                    <div className="top-heading">

                        <h1 className="title">
                            a new approach to custom frame
                        </h1>
                        <div className="inner-text">
                            <div id="line"></div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda reprehenderit eveniet, dolorem in corrupti earum vitae commodi, totam cumque distinctio facere enim fugiat.</p>
                        </div>
                        <div className="social-texts">
                            <p className="txts">Facebook Instagram Twitter</p>
                        </div>
                        <CustomBtn text="start framing" className="button" />

                        
                        
                    </div>
                    
                    
                </div>

            </div>

        </div>
    );
}

export default CustomApproach;