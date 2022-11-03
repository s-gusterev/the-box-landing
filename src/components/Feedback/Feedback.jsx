import React, { useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Select, { components } from 'react-select';
import './Feedback.css';
import { optionsSelectFeedback } from '../../utils/constans';
import { customStyles } from './styleReactSelect';

const DownIcon = () => {
  return (
    <svg
      width='18'
      height='17'
      viewBox='0 0 18 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.00002 0.166504C4.40002 0.166504 0.666687 3.89984 0.666687 8.49984C0.666687 13.0998 4.40002 16.8332 9.00002 16.8332C13.6 16.8332 17.3334 13.0998 17.3334 8.49984C17.3334 3.89984 13.6 0.166504 9.00002 0.166504ZM8.70835 10.7082L6.38335 8.38317C6.11669 8.1165 6.30002 7.6665 6.67502 7.6665H11.3334C11.7084 7.6665 11.8917 8.1165 11.625 8.37484L9.30002 10.6998C9.13335 10.8665 8.86669 10.8665 8.70835 10.7082Z'
        fill='#2947A9'
      />
    </svg>
  );
};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <DownIcon />
    </components.DropdownIndicator>
  );
};

const Feedback = () => {
  return (
    <section className='feedback'>
      <div className='container'>
        <SectionTitle
          title='What can us do for you?'
          position='center'
          className='feedback__title'
        />
        <p className='feedback__description'>
          We are ready to work on a project of any complexity, whether it’s
          commercial or residential.
        </p>
        <form className='feedback__form'>
          <div className='feedback__form-inputs-container'>
            <input
              className='feedback__input'
              type='text'
              name='name'
              id='name'
              required
              placeholder=' '
            />
            <label
              className='feedback__label feedback__label_type_required'
              htmlFor='name'
            >
              Your Name
            </label>
          </div>
          <div className='feedback__form-inputs-container'>
            <input
              className='feedback__input'
              type='email'
              name='email'
              id='email'
              required
              placeholder=' '
            />
            <label
              className='feedback__label feedback__label_type_required'
              htmlFor='email'
            >
              Email
            </label>
          </div>
          <div className='feedback__form-inputs-container'>
            <Select
              options={optionsSelectFeedback}
              placeholder='Reason for Contacting'
              styles={customStyles}
              components={{ DropdownIndicator }}
              classNamePrefix='feedback__select'
            />
          </div>

          <div className='feedback__form-inputs-container'>
            <input
              className='feedback__input'
              type='tel'
              name='tel'
              id='tel'
              placeholder=' '
            />
            <label className='feedback__label' htmlFor='tel'>
              Phone
            </label>
          </div>

          <textarea
            className='feedback__input feedback__input_type_textarea'
            name='message'
            placeholder='Message'
          ></textarea>
          <p className='feedback__note'>
            <span className='feedback__asterisk'>*</span> indicates a required
            field
          </p>
          <button className='feedback__button' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Feedback;
