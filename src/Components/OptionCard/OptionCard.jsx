import React from "react";

import './optionCard.scss';

function OptionCard({subheader, text, href}) {
  return (
    <a href={href} className='option-card'>
      <h2 className='option-card__subheader'>
        {subheader}
      </h2>
      <h3 className='option-card__text'>
        {text}
      </h3>
    </a>
  );
}

export default OptionCard;
