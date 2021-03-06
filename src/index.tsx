import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import HomePage from './components/Homepage/Homepage';
import Login from './components/Login/login';
import ErrorPage from './components/errorPage';
import Product from './components/Product/Product';
import Catalog from './components/Catalog/clothingCatalog';
import Cart from './components/Cart/cart';
import Checkout from './components/Checkout/checkout';
import Orders from './components/Orders/order';
import Wishlist from './components/Wishlist/wishlist';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const ClothingShop = () => {
	return (
		<div>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/clothingstore/' component={HomePage}></Route>
					<Route exact path='/clothingstore/Login' component={Login}></Route>
					<Route exact path='/clothingstore/Cart' component={Cart}></Route>
					<Route exact path='/clothingstore/Checkout' component={Checkout}></Route>
					<Route exact path='/clothingstore/Orders' component={Orders}></Route>
                    <Route exact path='/clothingstore/Product:id' component={Product}></Route>
                    <Route exact path='/clothingstore/:Category/Product:id' component={Product}></Route>
					<Route exact path='/clothingstore/Wishlist' component={Wishlist}></Route>
                    <Route exact path='/clothingstore/:Category' component={Catalog}></Route>
                    <Route exact path='/clothingstore/:Category/:SubCategory' component={Catalog}></Route>
					<Route component={ErrorPage}></Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

ReactDOM.render(
	<ClothingShop />,
	document.getElementById('root')
);
