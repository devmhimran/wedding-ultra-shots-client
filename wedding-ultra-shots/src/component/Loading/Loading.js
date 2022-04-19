import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loading.css';


// Added preloader
const Loading = () => {
    return (
        <div className="preloader__bg">
            <div className='container d-flex justify-content-center align-items-center w-100 h-100'>
                <Spinner className='loading__spinner' animation="border" variant="danger" />
            </div>
        </div>
    );
};

export default Loading;