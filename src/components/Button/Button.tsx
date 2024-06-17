import React from 'react';
import './Button.scss';

type ButtonProps = {
  variant?: "primary" | "secondary";
  text?: string;
  onClick?: () => void;
} & ({ src: string; alt: string } | { src?: never; alt?: never });

const Button: React.FunctionComponent<ButtonProps> = ({ src, alt, text, variant = "primary", onClick }) => {
  if (variant === "primary") {
    return (
      <button className='btn--game' onClick={onClick}>
        {src && <img src={src} alt={alt} />}
        <span>{text}</span>
      </button>
    );
  } else {
    return (
      <a
        href='#swap'
        className='btn'
      >
        {src && <img src={src} alt={alt} />}
        <span className="btn__text btn__text--phone">{text}</span>
      </a>
    );
  }
};

export default Button;


