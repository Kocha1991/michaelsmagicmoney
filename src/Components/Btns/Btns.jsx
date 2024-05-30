import React from 'react';
import './btns.scss';

export const Btn = ({ src, alt, text, href }) => {
  return (
    <button href={href} className='btn'>
      <img src={src} alt={alt} className='btn__img' />
      <span className='btn__text btn__text--phone'>{text}</span>
    </button>
  );
};

export const BtnGame = ({src, alt, text}) => {
  return (
    <a href='/' className='btn--game'>
      <img src={src} alt={alt}/>
      <span className=''>{text}</span>
    </a>
  )
}