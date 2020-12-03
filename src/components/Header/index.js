import React from 'react';
import logo from '../../assets/logo-symbol.svg';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo-div">
          <img src={logo} alt="Helpful Human Logo" />
        </div>
        <div className="search-form">
          <form>
            <input type="text" placeholder="Search"></input>
          </form>
        </div>
      </header>
    </>
  );
};

export default Header;
