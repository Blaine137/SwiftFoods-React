import React, { Component } from 'react';
import {Form, Button, FormGroup, Label, Input, Col, FormFeedback} from 'reactstrap';
import './SubscribeForm.scss';

class SubscribeForm extends Component {

    state = {
        fName: '',
        lName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        months: '',
        cardType: '',
        cardNum: '',
        expireDate: '',
        securityCode: '',
        touched: {
            fName: false,
            lName: false,
            email: false,
            address: false,
            city: false,
            state: false,
            zipcode: false,
            months: false,
            cardType: false,
            cardNum: false,
            expireDate: false,
            securityCode: false
        }

    };

    validate = (fName, lName, email, city, state, zipcode, months, cardType, cardNum, expireDate, securityCode) => {

        const errors = {
            fName: '',
            lName: '',
            email: '',
            city: '',
            state: '',
            zipcode: '',
            months: '',
            cardType: '',
            cardNum: '',
            expireDate: '',
            securityCode: ''
        };

        if(this.state.touched.fName){

            if(fName.length < 2){
                errors.fName = 'First name must be longer than two characters.';
            }

        }

        if(lName.length < 2){
            errors.lName = 'Last name must be longer than two characters.'
        }

        if(!email.includes('@')){
            errors.email = 'You must enter a valid email address.';
        }

        if(city.length < 2){
            errors.city = 'City must be longer than two characters.';
        }

        if(state.length < 2){
            errors.state = 'State must be longer than two characters.'
        }

        const reg = /^\d+$/;
        if(!reg.test(zipcode)){
            errors.zipcode = 'Zipcode should only contain numbers.'
        }

        if(!reg.test(cardNum)){
            errors.cardNum = 'Card number should only contain numbers.'
        }

        return errors;

    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'select' ? target.select : target.value;
    
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }


    render(){

            const errors = this.validate(this.state.fName, this.state.lName, this.state.email, this.state.city, this.state.state, this.state.zipcode, this.state.months, this.state.cardType, this.state.cardNum, this.state.expireDate, this.state.securityCode);

            return(

                <div className="container mt-4" id="subscribeForm">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-center pt-4 mt-5 mb-4 align-self-center">Subscribe!</h3>
                        </div>
                    </div>
                    <div className="row">
                            <Form className="mx-auto mb-4 p-4 col-10" action="thankyouforsubscribing.html" onSubmit={this.handleSubmit}>
                                <FormGroup row className="mt-lg-5">
                                    <Label htmlFor="fName" className="col-form-label" lg={2}>First Name*</Label>
                                    <Col  lg={4}>
                                        <Input 
                                            type="text" 
                                            invalid={errors.fName} 
                                            className="form-control" 
                                            id="fName" 
                                            name="fName" 
                                            required 
                                            placeholder="Enter Your First Name" 
                                            onChange={this.handleInputChange}
                                            onBlur={this.handleBlur("fName")}/>
                                        <FormFeedback>{errors.fName}</FormFeedback>
                                    </Col>
                                    <Label htmlFor="lName" className="col-form-label" lg={2}>Last Name*</Label>
                                    <Col  lg={4}>
                                        <Input type="text" className="form-control" name="lname" id="lName" required placeholder="Enter Your Last Name"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row className="mt-lg-5">
                                    <Label htmlFor="email" className="col-form-label" lg={2}>Email*</Label>
                                    <Col lg={4}>
                                        <Input type="text" className="form-control" name="email" id="email" required placeholder="Enter Your Email"/>
                                    </Col>
                                    <Label htmlFor="address" className="col-form-label" lg={2}>Address*</Label>
                                    <Col lg={4}>
                                        <Input type="text" className="form-control" name="address" id="address" required placeholder="Enter Your Address"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row className="mt-lg-5">
                                    <Label htmlFor="city" className="col-form-label" lg={2}>City*</Label>
                                    <Col lg={4}>
                                        <Input type="text" className="form-control" required name="city" id="city" placeholder="Enter Your City"/>
                                    </Col>
                                    <Label htmlFor="state" className="col-form-label" lg={2}>State*</Label>
                                    <Col lg={4}>
                                        <Input type="text" className="form-control" required name="state" id="state" placeholder="Enter Your State"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row className="mt-lg-5">
                                    <Label htmlFor="zipcode" className="col-form-label" lg={2}>Zipcode*</Label>
                                    <Col lg={4}>
                                        <Input type="text" className="form-control" required name="zipcode" id="zipcode" placeholder="Enter Your Zipcode"/>
                                    </Col>
                                    <Label htmlFor="months" className="col-form-label" lg={2}>Months*</Label>
                                    <Col lg={4}>
                                        <Input name="months" name="months" id="months" type="select" required className="form-control">
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
                                        <Input type="password" className="form-control" name="cardNum" id="cardNum" required placeholder="Enter Your Card Number"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row className="mt-lg-5">
                                    <Label htmlFor="expireDate" className="col-form-label" lg={2}>Card Expires*</Label>
                                    <Col lg={4}>
                                        <Input type="text" className="form-control" name="expireDate" id="expireDate" required placeholder="Enter Your Expire Date"/>
                                    </Col>
                                    <Label htmlFor="securityCode" className="col-form-label" lg={2}>SecurityNum*</Label>
                                    <Col lg={4}>
                                        <Input type="text" className="form-control" name="securityCode" id="securityCode" required placeholder="Enter Your Security Code"/>
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