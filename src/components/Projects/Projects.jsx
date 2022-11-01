import React from 'react';

import SectionTitle from '../SectionTitle/SectionTitle';
import { projects } from '../../utils/constans';

import { useRef } from 'react';
import { Navigation, Pagination, Grid } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import './Projects.css';

const Projects = () => {
  const swiperRef = useRef();

  return (
    <section className='projects container'>
      <SectionTitle title='Projects' className='projects__title' color='dark' />
      <div className='projects__content'>
        <ul className='projects__list'>
          <li className='projects__item'>
            <button
              type='button'
              className='projects__button projects__button_active'
            >
              All
            </button>
          </li>
          <li className='projects__item'>
            <button type='button' className='projects__button'>
              Commercial
            </button>
          </li>
          <li className='projects__item'>
            <button type='button' className='projects__button'>
              Residential
            </button>
          </li>
          <li className='projects__item'>
            <button type='button' className='projects__button'>
              Other
            </button>
          </li>
        </ul>
        <div className='projects__gallery'>
          <div className='projects__cards'>
            <Swiper
              id='swiper-projects'
              slidesPerView={2}
              slidesPerGroup={2}
              grid={{
                rows: 2,
                fill: 'row',
              }}
              spaceBetween={32}
              pagination={{
                clickable: true,
                el: '.projects__paginations',
              }}
              navigation={{
                nextEl: '.projects__button-slider_right',
                prevEl: '.projects__button-slider_left',
              }}
              modules={[Grid, Pagination, Navigation]}
              className='projects__cards'
            >
              {projects.map((card) => (
                <SwiperSlide key={card.id} className='projects__card'>
                  <img
                    className='projects__card-img'
                    src={card.image}
                    alt={card.title}
                  />
                  <div className='project__card-text'>
                    <h3 className='projects__card-title'>{card.title}</h3>
                    <p className='projects__card-address'>{card.address}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className='projects__buttons'>
            <button
              className='projects__button-slider projects__button-slider_left'
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <div className='projects__button-slider-arrow projects__button-slider-arrow_left'></div>
              <span className='projects__button-slider-text'>Back</span>
            </button>
            <div className='projects__paginations'></div>
            <button
              className='projects__button-slider projects__button-slider_right'
              onClick={() => swiperRef.current?.slideNext()}
            >
              <span className='projects__button-slider-text'>Next</span>
              <div className='projects__button-slider-arrow projects__button-slider-arrow_right'></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
