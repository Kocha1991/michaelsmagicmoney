import React from 'react';
import Logo from '../Logo/Logo.jsx';
import Btn from '../Btn/Btn.jsx';
import { btnIcons } from '../../js/icons.js';
import headerLink from '../../image/headerlink.png';
import Burger from "../Burger/Burger.jsx";
import Menu from "../Burger/Menu.jsx";
import SocialIcon from '../SocialIcons/SocialIcons.jsx';

//styles
import './navigation.scss';

const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

const Navigation = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div className='header'>
      <div className='container'>
          <div className='header__nav-web'>
            <Logo />
            <div className='header__nav-web__wrapper'>
              <SocialIcon />
              <Btn
                src={btnIcons.wallet.src}
                alt={btnIcons.wallet.alt}
                text="BUY $PAPER"
              />
              <a href="/">
                <img src={headerLink} alt="img" />
              </a>
            </div>
          </div>
          <div 
            className="header__nav-phone" 
            ref={node}
          > 
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
