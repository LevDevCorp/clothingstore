import React from 'react';
import { Link } from 'react-router-dom';
import NewRelease from './NewRelease';
import Brands from './Brands';

export default class HomePage extends React.Component {
	state = { filterValue: '' }
	_filterClothing = (value: string) => {
		this.setState({
			filterValue: value
		})
	}
	render() {
		return (
			<div className="Homepage">
				<div className="homepage-banner">
                    <img src="images/Homepage/Banner.png" alt="Banner" />
                    <div className="homepage-banner-text text-center">
                        <p>Up to 50% Off on Women's clothing</p>
                        <Link to='/clothingstore/Women'><button className="mt-2">More</button></Link>
                    </div>
                </div>
				<div className="container">
					<div className="row mt--1">
						<div className="homepage-banner col-4">
							<Link to="/clothingstore/Men" >
                                <img src="images/Homepage/menSection.png" alt="menSection" />
                                <div className="homepage-banner-text text-center">
                                    <p>MEN</p>
                                </div>
							</Link>


               		 	</div>
						<div className="homepage-banner col-4">
							<Link to="/clothingstore/Women">
                                <img src="images/Homepage/womenSection.png" alt="womenSection" />
                                <div className="homepage-banner-text text-center">
                                    <p>WOMEN</p>
                                </div>
							</Link>


               		 	</div>
						<div className="homepage-banner col-4">
							<Link to="/clothingstore/Kids" >
                                <img src="images/Homepage/kidsSection.png" alt="kidsSection" />
                                <div className="homepage-banner-text text-center">
                                    <p>KIDS</p>
                                </div>
							</Link>


               		 	</div>
					</div>
				</div>
				<div className="">
						<NewRelease />
						<Brands />
				</div>
			</div>
		)
	}
}