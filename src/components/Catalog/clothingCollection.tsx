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
        <div className="catalog">
			<div className="row">
                <div className="col-3 ">
                    <div className="Catalog-filter  ml-4">
                        <div className="Catalog-filter-Switch">
                            <a className='Catalog-filter-Division' href='#'><h3>Men</h3></a>
                                <div className='Catalog-filter-SubDivision ml-4'>
                                    <a className='' href='#'><h6>Hoodies & Sweatshirts</h6></a>
                                    <a className='' href='#'><h6>Pants</h6></a>
                                    <a className='' href='#'><h6>Jackets & Coats</h6></a>
                                    <a className='' href='#'><h6>Tops & Tees</h6></a>
                                    <a className='' href='#'><h6>Suits & Blazers</h6></a>
                                    <a className='' href='#'><h6>Shirts</h6></a>
                                    <a className='' href='#'><h6>Accessories</h6></a>
                                </div>
                        </div>
                        <div className="Divider"></div>
                        <div className="Catalog-filter-ColorSwitch">
                            <h3 className='text-center' >Choose Color</h3>
                            <div className="Catalog-filter-Colors d-flex">
                                <ul className='nav navbar-nav'>
                                    <li><a href="#"><div className="red"></div></a></li>
                                    <li><a href="#"><div className="white"></div></a></li>
                                    <li><a href="#"><div className="black"></div></a></li>
                                    <li><a href="#"><div className="blue"></div></a></li>
                                    <li><a href="#"><div className="green"></div></a></li>
                                    <li><a href="#"><div className="pink"></div></a></li>
                                    <li><a href="#"><div className="grey"></div></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <div className="row mt-2 mb-5 car_images">
                        {this.state.cars.map((Clothing,i) => {
                            return (
                                <ClothingNode key={i} clothing={Clothing} disable={parseInt(this.props.filterValue) < Clothing.price }/>
                            )
                        })}
                    </div>    
                </div>
			</div>
        </div>

		)
	}
}