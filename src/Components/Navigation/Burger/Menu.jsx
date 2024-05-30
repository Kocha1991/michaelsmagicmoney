import React from 'react';
import SocialIcon from '../../SocialIcons/SocialIcons';
import { Btn, BtnGame } from '../../Btns/Btns.jsx';

import BtnWallet from '../../../image/wallet.svg';
import HeaderLink from '../../../image/headerlink.png';

import './menu.scss';

const Menu = ({ open }) => {
  return (
    <nav open={open} className={`nav-menu ${open ? 'open' : ''}`}>
      <div className='nav-menu__btns-wrapper'>
        <Btn src={BtnWallet} alt='wallet-icon' text='BUY $PAPER' />
        <BtnGame 
          src={HeaderLink}
          alt='game-img'
        />
      </div>
      <SocialIcon />
    </nav>
  );
};

export default Menu;
