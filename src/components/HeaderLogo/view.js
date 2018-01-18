import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../../assets/svg/header-logo.svg'

export const HeaderLogoView = () => {
  return (
    <div className="header-logo">
      <Link to="/">
        <img src={logo} alt="Gresso logo"/>
      </Link>
    </div>
  );
};