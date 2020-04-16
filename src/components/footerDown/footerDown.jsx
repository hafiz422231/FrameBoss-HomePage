import React from 'react';
import './footerDown.scss';

const FooterDown = (props) => {
    return(
        <div className="foo">
            <p className="heading">&copy; {props.data}</p>
        </div>
    );
}

export default FooterDown;