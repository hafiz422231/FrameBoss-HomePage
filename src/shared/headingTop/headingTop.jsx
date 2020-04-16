import React from 'react';
import './headingTop.scss';

const HeadingTop = (props) => {
    return(
        <div className="main-wrapper">
            <div className="heading-1 text-center">
                <h3>{props.data1}</h3>
                <div className="lower-line"></div>
            </div>
            <p className="heading-2 text-center">{props.data2}</p>
        </div>
    );
};

export default HeadingTop;