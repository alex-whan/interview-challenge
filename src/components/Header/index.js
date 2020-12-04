import React, { useState } from 'react';
import logo from '../../assets/logo-symbol.svg';

const Header = ({ formHandler }) => {
  const [formValue, setFormValues] = useState('');

  const handleChange = e => {
    setFormValues(e.target.value);
  };

  const handleSubmit = e => {
    formHandler(formValue);
    e.preventDefault();
    setFormValues('');
  };

  return (
    <>
      <header className="header">
        <div className="logo-div">
          <img src={logo} alt="Helpful Human Logo" />
        </div>
        <div className="search-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={formValue}
              placeholder="Search"
              onChange={handleChange}
            ></input>
          </form>
        </div>
      </header>
    </>
  );
};

export default Header;
