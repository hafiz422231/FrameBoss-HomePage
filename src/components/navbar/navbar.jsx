import React,{useState} from 'react';
import './navbar.scss';
import {Link} from 'react-router-dom';
import {ServicesMenus,FramesMenus} from '../../Data/dropDownItems';


const Navbar = () => {

    const [ serviceHide,setServiceHide ] = useState(false)
    const [ frameHide,setFrameHide ] = useState(false)

    const showServicesMenu = () => {
        if(serviceHide === true){
            setServiceHide(false)
        }
        else{
            setServiceHide(true)
        }
    }

    const showFrameMenu = () => {
        if (frameHide === true){
            setFrameHide(false)
        }
        else{
            setFrameHide(true)
        }
    }


    return(
        <div className="navBar-wrapper">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <h6 id="brand">Index</h6>
                    
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item active dropdown">
                            <Link to="" className="link mr-5 dropdown-toggle" 
                             onClick={showServicesMenu}
                             >
                                SERVICES
                            </Link>
                            {serviceHide && <div className="nav-menus">
                                {
                                    ServicesMenus.map(value => (
                                        <Link key={value.id} to={value.routeName} className="inner-link"
                                         >
                                            {value.title}
                                        </Link>
                                    ))
                                }
                            </div>}
                        </li>
                        <li className="nav-item" onClick={showFrameMenu}>
                            <Link to="" className="link mr-5 dropdown-toggle">
                                Frames
                            </Link>
                            {frameHide && <div className="nav-menus">
                                {
                                    FramesMenus.map(value => (
                                        <Link key={value.id} to={value.routeName} className="inner-link">
                                            {value.title}
                                        </Link>
                                    ))
                                }
                            </div>}
                        </li>
                        <li className="nav-item">
                            <Link to="" className="link mr-5">
                                Blogs
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="" className="link mr-5">
                                Contact US
                            </Link>
                        </li>
                    </ul>
                    
                    <div className="my-2 my-lg-0 right-icons">
                        <Link className="mr-4 ml-3 icon" to="">
                            <img src="/assets/icons/user.png" alt="" />
                        </Link>
                        <Link className="mr-sm-2" id="cart" to="">
                            <img src="/assets/icons/add_to_cart.png" alt="" width="33px" />
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;