import React from 'react';
import CheckoutOrder from './checkoutOrder';
import CheckoutShipping from './checkoutShipping';
import CheckoutPaymenthMethod from './checkoutPaymenthMethod';

export default class Checkout extends React.Component {
	render() {
		return (
            <div className="container Checkout">
            <div className="row">
                <div className="col-xl-8 col-lg-8">
                    <CheckoutShipping />
                    <CheckoutPaymenthMethod />
                </div>
                <div className="col-xl-4 col-lg-4 ">
                    <CheckoutOrder />
                </div>
            </div>
        </div>
		)
	}
}