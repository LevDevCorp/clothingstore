import React from 'react';
import CartProduct from './cartProduct';
import CartCheckout from './cartCheckout';

export default class Cart extends React.Component {

	render() {
		return (
				<div className="container Cart">
                    <div className="row">
                        <div className="col-8">
                        <h2>Shopping Cart</h2>
                            <div className="Cart-list">
                                <CartProduct />
                                <CartProduct />
                            </div>
                        </div>
                        <div className="col-4">
                            <CartCheckout />
                        </div>
                    </div>
				</div>
		)
	}
}