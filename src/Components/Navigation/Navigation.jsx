import React from 'react';
import Logo from '../Logo/Logo.jsx';
import { Btn, BtnGame } from '../Btns/Btns.jsx';
import Burger from './Burger/Burger.jsx';
import Menu from './Burger/Menu.jsx';
import SocialIcon from '../SocialIcons/SocialIcons.jsx';

import BtnIcon from '../../image/wallet.svg';
import HeaderLink from '../../image/headerlink.png';


//styles
import './navigation.scss';

const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

const Navigation = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className='header'>
      <div className='container'>
        <div className='header__nav-web'>
          <Logo />
          <div className='header__nav-web__wrapper'>
            <SocialIcon />
            <Btn src={BtnIcon} alt='wallet-icon' text='BUY $PAPER' />
            <BtnGame 
              src={HeaderLink}
              alt='game-img'
            />
          </div>
        </div>
        <div className='header__nav-phone' ref={node}>
          <div className='header__nav-phone__wrapper'>
            <Logo />
            <Burger open={open} setOpen={setOpen} />
          </div>
          <Menu open={open} setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
