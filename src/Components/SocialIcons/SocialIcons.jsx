import React from "react";
import { icons } from '../../js/icons.js';

import './social-icons.scss';

const SocialIcon = () => {
  return (
    <div className="social">
      {Object.keys(icons).map(key => (
        <div key={key} className="social__icon">
          <img 
            src={icons[key].src}
            alt={icons[key].alt}
            className="social__img"
          />
        </div>
      ))}
    </div>
  );
};

export default SocialIcon;