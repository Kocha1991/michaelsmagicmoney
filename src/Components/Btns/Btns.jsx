import React from 'react';
import './btns.scss';

export const Btn = ({ src, alt, text, href, onClick, className }) => {
  return (
    <button href={href} className='btn' onClick={onClick}>
      <img src={src} alt={alt} />
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