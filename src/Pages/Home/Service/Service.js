import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, name, img, description, price} = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }

    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2 className='mt-2'>{name} </h2>
            <h5>Price: £{price} </h5>
            <h6 className='mb-3'><small>{description}</small></h6>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-info mb-2'>Book This Plan</button>
        </div>
    );
};

export default Service;