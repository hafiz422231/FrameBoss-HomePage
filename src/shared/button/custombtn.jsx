import React from 'react';
import './custombtn.scss';

const CustomBtn = (props) => {
    return(
        <div className="custom-button">
            <button className={`${props.className} button`}>{props.text}</button>
        </div>
    );
}

export default CustomBtn;