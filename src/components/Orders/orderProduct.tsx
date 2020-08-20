import React from 'react';

export default class OrdersProduct extends React.Component {
    render() {
        return (
            <div className="product mt-3 row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12"><img className='product-image h-100 w-100' src='./images/Clothing/Shoe-Nike-nizza.jpg'></img></div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <h4>2018 New Long Sleeve T-shirt Sport Men Quick Fitness Mensights jerseys</h4>
                    <h5>64.00$</h5>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                    <button className='button' >Cancel Order</button>
                    <button className='button mt-2' >Write a Review</button>
                </div>
            </div>
        )
    }
}