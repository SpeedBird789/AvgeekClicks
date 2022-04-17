import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import finn from '../../../images//banner/finn.jpg';
import qantas from '../../../images//banner/qantas.jpg';
import etihad from '../../../images//banner/etihad.jpg';

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
          <h3>Etihad</h3>
          <p>From Abu Dhabi To The World</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={finn}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>FinnAir</h3>
          <p>The Nordic Way</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={qantas}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Qantas</h3>
          <p>
            Spirit Of Australia
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default Banner;