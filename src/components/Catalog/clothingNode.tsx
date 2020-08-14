import React from "react";
import Clothing from '../../Clothing';
import { Link } from 'react-router-dom';

export interface CarNodeProps {
	clothing:Clothing,
	disable:boolean,
}

export default class CarNode extends React.Component<CarNodeProps>{
	render(){
		return(
	        <div className="car mt-4 col-3">
	            <p>{this.props.clothing.manufacturer} | {this.props.clothing.model} </p>
	            <img className="w-100" alt='ClothingPicture' src={`images/${this.props.clothing.manufacturer+this.props.clothing.manufacturerId}.${this.props.clothing.picType}`} />
	            <Link to={this.props.clothing.manufacturer + '/' + this.props.clothing.id}>
					<button disabled={this.props.disable} className={'btn btn-primary w-100' }>ვრცლად</button>
				</Link>
	        </div>
		)
	}
}