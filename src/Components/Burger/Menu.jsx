import React from "react";
// import styled from "styled-components";
import SocialIcon from '../SocialIcons/SocialIcons';
import Btn from '../Btn/Btn';
import { btnIcons } from '../../js/icons';

import headerLink from '../../image/headerlink.png';

import './menu.scss';

const Menu = ({ open }) => {
  return (
    <nav open={open} className={`nav-menu ${open ? 'open' : ''}`}>
      <div className='nav-menu__btns-wrapper'>
        <Btn
          src={btnIcons.wallet.src}
          alt={btnIcons.wallet.alt}
          text="BUY $PAPER"
        />
        <a href="/" className='btn-img'>
          <img src={headerLink} alt="img" />
        </a>
      </div>
      <SocialIcon />
    </nav>
  );
};


export default Menu;
