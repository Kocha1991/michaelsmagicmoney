import React, { useEffect } from 'react';
import Logo from '../Logo/Logo.jsx';
import Button from '../Button/Button';
import Menu from './Burger/Menu';
import SocialIcon from '../SocialIcons/SocialIcons.jsx';
import BtnIcon from '../../image/wallet.svg';
import HeaderLink from '../../image/headerlink.png';
import BurgerButton from './Burger/BurgerButton/BurgerButton';

//styles
import './Navigation.scss';

type AnyEvent = MouseEvent | TouchEvent;

const useOnClickOutside = (ref: any, handler: (event: AnyEvent) => void) => {
  useEffect(() => {
    const listener = (event: AnyEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

type NavigationProps = {
  openModal: () => void;
};

const Navigation: React.FC<NavigationProps> = ({ openModal }) => {
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
    <div className="header">
      <div className="container">
        <div className="header__nav-web">
          <Logo />
          <div className="header__nav-web__wrapper">
            <SocialIcon />
            <Button variant='secondary' src={BtnIcon} alt="wallet-icon" text="BUY $PAPER" />
            <Button src={HeaderLink} alt="game-img" onClick={openModal} />
          </div>
        </div>
        <div className="header__nav-phone" ref={node as any}>
          <div className="header__nav-phone__wrapper">
            <Logo />
            <BurgerButton isOpen={open} onClick={() => setOpen(prev => !prev)} />
          </div>
          <Menu isOpen={open} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
