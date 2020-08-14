import React from 'react';
import Clothing from '../../Clothing';
import ClothingNode from './clothingNode';
import ClothingStore from '../../stores/clothingStore';

export interface ClothingCollectionProps {
	filterValue:string,
}

export interface ClothingCollectionState {
	Clothings:Clothing[]
}

export default class ClothingCollection extends React.Component<ClothingCollectionProps> {
	state = {cars :ClothingStore.createClothings()}
	render(){
		return(
			<div className="container">
			    <div className="row mt-2 mb-5 car_images">
					{this.state.cars.map((Clothing,i) => {
						return (
				        	<ClothingNode key={i} clothing={Clothing} disable={parseInt(this.props.filterValue) < Clothing.price }/>
				        )
					})}
			    </div>    
			</div>
		)
	}
}