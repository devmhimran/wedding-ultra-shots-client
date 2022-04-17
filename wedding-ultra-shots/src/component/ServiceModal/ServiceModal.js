import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ServiceModal = (props) => {
    const {handleClose, show, detail} = props;  
    const {name, image, price, photographer, time, light, print, print_paper } = detail;

    return (
        <Modal show={show} onHide={handleClose} animation={false}
        size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
        >
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="package__name">
                <h2>{name}</h2>
            </div>
            <div className="package__image">
                <img src={image} alt="" />
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
};

export default ServiceModal;