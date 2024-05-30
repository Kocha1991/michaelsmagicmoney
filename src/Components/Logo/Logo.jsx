import React from "react";
import './logo.scss';

import LogoImg from '../../image/logo.png';

const Logo = () => {
  return (
    <div className='logo'>
      <img 
        src={LogoImg}
        alt='logo-img'
        className='logo__img'
      />
    </div>
  )
};

export default Logo;
