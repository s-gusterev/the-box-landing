import React from 'react';
import './HeroSwiperCard.css';

const HeroSwiperCard = ({ image, title }) => {
  return (
    <>
      <div
        className='hero__img'
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 0.9) 16.58%, rgba(255, 255, 255, 0) 72.38%), url(${image})`,
        }}
      ></div>
      <div className='hero__card'>
        <p className='hero__card-suptitle'>Feature Projects</p>
        <h2 className='hero__card-title'>{title}</h2>
      </div>
    </>
  );
};

export default HeroSwiperCard;
