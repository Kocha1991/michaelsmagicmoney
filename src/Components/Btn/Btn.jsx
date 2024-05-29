import React from "react";
import "../Btn/btn.scss";

const Btn = ({src, alt, text}) => {
  return (
    <button className='btn'>
      <img src={src} alt={alt} className='btn__img'/>
      <span className='btn__text btn__text--phone'>{text}</span>
    </button>
  )
};

export default Btn;
