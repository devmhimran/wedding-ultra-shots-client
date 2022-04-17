import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ServiceModal.css'

const ServiceModal = (props) => {
  const { handleClose, show, detail } = props;
  const { id, name, image, price, photographer, time, light, print, print_paper } = detail;
  const navigate = useNavigate();
  const navigateTodetail = (id) => {
    navigate(`/checkout/${id}`);
  }

  return (
    <Modal className='detail__modal' show={show} onHide={handleClose} animation={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <div className="package__name">
          <h2>{name}</h2>
        </div>
        <div className="package__image">
          <img src={image} alt="" />
        </div>
        <div className="package__detail p-3">
          <p> <b>Photographer: </b>{photographer}</p>
          <hr />
          <p><b>Time: </b>{time}</p>
          <hr />
          <p><b>Light: </b>{light}</p>
          <hr />
          <p><b>Print: </b>{print}</p>
          <hr />
          <p><b>Print Paper: </b>{print_paper}</p>
          <hr />
          <p><b>Price: BDT </b>{price}</p>
          <hr />
          <button className='checkout__button' onClick={()=>navigateTodetail(id)}>Checkout</button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ServiceModal;