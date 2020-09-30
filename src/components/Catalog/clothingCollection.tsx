import React from 'react';
import Clothing from '../../Clothing';
import ClothingNode from './clothingNode';
import ClothingStore from '../../stores/clothingStore';
import RangeSlider from './RangeSlider';
import { Link } from 'react-router-dom';


interface ClothingCollectionProps {
    Category:string,
    SubCategory:string,
}

export default class ClothingCollection extends React.Component<ClothingCollectionProps>{
    state = {clothing :ClothingStore.createClothings()} 
	render(){
        return(
        <div className="catalog">
			<div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <div className="Catalog-filter  ml-4">
                        <div className="Catalog-filter-Switch">
                            <a className='Catalog-filter-Division' href=''><h3>{this.props.Category}</h3></a>
                                <div className='Catalog-filter-SubDivision '>
                                    <Link to={`/clothingstore/${this.props.Category}/Hoodies&Sweatshirts`}><h6>Hoodies & Sweatshirts</h6></Link>
                                    <Link to={`/clothingstore/${this.props.Category}/Pants`}><h6>Pants</h6></Link>
                                    <Link to={`/clothingstore/${this.props.Category}/Jackets&Coats`}><h6>Jackets & Coats</h6></Link>
                                    <Link to={`/clothingstore/${this.props.Category}/Tops&Tees`}><h6>Tops & Tees</h6></Link>
                                    <Link to={`/clothingstore/${this.props.Category}/Shirts`}><h6>Shirts</h6></Link>
                                    <Link to={`/clothingstore/${this.props.Category}/Shoes`}><h6>Shoes  </h6></Link>
                                    <Link to={`/clothingstore/${this.props.Category}/Accessories`}><h6>Accessories</h6></Link>
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
                                <a href='#'><div className="Catalog-filter-box">42</div></a>
                                <a href='#'><div className="Catalog-filter-box">43</div></a>
                                <a href='#'><div className="Catalog-filter-box">44</div></a>
                                <a href='#'><div className="Catalog-filter-box">45</div></a>
                                <a href='#'><div className="Catalog-filter-box">46</div></a>
                                <a href='#'><div className="Catalog-filter-box">47</div></a>
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
                            //tu sub categoria ar arsebobs jer
                            if(this.props.Category=== Clothing.productCategory ){
                                if(this.props.SubCategory !== undefined){
                                    if(this.props.SubCategory === Clothing.productSubCategory){
                                        return (
                                            <ClothingNode key={i} clothing={Clothing} />
                                        )
                                    }
                                } else if (this.props.SubCategory === undefined ){
                                    return (
                                        <ClothingNode key={i} clothing={Clothing} />
                                    )
                                }
                            }
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