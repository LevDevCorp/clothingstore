import ImageGallery from 'react-image-gallery';
import React from 'react';
import ClothingStore from '../../stores/clothingStore';
import { RouteComponentProps } from 'react-router-dom';
import Clothing from '../../Clothing';

export interface ClothingImageProps {
	clothingimage?:string|undefined,
	clothingImageNumber?:number|undefined,
	type?:string|undefined,
}

export default class GallerySlider extends React.Component<ClothingImageProps> {

    render() {
    const images = [];
    const length = this.props.clothingImageNumber;
    let i=1;
        if(length){
            for(i=1; i<=length; i++){
                images.push({ 
                        original: `../images/Product/${this.props.clothingimage}${i}.${this.props.type}`,
                        thumbnail: `../images/Product/${this.props.clothingimage}${i}.${this.props.type}`,
                })
            }
        }

      return <ImageGallery items={images} showPlayButton={false} thumbnailPosition={'bottom'} showNav={false} showFullscreenButton={false}
      />;
    }
  }