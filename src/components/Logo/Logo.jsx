import './logo.scss';

import LogoImg from '../../image/logo.jpg';

const Logo = () => {
  return (
    <div className='logo'>
      <img 
        src={LogoImg}
        alt='logo-img'
        className='logo__img'
      />
      <span className='logo__text'>$PAPER</span>
    </div>
  )
};

export default Logo;
