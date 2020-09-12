import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from 'react-bootstrap/Container';


export default class NewRelease extends React.Component {
    render() {
     var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
        return (
          <Container className="mt--100 ">
            <div className="clearfix">
              <h4 className="float-left">New Release</h4>
              <Link className="float-right text-upercase" to="/clothingstore/Catalog" >View More</Link>
            </div>
           <Slider className="border p-carousel bg-collor" {...settings}>
        <div className="height-320  ">
            <Link to='/clothingstore/product/1'>
                <img className="margin-R" src="images/Homepage/pants-sport.png" alt="pants-sport" />
            </Link>
        </div>
        <div className="height-320 ">
            <Link to='/clothingstore/product/2'>
                <img className="margin-R" src="images/Homepage/shoe-women-casual.png" alt="shoe-women-casualn" />
            </Link>
        </div>
        <div className="height-320 " >
            <Link to='/clothingstore/product/3'>
                <img src="images/Homepage/winter-jacket.png" alt="winter-jacket" />
            </Link>

        </div>
        <div className="height-320 ">
            <Link to='/clothingstore/product/4'>
                <img src="images/Homepage/jexxi-ring.png" alt="jexxi-ring" />
            </Link>
        </div>
        <div className="height-320 ">
            <Link to='/clothingstore/product/1'>
                <img className="" src="images/Homepage/pants-sport.png" alt="pants-sport" />
            </Link>
        </div>
        <div  className="height-320 ">
            <Link to='/clothingstore/product/1'>
                <img src="images/Homepage/shoe-women-casual.png" alt="shoe-women-casualn" />
            </Link>
        </div>
        <div  className="height-320 ">
            <Link to='/clothingstore/product/1'>
                <img src="images/Homepage/winter-jacket.png" alt="winter-jacket" />
            </Link>
        </div>
        <div  className="height-320">
            <Link to='/clothingstore/product/1'>
                <img src="images/Homepage/jexxi-ring.png" alt="jexxi-ring" />
            </Link>
        </div>
      </Slider>
      </Container>
        )
    }
}