import React from 'react';
import './product.scss';
import HeadingTop from '../../shared/headingTop/headingTop';

const ProductComponent = (props) => {

    return(
        <div className="product-wrapper">
            
            <HeadingTop data1="Feature Product" data2="Design a custom frame for photos,art, and more." />

            <div className="row mt-5">
                <div className="col-lg-6 col-xl-6 col-sm-12 col-xs-12 col-md-6">
                    <div className="main-logo">
                        <img src="/assets/imgs/product.png" alt="" />
                    </div>
                </div>
                
                <div className="col-xs-12 clearfix col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="row p-0">    
                        {
                            props.data.map( m => (
                                <div key={m.id} className="col-md-6 col-lg-4 col-xl-4 col-sm-6 col-xs-12">
                                    <div className="background">
                                        <img src={m.image} alt={m.text} />
                                        <div className="others">
                                            <img src="/assets/icons/heart.png" alt="" />
                                            <button>start framing</button>
                                        </div>
                                    </div>
                                    <p className="text">{m.text}</p>
                                </div>
                            ))
                        }
                    </div>        
                </div>
                
                
                                    
            </div>

        </div>
    );
}

export default ProductComponent;