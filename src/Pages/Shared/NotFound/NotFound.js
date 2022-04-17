import React from 'react';
import notFound from '../../../images/notFound.jpg';

const NotFound = () => {
    return (
        <div className='bg-dark'>
            <img className='w-50 mx-auto d-block pt-3 pb-5' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;