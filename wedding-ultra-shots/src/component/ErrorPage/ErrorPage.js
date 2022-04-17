import React from 'react';
import errorGif from '../../Assets/error-gif.gif'

const ErrorPage = () => {
    return (
        <div className='container'>
            <div className="error d-flex justify-content-center">
                <img  src={errorGif} alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;