import React from 'react';
import './Service.css'

const Service = (props) => {
    const {id, name, image, price} = props.service;
    console.log(props.service);
    return (
        <div className='col-md-6 col-lg-4 col-12 py-5'>
            <div className="card service__card">
                <div className="card-body">
                    <img className='service__img' src={image} alt="" />
                    <div className="service__name">
                        <h2>{name}</h2>
                    </div>
                    <div className="service__price">
                        <p>BDT {price}</p>
                    </div>
                    <div className="service__detail__button">
                        <button className='detail__button'>Detail</button>
                        <button className='checkout__button mx-3'>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;