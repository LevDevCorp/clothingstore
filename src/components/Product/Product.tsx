import React from 'react';
import Clothing from '../../Clothing';
import ClothingStore from '../../stores/clothingStore';
import Review from "./ProductReview";
import GallerySlider from './GallerySlider';
import { RouteComponentProps } from 'react-router-dom';
import "react-image-gallery/styles/css/image-gallery.css";

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
            <div className="Product">
                <div className="container mt-1 ">
                    <div className="row ">
                        <div className='col-8 product-gallery'>
                            {/* <img src={`../images/${this.state.currentClothing?.ProductName}${this.state.currentClothing?.ProductName}.${this.state.currentClothing?.picType}`}
                            alt={this.state.currentClothing?.ProductName} className='w-100'/> */}
                            <GallerySlider />
                        </div>
                        <div className='col-4'>
                            <div className="product-details">
                                <h2 className='text-center'>{this.state.currentClothing?.ProductName}</h2>
                                <div className="Catalog-filter-Size">
                                    <h4 className='text-center mt-4' >Size</h4>
                                    <div className="Catalog-filter-Sizebox justify-content-center  d-flex">
                                        <a href='#'><div className="Catalog-filter-box">41</div></a>
                                        <a href='#'><div className="Catalog-filter-box">42</div></a>
                                        <a href='#'><div className="Catalog-filter-box">43</div></a>
                                        <a href='#'><div className="Catalog-filter-box">44</div></a>
                                        <a href='#'><div className="Catalog-filter-box">45</div></a>
                                    </div>
                                </div>
                                <div className="Catalog-filter-ColorSwitch mt-4">
                                    <h4 className='text-center' >Color</h4>
                                       <div className="Catalog-filter-Colors  d-flex">
                                            <a href="#"><div className="red"></div></a>
                                            <a href="#"><div className="white"></div></a>
                                            <a href="#"><div className="black"></div></a>
                                            <a href="#"><div className="blue"></div></a>
                                            <a href="#"><div className="green"></div></a>
                                        </div>
                                </div>
                                <div className="Product-details-wishlist d-flex justify-content-center mt-4">
                                    <button>Add to Wishlist</button>
                                </div>
                                <div className="mt-5">
                                    <button className='button'>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>                
                </div>
                <div className="Product-reviews  container mt-5">
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />

                </div>
            </div>

		)
	}
}