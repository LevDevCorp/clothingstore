import React from 'react';
import Clothing from '../../Clothing';
import * as CarUtils from '../../utils/CarUtils';
import ClothingStore from '../../stores/clothingStore';
import { RouteComponentProps } from 'react-router-dom';

interface ClothingPageState {
    currentClothing:Clothing|undefined
}

interface MatchParams {
    id:string
}

interface ClothingPageProps extends RouteComponentProps<MatchParams>{
}

export default class ClothingPage extends React.Component<ClothingPageProps, ClothingPageState>{
    constructor(props:ClothingPageProps){
        super(props)
        this.state = {
            currentClothing: ClothingStore.getClothingById(parseInt(this.props.match.params.id))
        }
    }

	render(){
		return(
	        <div className="container  mt-5 ">
                <div className="row carInfo">
                    <div className='col-8'>
                        <img src={`../images/${this.state.currentClothing?.manufacturer}${this.state.currentClothing?.manufacturerId}.${this.state.currentClothing?.picType}`}
                        alt={this.state.currentClothing?.model} className='w-100'/>
                    </div>
                    <div className='col-4 carDetails text-right bg-warning'>
                        <div className="p-3">
                            <h1 className=''>Details</h1>
                            <h5><span>{this.state.currentClothing?.manufacturer}</span>:Manufacturer</h5>
                            <h5><span>{this.state.currentClothing?.model}</span>:Model</h5>
                            <h5><span>{this.state.currentClothing?.price}</span>:Price</h5>
                            <h5><span>{this.state.currentClothing?.color}</span>:Color</h5>
                            <h5><span>{this.state.currentClothing?.releaseDate}</span>:Release Date</h5>
                        </div>
                    </div>
                </div>                
	        </div>
		)
	}
}