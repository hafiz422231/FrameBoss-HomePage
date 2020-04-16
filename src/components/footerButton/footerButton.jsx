import React from 'react';
import './footerButton.scss';

const FooterButton = (props) => {
    return(
        <div className="btn-wrapper mb-4 mt-3">
            <button className="email btn">{props.buttonEmail}</button>
            <button className="btn submit">{props.buttonSubmit}</button>
        </div>
    );
}

export default FooterButton;
