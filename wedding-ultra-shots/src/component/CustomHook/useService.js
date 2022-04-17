import React, { useEffect, useState } from 'react';

const useService = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/devmhimran/dummy-api/main/Service-APi/Service.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[services]);
    return [services, setServices];
};

export default useService;