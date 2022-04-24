import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle/PageTitle';

const ServiceDetail = () => {
    const {serviceId} = useParams();
     return (
        <div style={{minHeight: '63vh'}}>
            <PageTitle title='Booking'></PageTitle>
            <h2 className='text-center mt-3'>Book this plan {serviceId}</h2>
            <div className='text-center'>
            <Link to='/checkout'>
                <button className='btn btn-primary mt-5'> Proceed To Checkout</button>
            </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;