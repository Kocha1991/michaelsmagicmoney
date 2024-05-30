import React from 'react';
import { iconsSocial } from '../../js/bd.js';

import './socialIcons.scss';

const SocialIcon = () => {
  return (
    <div className='social'>
      {Object.keys(iconsSocial).map((key) => (
        <div key={key} className='social__icon'>
          <img
            src={iconsSocial[key].src}
            alt={iconsSocial[key].alt}
            className='social__img'
          />
        </div>
      ))}
    </div>
  );
};

export default SocialIcon;
