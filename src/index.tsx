import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import HomePage from './components/Homepage/Homepage';
import Login from './components/login';
import ErrorPage from './components/errorPage';
import Product from './components/Product/Product';
import Catalog from './components/Catalog/clothingCatalog';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const ClothingShop = () => {
	return (
		<div>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/Clothingstore/' component={HomePage}></Route>
					<Route exact path='/Clothingstore/Catalog' component={Catalog}></Route>
					<Route exact path='/Clothingstore/Login' component={Login}></Route>
					<Route path='/Clothingstore/:id' component={Product}></Route>
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