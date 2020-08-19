import React, { Component } from 'react';
import {Form, Button, FormGroup, Label, Input, Col} from 'reactstrap';
import './SubscribeForm.scss';

class SubscribeForm extends Component {


    render(){

            return(

                <div className="container mt-4" id="subscribeForm">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-center pt-4 mt-5 mb-4 align-self-center">Subscribe!</h3>
                        </div>
                    </div>
                    <div className="row">
                            <Form className="mx-auto mb-4 p-4 col-10" action="thankyouforsubscribing.html">
                                <FormGroup row className="mt-lg-5">
                                    <Label htmlFor="fName" className="col-form-label" lg={2}>First Name*</Label>
                                    <Col  lg={4}>
                                        <Input type="text" className="form-control" id="fName" required placeholder="Enter Your First Name"/>
                                    </Col>
                                    <Label htmlFor="lName" className="col-form-label" lg={2}>Last Name*</Label>
                                    <Col  lg={4}>
                                        <Input type="text" className="form-control" id="lName" required placeholder="Enter Your Last Name"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row className="mt-lg-5">
                                    <Label htmlFor="email" className="col-form-label" lg={2}>Email*</Label>
                                    <Col lg={4}>
                                        <Input type="text" className="form-control" id="email" required placeholder="Enter Your Email"/>
                                    </Col>
                                    <Label htmlFor="address" className="col-form-label" lg={2}>Address*</Label>
                                    <Col lg={4}>
                                        <input type="text" className="form-control" id="address" required placeholder="Enter Your Address"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row className="mt-lg-5">
                                    <Label htmlFor="city" className="col-form-label" lg={2}>City*</Label>
                                    <Col lg={4}>
                                        <Input type="text" className="form-control" required id="city" placeholder="Enter Your City"/>
                                    </Col>
                                    <Label htmlFor="state" className="col-form-label" lg={2}>State*</Label>
                                    <Col lg={4}>
                                        <Input type="text" className="form-control" required id="state" placeholder="Enter Your State"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row className="mt-lg-5">
                                    <Label htmlFor="zipcode" className="col-form-label" lg={2}>Zipcode*</Label>
                                    <Col lg={4}>
                                        <Input type="text" className="form-control" required id="zipcode" placeholder="Enter Your Zipcode"/>
                                    </Col>
                                    <Label htmlFor="months" className="col-form-label" lg={2}>Months*</Label>
                                    <Col lg={4}>
                                        <Input name="months" id="months" type="select" required className="form-control">
                                            <option value="0">Select...</option>
                                            <option value="1">3 months</option>
                                            <option value="2">6 months</option>
                                            <option value="3">12 months</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row className="mt-lg-5">
                                    <Label htmlFor="cardType" className="col-form-label" lg={2}>Card Type*</Label>
                                    <Col lg={4}>
                                        <Input type="select" name="cardType" id="cardType" required className="form-control">
                                            <option value="0">Select...</option>
                                            <option value="1">Visa</option>
                                            <option value="2">Mastercard</option>
                                            <option value="3">American Express</option>
                                        </Input>
                                    </Col>
                                    <Label htmlFor="cardNum" className="col-form-label" lg={2}>Card Num*</Label>
                                    <Col lg={4}>
                                        <Input type="password" className="form-control" id="cardNum" required placeholder="Enter Your Card Number"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row className="mt-lg-5">
                                    <Label htmlFor="expireDate" className="col-form-label" lg={2}>Card Expires*</Label>
                                    <Col lg={4}>
                                        <Input type="text" className="form-control" id="expireDate" required placeholder="Enter Your Expire Date"/>
                                    </Col>
                                    <Label htmlFor="securityCode" className="col-form-label" lg={2}>SecurityNum*</Label>
                                    <Col lg={4}>
                                        <Input type="text" className="form-control" id="securityCode" required placeholder="Enter Your Security Code"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row className="mt-lg-5">
                                        <Button className="btn mx-auto submitBtn subBtn">Submit</Button>
                                </FormGroup>
                            </Form>
                    </div>
                </div>

            );

    }


}

export default SubscribeForm;