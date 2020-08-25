import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewRelease from '../Homepage/NewRelease';
import Brands from '../Homepage/Brands';


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
                        <Link to='catalog'><button className="mt-2">More</button></Link>
                    </div>

                </div>
				<div className="container">
					<div className="row mt--1">
						<div className="homepage-banner col-4">
							<Link to="/" >
                    		<img src="images/Homepage/menSection.png" alt="menSection" />
							</Link>
                    		<div className="homepage-banner-text text-center">
                        		<p>men</p>
                        		<Link to='#'></Link>
                    		</div>

               		 	</div>
						<div className="homepage-banner col-4">
							<Link to="/">
                    		<img src="images/Homepage/womenSection.png" alt="womenSection" />
							</Link>
                    		<div className="homepage-banner-text text-center">
                        		<p>women</p>
                        		<Link to='#'></Link>
                    		</div>

               		 	</div>
						<div className="homepage-banner col-4">
							<Link to="/" >
                    		<img src="images/Homepage/kidsSection.png" alt="kidsSection" />
							</Link>
                    		<div className="homepage-banner-text text-center">
                        		<p>kids</p>
                        		<Link to='#'></Link>
                    		</div>

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