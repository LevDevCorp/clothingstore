import ImageGallery from 'react-image-gallery';
import React from 'react';
import ClothingStore from '../../stores/clothingStore';
import { RouteComponentProps } from 'react-router-dom';
import Clothing from '../../Clothing';

export interface ClothingImageProps {
	clothingimage?:string|undefined,
	type?:string|undefined,
}

export default class GallerySlider extends React.Component<ClothingImageProps> {
    // images = Array(3).map((images, i)=> {
    //     return {
    //         original: `../images/Product/${this.props.clothingimage}1.${this.props.type}`,
    //         thumbnail: `../images/Product/${this.props.clothingimage}1.${this.props.type}`,

    //     }
    //     })
    images = [
              {
                original: `../images/Product/${this.props.clothingimage}1.${this.props.type}`,
                thumbnail: `../images/Product/${this.props.clothingimage}1.${this.props.type}`,
              },
              {
                original: `../images/Product/${this.props.clothingimage}2.${this.props.type}`,
                thumbnail: `../images/Product/${this.props.clothingimage}2.${this.props.type}`,
              },
              {
                original: `../images/Product/${this.props.clothingimage}3.${this.props.type}`,
                thumbnail: `../images/Product/${this.props.clothingimage}3.${this.props.type}`,
              },
              {
                original: `../images/Product/${this.props.clothingimage}4.${this.props.type}`,
                thumbnail: `../images/Product/${this.props.clothingimage}4.${this.props.type}`,
              },
      ];
    render() {
      return <ImageGallery items={this.images} showPlayButton={false} thumbnailPosition={'bottom'} showNav={false} showFullscreenButton={false}
      />;
    }
  }