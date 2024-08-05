import React from 'react'
import SocialIcon from '../../SocialIcons/SocialIcons';
import { Link } from 'react-scroll';

import { ImageEnum } from '../../../types/imagesEnum'

import './Menu.scss'
import Button from '../../Button/Button'

type MenuProps = {
  isOpen: boolean
  onClose: () => void
  openModal: () => void;
}
const Menu: React.FunctionComponent<MenuProps> = ({ isOpen, onClose, openModal }) => {
  return (
    <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
      <ul className='navigation navigation--phone'>
        <li className='navigation__item'>
        <Link to="about-us" smooth={true} duration={100} onClick={onClose}>
          About us
        </Link>
        </li>
        <li className='navigation__item'>
          <Link to="game" smooth={true} duration={100} onClick={onClose}>
            Game
          </Link>
        </li>
        <li className='navigation__item'>
          <Link to="swap" smooth={true} duration={100} onClick={onClose}>
            Buy $PAPER
          </Link>
        </li>
        <li className='navigation__item'>
          <Link to="our-way" smooth={true} duration={100} onClick={onClose}>
            Our way
          </Link>
        </li>
        <li className='navigation__item'>
          <Link to="memes" smooth={true} duration={100} onClick={onClose}>
            Memes
          </Link>
        </li>
      </ul>
      <div className="nav-menu__btns-wrapper">
        <SocialIcon />
        <Button 
          src={ImageEnum.Play} 
          alt="play-img" 
          text="Play"
          onClick={() => {openModal(); onClose();}}
        />
        <Button 
          variant="secondary" 
          src={ImageEnum.WalletWight} 
          alt="wallet-icon" 
          text="BUY $PAPER" 
          onClick={onClose}
        />
      </div>
    </nav>
  )
}

export default Menu
