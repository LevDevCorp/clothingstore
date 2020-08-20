import React from 'react';
import OrdersProduct from './orderProduct';

export default class Orders extends React.Component {
    render() {
        return (
            <div className="Orders">
                <div className="container">
                <h2>Orders</h2>
                    <OrdersProduct />
                    <OrdersProduct />
                </div>
            </div>
        )
    }
}