import React from 'react';
import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbar = () => {
	return (
<header>
	<nav className="navbar navbar-expand-sm upper-section">
				<div className="col-xl-4 col-lg-3 col-md-3 col-sm-2 col-xs-12"><img className='navbar-logo' src='images/logo.svg' /></div>
				<div className="col-xl-4 col-lg-4 col-md-4 col-sm-10 col-xs-12">
					<div className="searchbar">
						<form className="form-inline">
							<input className="search_input" type="search" placeholder="Search" aria-label="Search"/>
							<button className="search_icon ml-auto m-1"><img  src='images/search-icon.svg' /></button>
						</form>
					</div>
				</div>
				<div className="col-xl-4 col-lg-5 col-md-5 col-sm-6 col-xs-12">
					<div className="m-auto text-center">
						<ul className="navbar-nav justify-content-center">
							<li className="nav-item">
							<NavDropdown title={ <span><img  src='images/myaccount.svg' /> My Account</span>} id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Orders</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Wishlist</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
							</NavDropdown>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#"><img  src='images/shopping-cart.svg' />Cart</a>
							</li>
							<li  className="nav-item ">
								<a className="nav-link" href="#"><img  src='images/georgia.svg' />GEO</a>
							</li>
						</ul>
					</div>
				</div>
	</nav>
	<nav className="navbar navbar-expand-sm lower-section justify-content-center">
		<ul className="navbar-nav">
			<li className="nav-item">
				<NavLink className="nav-link" exact to='/clothingstore/Catalog'>Man</NavLink>
			</li>
			<li className="nav-item">
				<NavLink className="nav-link" exact to='/clothingstore/Catalog'>Women</NavLink>
			</li>
			<li className="nav-item">
				<NavLink className="nav-link" exact to='/clothingstore/Catalog'>Kids</NavLink>
			</li>
			<li className="nav-item">
				<NavLink className="nav-link" exact to='/clothingstore/Catalog'>Sale</NavLink>
			</li>
		</ul>
	</nav>
</header>
	)
}

export {Navbar}