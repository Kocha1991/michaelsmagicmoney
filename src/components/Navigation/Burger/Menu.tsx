import React from 'react'
import SocialIcon from '../../SocialIcons/SocialIcons'

import { ImageEnum } from '../../../types/imagesEnum'

import './Menu.scss'
import Button from '../../Button/Button'

type MenuProps = {
  isOpen: boolean
}
const Menu: React.FunctionComponent<MenuProps> = ({  isOpen }) => {
  return (
    <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
      <ul className='navigation navigation--phone'>
        <li className='navigation__item'>About us</li>
        <li className='navigation__item'>Game</li>
        <li className='navigation__item'>Buy $PAPER</li>
        <li className='navigation__item'>Our way</li>
        <li className='navigation__item'>Memes</li>
      </ul>
      <div className="nav-menu__btns-wrapper">
        <SocialIcon />
        <Button src={ImageEnum.Play} alt="play-img" text="Play"/>
        <Button variant="secondary" src={ImageEnum.WalletWight} alt="wallet-icon" text="BUY $PAPER" />
      </div>
    </nav>
  )
}

export default Menu
