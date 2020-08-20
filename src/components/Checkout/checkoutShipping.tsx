import React from 'react';

export default class CheckoutShipping extends React.Component {
	render() {
		return (

                    <div className="Checkout-Shippinginfo">
                        <h2>Shipping Information</h2>
                            <form className='Checkout-Shippinginfo-form' action="">
                                <div className="input-group mb-4">
                                    <input type="text" placeholder='Phone Number' />
                                </div>
                                <div className="input-group mt-2 mb-4">
                                    <input type="text" placeholder='City' />
                                </div>
                                <div className="input-group mt-2 mb-4">
                                    <input type="text" placeholder='Adress' />
                                </div>
                            </form>

                    </div>
		)
	}
}