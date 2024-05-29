import React from "react";

import './burger.scss'; 
import '../../styles/_variables.scss';

const Burger = ({ open, setOpen }) => {
  return (
    <button
      onClick={() => setOpen(!open)}
      className={`burger-btn ${open ? 'open' : ''}`}
    >
      <div />
      <div />
      <div />
    </button>
  );
};

export default Burger;
