import React, { useEffect, useState } from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    

    return (
        <div id='services' className='container'>

            
            <div className="row">
            <h1 className='text-info text-center mt-5 mb-4'>Services</h1>
            <div className="services-container">
            {
                services.map(service => <Service key={service.id} service={service}></Service>)
            }
            <PageTitle title='Services'></PageTitle>
            </div>
            </div>
        </div>
    );
};

export default Services;