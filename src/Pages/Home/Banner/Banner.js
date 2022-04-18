import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import KLM from '../../../images//banner/KLM.jpg';
import etihad from '../../../images//banner/etihad.jpg';
import lufthansa from '../../../images//banner/lufthansa.jpg';


const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={etihad}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Etihad B789</h3>
          <p>From Abu Dhabi To The World</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={lufthansa}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Lufthansa A359</h3>
          <p>Say yes to the world</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={KLM}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>KLM B772</h3>
          <p>
          The Flying Dutchman
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default Banner;