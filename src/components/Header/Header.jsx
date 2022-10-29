import React from 'react';
import logo from '../../assets/logo.svg';
import { menu } from '../../utils/constans';
import { Logo, Menu } from '..';
import './Header.css';

const Header = () => {
  return (
    <header className='container header'>
      <Logo />
      <Menu menu={menu} />
    </header>
  );
};

export default Header;
