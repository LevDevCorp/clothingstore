import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutOrder from './checkoutOrder';
import CheckoutShipping from './checkoutShipping';
import CheckoutPaymenthMethod from './checkoutPaymenthMethod';

export default class Checkout extends React.Component {
	render() {
		return (
            <div className="container Checkout">
            <div className="row">
                <div className="col-8">
                    <CheckoutShipping />
                    <CheckoutPaymenthMethod />
                </div>
                <div className="col-4">
                    <CheckoutOrder />
                </div>
            </div>
        </div>
		)
	}
}