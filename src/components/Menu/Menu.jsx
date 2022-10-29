import React from 'react';
import './Menu.css';

const Menu = ({ menu }) => {
  return (
    <nav className='menu'>
      <ul className='menu__list'>
        {menu.map((item) => {
          return (
            <li className='menu__item' key={item.url}>
              <a className='menu__link' href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
