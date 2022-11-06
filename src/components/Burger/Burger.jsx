import React from 'react';
import './Burger.css';

const Burger = ({ active, onClick }) => {
  return (
    <button
      className={`burger ${active ? 'burger_active' : 'burger_not-active'}`}
      onClick={onClick}
    >
      <span className='burger__line'></span>
      <span className='burger__line'></span>
      <span className='burger__line'></span>
    </button>
  );
};

export default Burger;
