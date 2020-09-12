import React from 'react';

const Footer = () => {
	return (
        <footer className='mt-5'>
        <div className='container'>
            <div className="row">
                <div className="col-4">
                    <div className='row footer-cards'>
                        <div className=""><img alt="" src='images/Cards/VISA.svg' /></div>
                        <div className=""><img alt="" src='images/Cards/mastercard.svg' /></div>
                        <div className=""><img alt="" src='images/Cards/Paypal.svg' /></div>
                        <div className=""><img alt="" src='images/Cards/american-express.svg' /></div>
                    </div>
                </div>
                <div className="col-4">
                    <div className='footer-midsection text-center'>
                        <p>Copyright©2020 All Rights Reserved</p>
                        <div className='footer-midsection-socialmedia'>
                            <a href='#'><img alt="" src='images/socialMedia/Facebook.svg'/></a>
                            <a href='#'><img alt="" src='images/socialMedia/Instagram.svg'/></a>
                            <a href='#'><img alt="" src='images/socialMedia/Youtube.svg'/></a>
                            <a href='#'><img alt="" src='images/socialMedia/Pinterest.svg'/></a>
                        </div>
                    </div>

                </div>
                <div className="col-4 text-right">
                    <div className='footer-rightsection'>
                        <div><a href='#'>Contact Us</a></div>
                        <div><a href='#'>About Us</a></div>
                        <div><a href='#'>Offer to Sellers</a></div>
                    </div>
                </div>
            </div>
        </div>

        </footer>
	)
}

export {Footer}