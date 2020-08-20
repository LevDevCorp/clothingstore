import React from 'react';

export default class WishlistProduct extends React.Component {
    render() {
        return (
            <div className="product mt-3 row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12"><img className='product-image h-100 w-100' src='./images/Clothing/Shoe-Nike-nizza.jpg'></img></div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h4>2018 New Long Sleeve T-shirt Sport Men Quick Fitness Mensights jerseys</h4>
                    <h5>64.00$</h5>
                    <div className="product-quantity mt-3">
                        <h5>Quantity</h5>
                        <a href='#'><img src='./images/Cart/minus.svg' /></a>
                        <h5 className='d-inline-block'>1</h5>
                        <a href='#'><img src='./images/Cart/plus.svg' /></a>
                    </div>
                    <div className="product-trash mt-2">
                        <a href='#' ><img src='./images/Cart/trash.svg' /></a>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <button className='button' >Add to Cart</button>
                </div>
            </div>
        )
    }
}