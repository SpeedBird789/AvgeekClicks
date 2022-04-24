import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import './Work.css';

const Work = ({ work }) => {
    const { name, img } = work;
    return (
        <div className='gx-5 gy-3 col-sm-12 col-md-6 col-lg-4'>

            <PageTitle title='Example Works'></PageTitle>
            <div className="card" style={{ width: "26rem", height: "350px"}}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">{name}</h5>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>

    );
};

export default Work;