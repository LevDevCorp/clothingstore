import React from 'react';
import Clothing from '../../Clothing';
import ClothingNode from './clothingNode';
import ClothingStore from '../../stores/clothingStore';
import RangeSlider from './RangeSlider'



export interface ClothingCollectionProps {
	filterValue:string,
}

export interface ClothingCollectionState {
    Clothings:Clothing[],
    productType:string
}


export default class ClothingCollection extends React.Component<ClothingCollectionProps> {
    state = {clothing :ClothingStore.createClothings()}
    
    // state:ClothingCollectionState = {Clothings :undefined}
    // componentDidMount(){
    //     ClothingStore.createClothings().then((res) => {
    //         this.state?({
    //             Clothings:res
    //         })
    //     })
    // }
	render(){
		return(
        <div className="catalog">
			<div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <div className="Catalog-filter  ml-4">
                        <div className="Catalog-filter-Switch">
                            <a className='Catalog-filter-Division' href='#'><h3>Men</h3></a>
                                <div className='Catalog-filter-SubDivision '>
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
                                    <a href="#"><div className="red"></div></a>
                                    <a href="#"><div className="white"></div></a>
                                    <a href="#"><div className="black"></div></a>
                                    <a href="#"><div className="blue"></div></a>
                                    <a href="#"><div className="green"></div></a>
                                    <a href="#"><div className="pink"></div></a>
                                    <a href="#"><div className="grey"></div></a>
                            </div>
                        </div>
                        <div className="Divider"></div>
                        <div className="Catalog-filter-Price    ">
                            <h3 className='text-center' >Choose Price</h3>
                            <div className="Catalog-filter-pricefield justify-content-center d-flex">
                                <RangeSlider />                     
                            </div>
                        </div>
                        <div  className="Divider divider2"></div>
                        <div className="Catalog-filter-Size">
                            <h3 className='text-center' >Choose Size</h3>
                            <div className="Catalog-filter-Sizebox d-flex">
                                <a href='#'><div className="Catalog-filter-box">41</div></a>
                                <a href='#'><div className="Catalog-filter-box">41</div></a>
                                <a href='#'><div className="Catalog-filter-box">41</div></a>
                                <a href='#'><div className="Catalog-filter-box">41</div></a>
                                <a href='#'><div className="Catalog-filter-box">41</div></a>
                                <a href='#'><div className="Catalog-filter-box">41</div></a>
                                <a href='#'><div className="Catalog-filter-box">41</div></a>
                                <a href='#'><div className="Catalog-filter-box">41</div></a>
                                <a href='#'><div className="Catalog-filter-box">41</div></a>
                                <a href='#'><div className="Catalog-filter-box">41</div></a>
                                <a href='#'><div className="Catalog-filter-box">41</div></a>
                                <a href='#'><div className="Catalog-filter-box">41</div></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12">
                        <div className="Catalog-SortBy mt-3">
                            <div className='d-table ml-auto'>
                                <select className=''>
                                    <option value="0">Sort By</option>
                                    <option value="1">Newest</option>
                                    <option value="2">Price:Low to High</option>
                                    <option value="3">Price:High to Low</option>
                                </select>
                            </div>

                        </div>
                    <div className="row Catalog-list mt-2 mb-5">

                        {this.state.clothing.map((Clothing,i) => {
                            return (
                                <ClothingNode key={i} clothing={Clothing} disable={parseInt(this.props.filterValue) < Clothing.price }/>
                            )
                        })}
                    </div>
                    <div className="Catalog-PageSwitch d-flex justify-content-center">
                                <a href='#'><div className="Catalog-Pageswitch-Switch PrevNext">Previous</div></a>
                                <a href='#'><div className="Catalog-Pageswitch-Switch Pagenumber">1</div></a>
                                <a href='#'><div className="Catalog-Pageswitch-Switch Pagenumber">2</div></a>
                                <a href='#'><div className="Catalog-Pageswitch-Switch Pagenumber">3</div></a>
                                <a href='#'><div className="Catalog-Pageswitch-Switch Pagenumber">4</div></a>
                                <a href='#'><div className="Catalog-Pageswitch-Switch Pagenumber">5</div></a>
                                <a href='#'><div className="Catalog-Pageswitch-Switch PrevNext">Next</div></a>
                            </div> 
                </div>
			</div>
        </div>
		)
	}
}