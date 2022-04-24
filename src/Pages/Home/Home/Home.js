import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Works from '../Works/Works';

const Home = () => {
    return (
        <>
            <PageTitle title='Home'></PageTitle>
            <Banner></Banner>
            <Services></Services>
            <Works></Works>
        </>
    );
};

export default Home;