import ImageGallery from 'react-image-gallery';
import React from 'react';
import ClothingStore from '../../stores/clothingStore';
import { RouteComponentProps } from 'react-router-dom';
import Clothing from '../../Clothing';

interface ClothingPageState {
    currentClothing:Clothing|undefined
}

interface MatchParams {
    id:string
}

interface ClothingPageProps extends RouteComponentProps<MatchParams>{
}

const images = [
    {
      original: 'images/Product/adidas1.jpg',
      thumbnail: 'images/Product/adidas1.jpg',
    },
    {
      original: 'images/Product/adidas2.jpg',
      thumbnail: 'images/Product/adidas2.jpg',
    },
    {
      original: 'images/Product/adidas3.jpg',
      thumbnail: 'images/Product/adidas3.jpg',
    },
    {
      original: 'images/Product/adidas4.jpg',
      thumbnail: 'images/Product/adidas4.jpg',
    },
  ];
  
export default class GallerySlider extends React.Component {

    render() {
      return <ImageGallery items={images} showPlayButton={false} thumbnailPosition={'bottom'} showNav={false} showFullscreenButton={false}
      />;
    }
  }