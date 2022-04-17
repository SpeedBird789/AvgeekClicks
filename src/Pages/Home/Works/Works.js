import React from 'react';
import biman from '../../../images//example work/biman.png';
import sg from '../../../images//example work/sg.png';
import gulf from '../../../images//example work/gulf.png';
import Work from '../Work/Work';

const works = [
    {id: 1, name: 'Changi Diaries', img: sg},
    {id: 2, name: 'Sweet Home HSIA', img: biman},
    {id: 3, name: 'Arabian Luxury', img: gulf},
]

const Works = () => {
    return (
        <div className='container'>
            <h2 className='text-primary text-center mt-5'>Example Works</h2>
            <div className='row'>
                {
                    works.map(work => <Work key={work.id} work={work}></Work>)
                }
            </div>
        </div>
    );
};

export default Works;