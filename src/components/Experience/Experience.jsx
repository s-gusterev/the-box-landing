import React from 'react';
import './Experience.css';
import { experience } from '../../utils/constans';

const Experience = () => {
  return (
    <section className='experience container'>
      <div className='experience__cards'>
        {experience.map((card, index) => (
          <div className='experience__card' key={index}>
            <h3 className='experience__card-title'>{card.title}</h3>
            <p className='experience__card-subtitle'>{card.number}</p>
            <img
              className='experience__card-image'
              src={card.image}
              alt={card.title}
            />
          </div>
        ))}
      </div>
      <div className='experience__content'>
        <h2 className='experience__title'>30 Years Experience</h2>
        <p className='experience__paragraph'>
          Our company has been the leading provided construction services to
          clients throughout the USA since 1988.
        </p>
      </div>
    </section>
  );
};

export default Experience;
