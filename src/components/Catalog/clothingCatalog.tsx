import React from 'react';
import ClothingCollection from './clothingCollection';

export default class Catalog extends React.Component {
	// state = { filterValue: '' }
	// _filterClothing = (value: string) => {
	// 	this.setState({
	// 		filterValue: value
	// 	})
	// }
	render() {
		return (
			<div className="App">
				<ClothingCollection />
			</div>
		)
	}
}