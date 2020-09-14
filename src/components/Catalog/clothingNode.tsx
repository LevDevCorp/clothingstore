import React from "react";
import Clothing from '../../Clothing';
import ClothingStore from '../../stores/clothingStore';
import { Link , RouteComponentProps  } from 'react-router-dom';


export interface ClothingNodeProps {
	clothing:Clothing,
}

export default class ClothingNode extends React.Component<ClothingNodeProps>{

	render(){
        return(
            <div className="Catalog-product mt-4 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <Link to={`Product/${this.props.clothing.ProductId}`}>
                    <img className="w-100" alt='ClothingPicture' src={`images/Catalog/${this.props.clothing.ProductName}.${this.props.clothing.picType}`} />
                    <h5 className='mt-2'>{this.props.clothing.ProductName}</h5>
                    <h5 className='mt-2'>{this.props.clothing.price}$</h5>
                </Link>
            </div>
        )

	}
}