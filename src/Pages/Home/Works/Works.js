import React from 'react';
import biman from '../../../images//example work/biman.png';
import sg from '../../../images//example work/sg.png';
import gulf from '../../../images//example work/gulf.png';
import BA from '../../../images/example work/BA2.jpg';
import ANA from '../../../images/example work/ANA.jpg';
import qantas from '../../../images/example work/qantas2.jpg';
import Work from '../Work/Work';

const works = [
    {id: 1, name: 'Changi Diaries', img: sg},
    {id: 2, name: 'Sweet Home HSIA', img: biman},
    {id: 3, name: 'Arabian Luxury', img: gulf},
    {id: 4, name: 'British Queen', img: BA},
    {id: 5, name: 'Aesthetic ANA', img: ANA},
    {id: 6, name: 'Spirit Of Australia', img: qantas},
]

const Works = () => {
    return (
        <div id='exampleworks' className='container'>
            <h1 className='text-info text-center mt-5 mb-3'>Latest Clicks</h1>
            <div className='row'>
                {
                    works.map(work => <Work key={work.id} work={work}></Work>)
                }
            </div>
        </div>
    );
};

export default Works;