import React from 'react';
import Navigation from './Components/Navigation/Navigation.jsx';
import OptionCard from './Components/OptionCard/OptionCard.jsx';
import Input from './Components/Input/Input.jsx';

// images
import PersonImg from './image/main-person.png';
import Detox from './image/DEXTools_+white.png.png';

//styles
import './index.scss';
import { BtnGame } from './Components/Btns/Btns.jsx';
import SocialIcon from './Components/SocialIcons/SocialIcons.jsx';

function App() {
  return (
    <div className="App">
      <Navigation />
      <section className='main'>
        <div className="container">
          <img 
            src={PersonImg}
            alt="person-img"
            className='main__person-img'
          />
        </div>
      </section>
      <section className='tokenomics main-padding'>
        <div className="container">
          <div className='tokenomics__bg--phone'></div>
          <div className='tokenomics__bg'>
            <div className='tokenomics__cards'>
              <OptionCard 
                href='/'
                subheader='88%'
                text='OF LP ADDED & BURNED'
              />
              <OptionCard 
                href='/'
                subheader='9.28 Billion'
                text='Circulating Supply'
              />
              <OptionCard 
                href='/'
                subheader='Contract Renounced'
              />
              
              <OptionCard 
                href='/'
                subheader='7%'
                text='BURNED'
              />
              <OptionCard 
                href='/'
                subheader='0/0'
                text='TAX'
              />
              <OptionCard 
                href='/'
                subheader='5%'
                text='TEAM WALLET'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='main-padding'>
        <div className='game'>
          <div className="container">
            <div className="game__bg">
              <div className="game__wrapper">
                {/* <BtnGame
                  text='The Game!'
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className='footer'>
        <div className="container">
          <div className="footer__wrapper">
            <h3 className='footer__text'>
              This is definitely not a pyramid scheme. Pyramids are illegal. This is a reverse funnel system.
            </h3>
            <div className="footer__input">
              <Input />
            </div>
            <div className='footer__icons'>
              <a href="/" className='footer__detox'>
                <img src={Detox} alt="detox-link" />
              </a>
              <SocialIcon />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
