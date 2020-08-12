import React from 'react';
import './SubscribeForm.scss';

const subscribeForm = (props) => {

    return(

        <div className="container mt-4" id="subscribeForm">
            <div className="row">
                <div className="col-12">
                    <h3 className="text-center pt-4 mt-5 mb-4 align-self-center">Subscribe!</h3>
                </div>
            </div>
            <div className="row">
                    <form className="mx-auto  mb-4 p-4 col-10" action="thankyouforsubscribing.html">
                        <div className="form-group row mt-5">
                            <label htmlFor="fName" className="col-sm-2 col-form-label">First Name*</label>
                            <div className="col-sm-4">
                            <input type="text" className="form-control" id="fName" required placeholder="Enter Your First Name"/>
                            </div>
                            <label htmlFor="lName" className="col-sm-2 col-form-label">Last Name*</label>
                            <div className="col-sm-4">
                            <input type="text" className="form-control" id="lName" required placeholder="Enter Your Last Name"/>
                            </div>
                        </div>
                        <div className="form-group row mt-5">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email*</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="email" required placeholder="Enter Your Email"/>
                        </div>
                        <label htmlFor="address" className="col-sm-2 col-form-label">Address*</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="address" required placeholder="Enter Your Address"/>
                        </div>
                        </div>
                        <div className="form-group row mt-5">
                            <label htmlFor="city" className="col-sm-2 col-form-label">City*</label>
                            <div className="col-sm-4">
                            <input type="text" className="form-control" required id="city" placeholder="Enter Your City"/>
                            </div>
                            <label htmlFor="state" className="col-sm-2 col-form-label">State*</label>
                            <div className="col-sm-4">
                            <input type="text" className="form-control" required id="state" placeholder="Enter Your State"/>
                            </div>
                        </div>
                        <div className="form-group row mt-5">
                            <label htmlFor="zipcode" className="col-sm-2 col-form-label">Zipcode*</label>
                            <div className="col-sm-4">
                            <input type="text" className="form-control" required id="zipcode" placeholder="Enter Your Zipcode"/>
                            </div>
                            <label htmlFor="months" className="col-sm-2 col-form-label">Months*</label>
                            <div className="col-sm-4">
                            <select name="months" id="months" required className="form-control">
                                <option value="0">Select...</option>
                                <option value="1">3 months</option>
                                <option value="2">6 months</option>
                                <option value="3">12 months</option>
                            </select>
                            </div>
                        </div>
                        <div className="form-group row mt-5">
                            <label htmlFor="cardType" className="col-sm-2 col-form-label">Card Type*</label>
                            <div className="col-sm-4">
                            <select name="cardType" id="cardType" required className="form-control">
                                <option value="0">Select...</option>
                                <option value="1">Visa</option>
                                <option value="2">Mastercard</option>
                                <option value="3">American Express</option>
                            </select>
                            </div>
                            <label htmlFor="cardNum" className="col-sm-2 col-form-label">Card Num*</label>
                            <div className="col-sm-4">
                            <input type="password" className="form-control" id="cardNum" required placeholder="Enter Your Card Number"/>
                            </div>
                        </div>
                        <div className="form-group row mt-5">
                            <label htmlFor="expireDate" className="col-sm-2 col-form-label">Card Expires*</label>
                            <div className="col-sm-4">
                            <input type="text" className="form-control" id="expireDate" required placeholder="Enter Your Expire Date"/>
                            </div>
                            <label htmlFor="securityCode" className="col-sm-2 col-form-label">SecurityNum*</label>
                            <div className="col-sm-4">
                            <input type="text" className="form-control" id="securityCode" required placeholder="Enter Your Security Code"/>
                            </div>
                        </div>
                        <div className="form-group row mt-5">
                                <button className="btn mx-auto submitBtn subBtn">Submit</button>
                        </div>
                    </form>
            </div>
        </div>

    );

};

export default subscribeForm;