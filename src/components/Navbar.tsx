import React from 'react';
import logo from '../images/quiz-logo.svg';
import { Wrapper } from './Navbar.styles';

const Navbar = () => {
  return (
    <Wrapper>
      <nav className='navbar'>
        <img src={logo} alt='cocktail db logo' className='logo'></img>
        <a href='https:www.jasneastwd.vercel.app'>created by jasneastwd</a>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
