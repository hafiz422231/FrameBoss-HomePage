import React from 'react';
import './blog.scss';
import HeadingTop from '../../shared/headingTop/headingTop';
import CustomBtn from '../../shared/button/custombtn';

const Blog = (props) => {
    return(
        <div className="blog-wrapper">
            
            <HeadingTop data1="Our Blog" data2="Our countless frame types are loved by global frame lovers, due to the variety, quality yet simplicity." />

            <div className="row mt-5">

                {
                    props.data.map( m => (
                        <div key={m.id} className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <div className="row pl-0">
                                <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12 image">
                                    <img src={m.image} alt={m.title} />
                                </div>
                                <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                                    <div className="inner-div">
                                        <p>{m.title}</p>
                                        <h6>{m.desc}</h6>
                                        <div className="inner-date clearfix">
                                            <p className="float-left">By admin</p>
                                            <p className="float-right">30/3/2020</p>
                                        </div>
                                        <p className="text">{m.text}</p>
                                    </div>
                                    <CustomBtn text="read more" className="custmbtn" />
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    );
}

export default Blog;