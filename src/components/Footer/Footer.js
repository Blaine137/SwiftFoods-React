import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const footer = (props) => {

    return(

            <footer class="site-footer mt-4">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-4 col-sm-2 offset-1">
                            <h4 class="footerH4">Links</h4>
                            <ul class="list-unstyled">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="aboutus.html">About Us</a></li>
                                <li><a href="shop.html">Shop</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>

                        </div>
                        <div class="col-6 col-sm-5 text-center">
                            <a class="btn btn-large btn-primary mt-4 subscribeBtn" data-toggle="#" data-target="#" href="#subscribeForm">Subscribe</a>
                        </div>
                        <div class="col-sm-4 text-center contactInfo">
                            <a  role="button" href="tel:+12065551234" class="btn btn-link"><FontAwesomeIcon icon={faPhone}/> 1-770-678-9900</a><br/>
                            <a role="button" href="mailto:campsites@nucamp.co" class="btn btn-link"><FontAwesomeIcon icon={faEnvelope}/> foodnow@swiftfoods.com</a>
                        </div>
                    </div>
                </div>
            </footer>

    );

};

export default footer;