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
        href='https://app.uniswap.org/explore/tokens/base/0x7910737759c35533f1fd6c49adead1869573cdfc'
        className='btn'
        target='_blank'
        rel='noreferrer'
      >
        {src && <img src={src} alt={alt} />}
        <span className="btn__text btn__text--phone">{text}</span>
      </a>
    );
  }
};

export default Button;


