import React from "react";

import './optionCard.scss';

type OptionCardProps = {
  subHeader: string;
  text?: string;
  href: string;
  variant: "link" | "not-link";
}


const OptionCard:React.FunctionComponent<OptionCardProps> = ({subHeader, text, href, variant}) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (variant === "not-link") {
      event.preventDefault();
    }
  };

  return (
    <a href={href} className='option-card' onClick={handleClick} target='_blank' rel="noreferrer">
      <h2 className='option-card__subheader'>
        {subHeader}
      </h2>
      <h3 className='option-card__text'>
        {text}
      </h3>
    </a>
  );
}

export default OptionCard;
