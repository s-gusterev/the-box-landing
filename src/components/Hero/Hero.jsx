import React from 'react';
import { useRef } from 'react';
import { HeroSwiperCard } from '../../components';
import { Navigation, Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { heroSlider } from '../../utils/constans';
import './Hero.css';
// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
//
const Hero = () => {
  const swiperRef = useRef();
  return (
    <section className='hero'>
      <div className='container'>
        <h1 className='hero__title'>Building things is our mission.</h1>
      </div>

      <Swiper
        id='swiper-hero'
        slidesPerView={1}
        effect={'fade'}
        loop={true}
        modules={[Navigation, EffectFade]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        navigation={{
          nextEl: '.hero__button_right',
          prevEl: '.hero__button_left',
        }}
      >
        {heroSlider.map((slide) => (
          <SwiperSlide key={slide.id}>
            <HeroSwiperCard image={slide.image} title={slide.title} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className='hero__button hero__button_left'
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <div className='hero__button-arrow hero__button-arrow_left'></div>
        <span className='hero__button-text'>Back</span>
      </button>
      <button
        className='hero__button hero__button_right'
        onClick={() => swiperRef.current?.slideNext()}
      >
        <span className='hero__button-text'>Next</span>
        <div className='hero__button-arrow hero__button-arrow_right'></div>
      </button>
    </section>
  );
};

export default Hero;
