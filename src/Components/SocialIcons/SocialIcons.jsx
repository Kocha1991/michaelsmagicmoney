import React from 'react';


//import social-icons 
import Telegram from '../../image/telegram.svg';
import X from '../../image/X.svg';
import Dextools from '../../image/dextools.svg';

import './socialIcons.scss';

const iconsSocial = [
  {
    src: Telegram,
    alt: 'telegram-icon'
  },
  {
    src: X,
    alt: 'x-icon'
  },
  {
    src: Dextools,
    alt: 'dextools-icon'
  }
];

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
