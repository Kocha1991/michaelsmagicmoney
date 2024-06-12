import React from 'react';


//import social-icons 
import Telegram from '../../image/telegram.svg';
import X from '../../image/X.svg';
import Dextools from '../../image/dextools.svg';

import './socialIcons.scss';

const iconsSocial = [
  {
    src: Telegram,
    alt: 'telegram-icon',
    link: 'http://t.me/PAPERonBase'
  },
  {
    src: X,
    alt: 'x-icon',
    link: 'https://x.com/paperonbase?t=Tv5yB4E5ZAceeduYcF6rCQ&s=09'
  },
  {
    src: Dextools,
    alt: 'dextools-icon',
    link: 'https://www.dextools.io/app/en/base/pair-explorer/0x1f485a43a402e68997873237a6e7ad98fa5b95b6?t=1714912022924'
  }
];

const SocialIcon = () => {
  return (
    <div className='social'>
      {Object.keys(iconsSocial).map((key) => (
        <a href={iconsSocial[key].link} key={key} className='social__icon' target='_blank' rel="noreferrer">
          <img
            src={iconsSocial[key].src}
            alt={iconsSocial[key].alt}
            className='social__img'
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIcon;
