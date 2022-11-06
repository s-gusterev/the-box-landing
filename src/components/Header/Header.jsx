import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import { menu } from '../../utils/constans';
import { Logo, Menu, MenuMobile, Burger } from '..';
import './Header.css';

const Header = () => {
  const [activeBurger, setActiveBurger] = useState(false);

  return (
    <header className='container header'>
      <Logo />
      <Menu menu={menu} />
      <MenuMobile menu={menu} />
      <Burger
        active={activeBurger}
        onClick={() => setActiveBurger(!activeBurger)}
      />
    </header>
  );
};

export default Header;
