import ImageGallery from 'react-image-gallery';
import React from 'react';
import ClothingStore from '../../stores/clothingStore';
import { RouteComponentProps } from 'react-router-dom';
import Clothing from '../../Clothing';

export interface ClothingImageProps {
	clothingimage?:string|undefined,
	clothingImangeNumber?:number|undefined,
	type?:string|undefined,
}

export default class GallerySlider extends React.Component<ClothingImageProps> {

    render() {
    const length = this.props.clothingImangeNumber;
    console.log(length);
    const images = [];
        for(let i=1; i<=4; i++){
            images.push({ 
                    original: `../images/Product/${this.props.clothingimage}${i}.${this.props.type}`,
                    thumbnail: `../images/Product/${this.props.clothingimage}${i}.${this.props.type}`,
            })
        }
      return <ImageGallery items={images} showPlayButton={false} thumbnailPosition={'bottom'} showNav={false} showFullscreenButton={false}
      />;
    }
  }