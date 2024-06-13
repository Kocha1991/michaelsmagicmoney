import React from 'react';
import './Button.scss';
import clsx from 'clsx';

type ButtonProps = {
  variant?: "primary" | "secondary";
  text?: string;
} & ({src: string; alt: string} | {src?: never; alt?: never})
const Button: React.FunctionComponent<ButtonProps> = ({src, alt, text, variant = "primary"}) => {
  return (
    <a href={clsx(variant === "primary" ? 'https://paveleon.itch.io/scarnoffice' : 'https://app.uniswap.org/explore/tokens/base/0x7910737759c35533f1fd6c49adead1869573cdfc')} className={clsx(variant === "primary" ? 'btn--game' : 'btn')} target='_blank' rel="noreferrer">
     {src &&  <img src={src} alt={alt}/>}
      <span className={clsx(variant === "secondary" && "btn__text btn__text--phone")}>{text}</span>
    </a>
  )
}

export default Button