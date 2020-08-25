import React from 'react';
import Clothing from '../../Clothing';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
              <Link className="float-right text-upercase" to="/" >View More</Link>
            </div>
           <Slider className="border p-carousel bg-collor" {...settings}>
        <div className="height-320  ">
          <img className="margin-R" src="images/Homepage/pants-sport.png" alt="pants-sport" />
        </div>
        <div className="height-320 ">
          <img className="margin-R" src="images/Homepage/shoe-women-casual.png" alt="shoe-women-casualn" />
        </div>
        <div className="height-320 " >
          <img src="images/Homepage/winter-jacket.png" alt="winter-jacket" />
        </div>
        <div className="height-320 ">
          <img src="images/Homepage/jexxi-ring.png" alt="jexxi-ring" />
        </div>
        <div className="height-320 ">
          <img className="" src="images/Homepage/pants-sport.png" alt="pants-sport" />
        </div>
        <div  className="height-320 ">
          <img src="images/Homepage/shoe-women-casual.png" alt="shoe-women-casualn" />
        </div>
        <div  className="height-320 ">
          <img src="images/Homepage/winter-jacket.png" alt="winter-jacket" />
        </div>
        <div  className="height-320">
          <img src="images/Homepage/jexxi-ring.png" alt="jexxi-ring" />
        </div>
      </Slider>
      </Container>
        )
    }
}