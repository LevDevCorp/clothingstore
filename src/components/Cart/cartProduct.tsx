import React from 'react';

export default class CartProduct extends React.Component {

	render() {
		return (
                <div className="Cart-list-product mt-3 row">
                    <div className="col-3"><img className='Cart-list-productimage' src='./images/Clothing/Shoe-Nike-nizza.jpg'></img></div>
                    <div className="col-9">
                        <h4>2018 New Long Sleeve T-shirt Sport Men Quick Fitness Mensights jerseys</h4>
                        <div className="Cart-list-quantity mt-3">
                            <h5>Quantity</h5>
                            <a href='#'><img src='./images/Cart/minus.svg' /></a>
                            <h5 className='d-inline-block'>1</h5>
                            <a href='#'><img src='./images/Cart/plus.svg' /></a>
                        </div>
                        <div className="Cart-list-trash mt-2">
                            <a href='#' ><img src='./images/Cart/trash.svg' /></a>
                        </div>
                    </div>
                </div>


		)
	}
}