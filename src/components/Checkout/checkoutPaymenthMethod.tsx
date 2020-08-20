import React from 'react';

export default class CheckoutPaymenthMethod extends React.Component {
    render() {
        return (
            <div className="Checkout-payment mt-3">
                <h2>Payment Method</h2>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="Checkout-payment-frontcard">
                            <form className='Checkout-payment-cardform ' action="">
                                <div className="Checkout-payment-cardnumber checkout-inputfield mt-4">
                                    <h6>Card Number</h6>
                                    <input type="text" placeholder='0000 0000 0000 0000' />
                                </div>
                                <div className="row checkout-inputfield">
                                    <div className="col-8">
                                        <div className="Checkout-payment-cardholder mt-4">
                                            <h6>Card Holder</h6>
                                            <input type="text" placeholder='Johny Bravo' />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="Checkout-payment-expdate  mt-4">
                                            <h6>Expires</h6>
                                            <input className='product-cvv' type="text" placeholder='MM/YY' />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="Checkout-payment-backcard  position-relative">
                            <div className="Checkout-payment-line mt-3"></div>
                            <form className='Checkout-payment-cardform d-flex' action="">
                                <div className="Checkout-payment-cvv checkout-inputfield ml-auto">
                                    <h6>CVV</h6>
                                    <input type="text" placeholder='000' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
