import React from 'react';
import logo from '../../assets/logo-symbol.svg';

const Header = () => {
  return (
    <>
      <header>
        <img src={logo} alt="Helpful Human Logo" />
        <h1>Header</h1>
        <form>
          <input type="text" placeholder="Search"></input>
        </form>
      </header>
    </>
  );
};

export default Header;
