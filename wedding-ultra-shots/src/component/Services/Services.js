import React from 'react';
import useService from '../CustomHook/useService';
import './Services.css'

const Services = () => {
    const [services, setServices] = useService([]);

    return (
        <div className='services__main'>
            <div className="container">
                <h1 className='text-center'>Services</h1>
            </div>
            <div className='services__main__divider mx-auto'></div>
            <h1>{services.length}</h1>
        </div>
    );
};

export default Services;