import React from 'react';
import { Link } from 'react-router-dom';

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
			</div>
		)
	}
}