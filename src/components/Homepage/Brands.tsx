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


export default class Brands extends React.Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };
        return (
            <Container className="mt--100 margin-bott">
                <div className="clearfix">
                    <h4 className="float-left">Brands</h4>
                    <Link className="float-right text-upercase" to="/clothingstore/Catalog" >View More</Link>
                </div>
                <Slider className="border p-carousel bg-collor" {...settings}>
                    <div className="height-320  ">
                        <Link to='/clothingstore/Catalog'>
                            <img className="margin-R" src="images/Homepage/adidas.png" alt="pants-sport" />
                        </Link>
                    </div>
                    <div className="height-320 ">
                        <Link to='/clothingstore/Catalog'>
                            <img className="margin-R" src="images/Homepage/nike-swoosh-wikipedia.png" alt="shoe-women-casualn" />
                        </Link>
                    </div>
                    <div className="height-320 " >
                        <Link to='/clothingstore/Catalog'>
                            <img src="images/Homepage/CalvinKlein.png" alt="winter-jacket" />
                        </Link>
                    </div>
                    <div className="height-320 ">
                        <Link to='/clothingstore/Catalog'>
                            <img src="images/Homepage/polo.png" alt="jexxi-ring" />
                        </Link>
                    </div>
                    <div className="height-320 ">
                        <Link to='/clothingstore/Catalog'>
                            <img className="" src="images/Homepage/adidas.png" alt="pants-sport" />
                        </Link>
                    </div>
                    <div className="height-320 ">
                        <Link to='/clothingstore/Catalog'>
                            <img src="images/Homepage/nike-swoosh-wikipedia.png" alt="shoe-women-casualn" />
                        </Link>
                    </div>
                    <div className="height-320 ">
                        <Link to='/clothingstore/Catalog'>
                            <img src="images/Homepage/CalvinKlein.png" alt="winter-jacket" />
                        </Link>
                    </div>
                    <div className="height-320">
                        <Link to='/clothingstore/Catalog'>
                            <img src="images/Homepage/polo.png" alt="jexxi-ring" />
                        </Link>
                    </div>
                </Slider>
            </Container>
        )
    }
}