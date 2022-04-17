import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useService from '../CustomHook/useService';
import ServiceDetailComponent from '../ServiceDetailComponent/ServiceDetailComponent';

const ServiceDetail = () => {
    const {serviceDetail} = useParams();
    const [services, setServices] = useService([]);
    let serviceSaveData = [];
    const servicesData = services.find(serviceData => serviceData.id === serviceDetail);
    if(servicesData){
        serviceSaveData.push(servicesData);
        console.log(serviceSaveData);
    }


    return (
        <div>
            {
                serviceSaveData.map(data => <ServiceDetailComponent key={data.id} data={data}></ServiceDetailComponent>)
            }
        </div>
    );
};

export default ServiceDetail;