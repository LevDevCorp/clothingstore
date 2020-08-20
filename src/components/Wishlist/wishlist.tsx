import React from 'react';
import WishlistProduct from './wishlistProduct';

export default class Wishlist extends React.Component {
    render() {
        return (
            <div className="Wishlist">
                <div className="container">
                <h2>Wishlist</h2>
                    <WishlistProduct />
                    <WishlistProduct />
                </div>
            </div>
        )
    }
}