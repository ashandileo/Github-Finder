import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo/Logo.png';

const Header = () => {
  return (
    <div className="header tw-w-full tw-shadow-md">
      <div className="container tw-py-3 tw-flex tw-justify-between tw-items-center">
        <div className="logo">
          <img src={Logo} className="tw-w-32"/>
        </div>
        <div className="navigation">
          <NavLink to="/" className="tw-mr-8">
            Home
          </NavLink>
          <NavLink to="/about">
            About
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header;