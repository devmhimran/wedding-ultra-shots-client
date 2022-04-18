import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useService from '../CustomHook/useService';
import ServiceDetailComponent from '../ServiceDetailComponent/ServiceDetailComponent';
import './ServiceDetail.css'

const ServiceDetail = () => {
    const { serviceDetail } = useParams();
    const [services, setServices] = useService([]);
    let serviceSaveData = [];
    const servicesData = services.find(serviceData => serviceData.id === serviceDetail);
    if (servicesData) {
        serviceSaveData.push(servicesData);
    }


    return (
        <div>
            {
                serviceSaveData.map(data => <ServiceDetailComponent key={data.id} data={data}></ServiceDetailComponent>)
            }

            {/* <div className='container'>
                <Spinner className='loading__spinner' animation="border" variant="danger" />
            </div> */}
        </div>
    );
};

export default ServiceDetail;