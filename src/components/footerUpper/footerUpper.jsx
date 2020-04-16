import React from 'react';
import './footerUpper.scss';
import FooterButton from '../footerButton/footerButton';
import {Link} from 'react-router-dom';

const FooterUpper = () => {

    return(
        <div className="container-fluid">
            
            <div className="wrapper">
                
                <div className="row">
                    <div className="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12">
                        <Link to="" className="items clearfix">
                            <p className="float-left mr-2">Get the app</p>
                            <Link to="" className="items mr-3 float-left">
                                <img src="/assets/icons/apple.png" alt="twitter" width="17px" />
                            </Link>
                        </Link>
                        <div className="social-icons mb-4">
                            <p className="items mb-0">Follow us</p>
                            <Link to="" className="items mr-3"><img src="/assets/icons/twitter.png" alt="twitter" width="17px" /></Link>
                            <Link to="" className="items mr-3"><img src="/assets/icons/facebook.png" alt="facebook" width="10px" /></Link>
                            <Link to="" className="items mr-3"><img src="/assets/icons/insta.png" alt="Instagram" width="17px" /></Link>
                        </div>
                        <p className="items mb-0">Get inspiration</p>

                        <FooterButton buttonEmail="enter you email" buttonSubmit="submit" />

                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 col-sm-6 col-xs-6">
                        <Link to="" className="items">
                            <p>How It Works</p>
                        </Link>
                        <Link to="" className="items"><p>Press</p></Link>
                        <Link to="" className="items"><p>For Art & Trade</p></Link>
                        <Link to="" className="items"><p>The Shop</p></Link>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 col-sm-6 col-xs-6">
                        <Link to="" className="items"><p>FAQ</p></Link>
                        <Link to="" className="items"><p>For Business</p></Link>
                        <Link to="" className="items"><p>Company</p></Link>
                        <Link to="" className="items"><p>Careers</p></Link>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 col-sm-6 col-xs-6">
                        <Link to="" className="items">
                            <p>Stores</p>
                        </Link>
                        <Link to="" className="items"><p>Prices</p></Link>
                        <Link to="" className="items"><p>Reviews</p></Link>
                        <Link to="" className="items"><p>Design Services</p></Link>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-1 col-sm-6 col-xs-6">
                        <Link to="" className="items">
                            <p>About Us</p>
                        </Link>
                        <Link to="" className="items"><p>Gift Card</p></Link>
                        <Link to="" className="items"><p>Contact Us</p></Link>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 col-sm-6 col-xs-6">
                        <Link to="" className="items">
                            <p>Terms Of Service</p>
                        </Link>
                        <Link to="" className="items"><p>Privacy Policy</p></Link>
                        <Link to="" className="items"><p>Accessibility</p></Link>
                        <Link to="" className="items"><p>Sitemap</p></Link>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default FooterUpper;