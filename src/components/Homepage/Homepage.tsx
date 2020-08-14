import React from 'react';

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
				
			</div>
		)
	}
}