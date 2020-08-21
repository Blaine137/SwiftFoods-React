import React, { Fragment } from 'react';
import Navigation from './Navbar/Navbar';
import './Header.scss';


const header = (props) => {

    return(

        <Fragment>
            <header className="jumbotron jumbotron-fluid mb-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-4 col-sm-3 col-md-2 align-self-center">
                            <a href="index.html"><img src="assets/images/swiftfoodslogodcolor.png" alt="" className="image-fluid img-thumbnail headerLogo scale-in-center"/></a>
                        </div>
                        <div className="col">
                            <h1 className="slide-in-left">Swift Foods</h1>
                            <h2 className="slide-in-right">a better way to eat!</h2>
                        </div>
                        <div className="col-md-2 col-xl-2 col-sm-3 text-center ">
                            <a className="btn btn-large btn-primary mt-4 subscribeBtn slide-in-top" data-toggle="#" data-target="#" href="#subscribeForm">Subscribe</a>
                        </div>
                    </div>
                </div>
            </header>
            <Navigation />
        </Fragment>

    );

};

export default header;