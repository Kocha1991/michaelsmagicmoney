import React from "react";

import './Card.scss';

const Card = ({phase, title, descr, gif, numb}) => {
  const lines = descr.split('-').map(line => line.trim()).filter(line => line);

  return (
    <div className='card-wrappwer'>
      <div className='number-line'>
        {numb}
      </div>
      <div className='card'>
        <h3>{phase}</h3>
        <h2>{title}</h2>
        <div>
          {lines.map((line, index) => (
            <p key={index}>- {line}</p>
          ))}
        </div>
        <img src={gif} alt='gif-icon' />
      </div>
    </div>
  )
};

export default Card;
