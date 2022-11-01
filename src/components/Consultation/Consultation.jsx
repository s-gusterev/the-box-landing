import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Consultation.css';

const Consultation = () => {
  return (
    <section className='consultation'>
      <div className='consultation__container container'>
        <div className='consultation__content'>
          <SectionTitle
            color='light'
            title='Free consultation with exceptional quality'
            className='consultation__title'
          />
          <p className='consultation__paragraph'>
            Just one call away:{' '}
            <a className='consultation__phone' href='tel:+8411022703'>
              +84 1102 2703
            </a>
          </p>
        </div>
        <a href='' className='consultation__button'>
          Get your consultation
        </a>
      </div>
    </section>
  );
};

export default Consultation;
