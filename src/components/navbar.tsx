import React from 'react';
import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbar = () => {
	return (
<header>
	<nav className="navbar navbar-expand-sm upper-section">
				<div className="col-xl-4 col-lg-3 col-md-3 col-sm-2 col-xs-12">
                    <NavLink exact to='/clothingstore/'><img className='navbar-logo' src={require('../Images/logo.svg')} alt="logoicon"/></NavLink>
                </div>
				<div className="col-xl-4 col-lg-4 col-md-4 col-sm-10 col-xs-12">
					<div className="searchbar">
						<form className="form-inline">
							<input className="search_input" type="search" placeholder="Search" aria-label="Search"/>
							<button className="search_icon ml-auto m-1"><img  src={require('../Images/search-icon.svg')} alt="searchicon"/></button>
						</form>
					</div>
				</div>
				<div className="col-xl-4 col-lg-5 col-md-5 col-sm-6 col-xs-12">
					<div className="m-auto text-center">
						<ul className="navbar-nav justify-content-center">
							<li className="nav-item">
							{/* <NavDropdown title={ <span><img src={require('../Images/myaccount.svg')} alt="accounticon"/> My Account</span>} id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Orders</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Wishlist</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
							</NavDropdown> */}
								<NavLink className="nav-link" exact to="/clothingstore/Login"><img src={require('../Images/myaccount.svg')} alt="accounticon"/>Register/Login</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" exact to="/clothingstore/Cart"><img src={require('../Images/shopping-cart.svg')} alt="shoppingcarticon"/>Cart</NavLink>
							</li>
							<li  className="nav-item ">
								<a className="nav-link" href="#"><img  src={require('../Images/georgia.svg')} alt="languageicon"/>GEO</a>
							</li>
						</ul>
					</div>
				</div>
	</nav>
	<nav className="navbar navbar-expand-sm lower-section justify-content-center">
		<ul className="navbar-nav">
			<li className="nav-item">
				<NavLink className="nav-link"  exact to='/clothingstore/Men' >Men</NavLink>
			</li>
			<li className="nav-item">
				<NavLink className="nav-link" exact to='/clothingstore/Women'>Women</NavLink>
			</li>
			<li className="nav-item">
				<NavLink className="nav-link" exact to='/clothingstore/Kids'>Kids</NavLink>
			</li>
			<li className="nav-item">
				<NavLink className="nav-link" exact to='/clothingstore/Sale'>Sale</NavLink>
			</li>
		</ul>
	</nav>
</header>
	)
}

export {Navbar}