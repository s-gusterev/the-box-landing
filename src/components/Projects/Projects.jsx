import React, { useState } from 'react';

import SectionTitle from '../SectionTitle/SectionTitle';
import { projects } from '../../utils/constans';

import { useRef } from 'react';
import { Navigation, Pagination, Grid } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, AnimatePresence } from 'framer-motion';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import './Projects.css';

const Projects = () => {
  const swiperRef = useRef();
  const [cards, setCards] = useState(projects);
  const [activeProjectClass, setActiveProjectClass] = useState(0);

  const addClassProjects = (index) => {
    setActiveProjectClass(index);
  };

  const resetClassProjects = () => {
    setActiveProjectClass(0);
    setCards(projects);
  };

  const filterResult = (item, index) => {
    const result = projects.filter((currentData) => {
      return currentData.category === item;
    });
    setCards(result);
    addClassProjects(index);
  };

  return (
    <section className='projects container'>
      <SectionTitle title='Projects' className='projects__title' color='dark' />
      <div className='projects__content'>
        <ul className='projects__list'>
          <li className='projects__item'>
            <button
              type='button'
              className={`projects__button ${
                activeProjectClass === 0 ? 'projects__button_active' : ''
              } `}
              onClick={() => resetClassProjects()}
            >
              All
            </button>
          </li>
          <li className='projects__item'>
            <button
              type='button'
              className={`projects__button ${
                activeProjectClass === 1 ? 'projects__button_active' : ''
              } `}
              onClick={() => filterResult('Commercial', 1)}
            >
              Commercial
            </button>
          </li>
          <li className='projects__item'>
            <button
              type='button'
              className={`projects__button ${
                activeProjectClass === 2 ? 'projects__button_active' : ''
              } `}
              onClick={() => filterResult('Residential', 2)}
            >
              Residential
            </button>
          </li>
          <li className='projects__item'>
            <button
              type='button'
              className={`projects__button ${
                activeProjectClass === 3 ? 'projects__button_active' : ''
              } `}
              onClick={() => filterResult('Other', 3)}
            >
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
              <AnimatePresence>
                {cards.map((card) => (
                  <SwiperSlide key={card.id} className='projects__card'>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <img
                        className='projects__card-img'
                        src={card.image}
                        alt={card.title}
                      />
                      <div className='project__card-text'>
                        <h3 className='projects__card-title'>{card.title}</h3>
                        <p className='projects__card-address'>{card.address}</p>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </AnimatePresence>
            </Swiper>
          </div>
          <div
            className='projects__buttons'
            style={
              cards.length > 5
                ? { visibility: 'visible', transition: 'all ease 0ms' }
                : { visibility: 'hidden', transition: 'all  ease 0ms' }
            }
          >
            <button
              className='projects__button-slider projects__button-slider_left'
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <div className='projects__button-slider-arrow projects__button-slider-arrow_left'></div>
              <span className='projects__button-slider-text'>Back</span>
            </button>
            <div
              className='projects__paginations'
              id='projects__paginations'
            ></div>
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
