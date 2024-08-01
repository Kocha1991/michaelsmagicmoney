import React from "react";

import './Card.scss';

type CardProps = {
  phase: string;
  title: string;
  descr: string;
  gif?: string;
  numb: number;
}

const Card: React.FunctionComponent<CardProps> = ({
  phase, 
  title, 
  descr, 
  numb
}) => {
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
        {/* <img src={gif} alt='gif-icon' /> */}
      </div>
    </div>
  )
};

export default Card;
