import React from 'react';

export default class CartProduct extends React.Component {

    render() {
        return (
            <div className="product mt-3 row">
                <div className="col-xl-3 col-lg-3"><img className='product-image w-100 h-100' src='./images/Clothing/Shoe-Nike-nizza.jpg'></img></div>
                <div className="col-xl-9 col-lg-9">
                    <h4>2018 New Long Sleeve T-shirt Sport Men Quick Fitness Mensights jerseys</h4>
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
            </div>


        )
    }
}