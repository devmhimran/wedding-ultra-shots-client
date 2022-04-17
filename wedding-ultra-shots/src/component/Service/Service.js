import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceModal from '../ServiceModal/ServiceModal';
import './Service.css'

const Service = (props) => {
    const {id, name, image, price} = props.service;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();
    const navigateTodetail = (id) => {
      navigate(`/service/${id}`);
    }
    
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
                    <div className="service__detail__button d-flex justify-content-between">
                        <button className='detail__button' onClick={()=>navigateTodetail(id)}>Book Now</button>
                        <ServiceModal key={id} handleClose={handleClose} show={show} detail={props.service}></ServiceModal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;