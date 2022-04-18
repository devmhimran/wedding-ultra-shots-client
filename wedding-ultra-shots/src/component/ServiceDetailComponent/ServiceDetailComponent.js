import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ServiceDetailComponent.css';

const ServiceDetailComponent = (props) => {
    const { id, name, image, price, photographer, time, light, print, print_paper } = props.data;
    const navigate = useNavigate();
    return (
        <div className='container'>
            <div className=" service__detail__component">
            <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-12">
                    <div className="service__detail__img">
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="package__name">
                                <h1>{name}</h1>
                            </div>
                            <div className="package__detail">
                                <p><b>Photographer: </b>{photographer}</p>
                                <p><b>Time: </b>{time}</p>
                                <p><b>Light: </b>{light}</p>
                                <p><b>Print: </b>{print}</p>
                                <p><b>Print Paper: </b>{print_paper}</p>
                                <p><b>Price: BDT </b><span className='price__main'>{price}</span></p>
                            <button className='checkout__button'  onClick={()=> navigate('/checkout')}>Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default ServiceDetailComponent;