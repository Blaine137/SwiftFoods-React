import React from 'react';
import OrderForm from './OrderForm/OrderForm';
import SubscribeForm from '../SubscribeForm/SubscribeForm';
import './Order.scss';

const Order = (props) => {

    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="text-center pt-4 mt-5 mb-4 align-self-center">Order Now!</h3>
                </div>
            </div>
        </div>
            <OrderForm/>
            <SubscribeForm/>
        </>
    );

};

export default Order;