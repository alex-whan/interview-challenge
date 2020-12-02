import React from 'react';
import logo from '../../assets/logo-symbol.svg';

const Header = () => {
  return (
    <>
      <img src={logo} alt="Helpful Human Logo" />
      <h1>Header</h1>
      <form>
        <input type="text" placeholder="Search"></input>
      </form>
    </>
  );
};

export default Header;
