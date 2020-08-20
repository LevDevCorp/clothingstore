import React from 'react';
import { Link } from 'react-router-dom';

export default class CheckoutOrder extends React.Component {

	render() {
		return (
				<div className="checkout">
                    <h4>Checkout summary</h4>
                    <h5 className='d-flex mt-4'>Subtotal:<span className='ml-auto'>150.66USD</span></h5>
                    <Link to="/clothingstore/Checkout"><button className='button mt-5' >Order</button></Link>
				</div>
		)
	}
}