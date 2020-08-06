import React from 'react';
import './SubscribeForm.scss';

const subscribeForm = (props) => {

    return(

        <div class="container mt-4" id="subscribeForm">
            <div class="row">
                <div class="col-12">
                    <h3 class="text-center pt-4 mt-5 mb-4 align-self-center">Subscribe!</h3>
                </div>
            </div>
            <div class="row">
                    <form class="mx-auto  mb-4 p-4 col-10" action="thankyouforsubscribing.html">
                        <div class="form-group row mt-5">
                            <label for="fName" class="col-sm-2 col-form-label">First Name*</label>
                            <div class="col-sm-4">
                            <input type="text" class="form-control" id="fName" required placeholder="Enter Your First Name"/>
                            </div>
                            <label for="lName" class="col-sm-2 col-form-label">Last Name*</label>
                            <div class="col-sm-4">
                            <input type="text" class="form-control" id="lName" required placeholder="Enter Your Last Name"/>
                            </div>
                        </div>
                        <div class="form-group row mt-5">
                        <label for="email" class="col-sm-2 col-form-label">Email*</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="email" required placeholder="Enter Your Email"/>
                        </div>
                        <label for="address" class="col-sm-2 col-form-label">Address*</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="address" required placeholder="Enter Your Address"/>
                        </div>
                        </div>
                        <div class="form-group row mt-5">
                            <label for="city" class="col-sm-2 col-form-label">City*</label>
                            <div class="col-sm-4">
                            <input type="text" class="form-control" required id="city" placeholder="Enter Your City"/>
                            </div>
                            <label for="state" class="col-sm-2 col-form-label">State*</label>
                            <div class="col-sm-4">
                            <input type="text" class="form-control" required id="state" placeholder="Enter Your State"/>
                            </div>
                        </div>
                        <div class="form-group row mt-5">
                            <label for="zipcode" class="col-sm-2 col-form-label">Zipcode*</label>
                            <div class="col-sm-4">
                            <input type="text" class="form-control" required id="zipcode" placeholder="Enter Your Zipcode"/>
                            </div>
                            <label for="months" class="col-sm-2 col-form-label">Months*</label>
                            <div class="col-sm-4">
                            <select name="months" id="months" required class="form-control">
                                <option value="0">Select...</option>
                                <option value="1">3 months</option>
                                <option value="2">6 months</option>
                                <option value="3">12 months</option>
                            </select>
                            </div>
                        </div>
                        <div class="form-group row mt-5">
                            <label for="cardType" class="col-sm-2 col-form-label">Card Type*</label>
                            <div class="col-sm-4">
                            <select name="cardType" id="cardType" required class="form-control">
                                <option value="0">Select...</option>
                                <option value="1">Visa</option>
                                <option value="2">Mastercard</option>
                                <option value="3">American Express</option>
                            </select>
                            </div>
                            <label for="cardNum" class="col-sm-2 col-form-label">Card Num*</label>
                            <div class="col-sm-4">
                            <input type="password" class="form-control" id="cardNum" required placeholder="Enter Your Card Number"/>
                            </div>
                        </div>
                        <div class="form-group row mt-5">
                            <label for="expireDate" class="col-sm-2 col-form-label">Card Expires*</label>
                            <div class="col-sm-4">
                            <input type="text" class="form-control" id="expireDate" required placeholder="Enter Your Expire Date"/>
                            </div>
                            <label for="securityCode" class="col-sm-2 col-form-label">SecurityNum*</label>
                            <div class="col-sm-4">
                            <input type="text" class="form-control" id="securityCode" required placeholder="Enter Your Security Code"/>
                            </div>
                        </div>
                        <div class="form-group row mt-5">
                                <button class="btn mx-auto submitBtn subBtn">Submit</button>
                        </div>
                    </form>
            </div>
        </div>

    );

};

export default subscribeForm;