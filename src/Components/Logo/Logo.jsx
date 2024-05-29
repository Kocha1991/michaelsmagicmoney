import React from "react";
import logo from "../../image/logo.png";

import './logo.scss';

const Logo = () => {
  return (
    <div className='logo'>
      <img 
        src={logo}
        alt="logo"
        className='logo__img'
      />
    </div>
  )
};

export default Logo;
