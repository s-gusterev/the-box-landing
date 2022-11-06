import React from 'react';
import './MenuMobile.css';

const MenuMobile = ({ menu }) => {
  return (
    <nav className='menu-mobile'>
      <ul className='menu-mobile__list'>
        {menu.map((item) => {
          return (
            <li className='menu-mobile__item' key={item.url}>
              <a className='menu-mobile__link' href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MenuMobile;
