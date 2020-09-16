import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import ClothingCollection from './clothingCollection';

interface MatchParams {
    Category:string,
    SubCategory:string,
}

interface ClothingPageProps extends RouteComponentProps<MatchParams>{
}

export default class Catalog extends React.Component<ClothingPageProps> {

	render() {
		return (
			<div className="App">
				<ClothingCollection Category={this.props.match.params.Category} SubCategory={this.props.match.params.SubCategory} />
			</div>
		)
	}
}