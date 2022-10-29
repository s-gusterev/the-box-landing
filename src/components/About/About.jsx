import React from 'react';
import './About.css';
import { about } from '../../assets';
import SectionTitle from '../SectionTitle/SectionTitle';

const About = () => {
  return (
    <section className='about container'>
      <img className='about__img' src={about} alt='about' />
      <div className='about__content'>
        <SectionTitle title='About us' color='light' className='about__title' />
        <div className='about__texts'>
          <p className='about__paragraph'>
            For more than 30 years we have been delivering world-class
            construction and we’ve built many lasting relationships along the
            way.
          </p>
          <p className='about__paragraph'>
            We’ve matured into an industry leader and trusted resource for those
            seeking quality, innovation and reliability when building in the
            U.S.
          </p>
        </div>
        <a href='#' className='about__button'>
          More on Our History
        </a>
      </div>
    </section>
  );
};

export default About;
