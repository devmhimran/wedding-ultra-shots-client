import React from 'react';
import useService from '../CustomHook/useService';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useService([]);

    return (
        <div className='services__main'>
            <div className="container">
                <h1 className='text-center'>Services</h1>
                <div className='services__main__divider mx-auto'></div>
                <div className="services__caar">
                    <div className="row">
                        {
                            services.map(service => <Service key={service.id} service={service}></Service>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;