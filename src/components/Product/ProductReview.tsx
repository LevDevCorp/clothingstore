import React from 'react';

export default class Review extends React.Component {
    render(){
        return (
            <div className="Product-reviews-review mt-3 p-3">
                <div className="Product-review-account d-flex">
                <img src='images/Product/AccountLogo.svg' alt='Account Icon' />
                <h4>Jondo Bondo</h4>
                </div>
                <h6 className='mt-2'>Reviewd on <span>06.06.2020</span></h6>
                <div className="Product-reviews-comment">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quas accusantium ea, 
                        officiis, odit quidem voluptatum provident rerum sed fugiat amet laborum!
                        Quo optio facere eius esse. Alias, libero eius.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quas accusantium ea, 
                        officiis, odit quidem voluptatum provident rerum sed fugiat amet laborum!
                        Quo optio facere eius esse. Alias, libero eius.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quas accusantium ea, 
                        officiis, odit quidem voluptatum provident rerum sed fugiat amet laborum!
                        Quo optio facere eius esse. Alias, libero eius.
                    </p>
                </div>
            </div>
        )
    }
}