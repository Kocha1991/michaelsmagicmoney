import React from 'react';
import Navigation from './Components/Navigation/Navigation.jsx';
import OptionCard from './Components/OptionCard/OptionCard.jsx';
import Input from './Components/Input/Input.jsx';
import Swapper from './Components/Swapper/Swapper.jsx';
import { BtnGame } from './Components/Btns/Btns.jsx';
import SocialIcon from './Components/SocialIcons/SocialIcons.jsx';
import JustifiedGallery from './Components/JustifiedGallery/JustifiedGallery.jsx';


//styles
import './index.scss';

// images
import PersonImg from './image/main-person.png';
import Detox from './image/DEXTools_+white.png.png';

// //import gifs
import Gif1 from './image/GIF/Figure → send+it+lol.gif.gif';
import Gif2 from './image/GIF/Figure → PAPER+vs+jeets.gif.gif';
import Gif3 from './image/GIF/Figure → PAPER+Trending.jpg.jpg';
import Gif4 from './image/GIF/Figure → PAPER+Marketing.gif.gif';
import Gif5 from './image/GIF/Figure → PAPER+Holders.gif.gif';
import Gif6 from './image/GIF/Figure → paper+flash.gif.gif';
import Gif7 from './image/GIF/Figure → missing+out.jpg.jpg';
import Gif8 from './image/GIF/Figure → ATH.gif.gif';
import Gif9 from './image/GIF/Figure → BUYING+PAPER.jpg.jpg';
import Gif10 from './image/GIF/Figure → EAT+THE+PAPER.gif.gif';
import Gif11 from './image/GIF/Figure → get+in+paper.gif';
import Gif12 from './image/GIF/Figure → jeets+gone+lol.gif.gif';
import Gif13 from './image/GIF/Figure → loading+up+on+paper.gif.gif';
import Gif14 from './image/GIF/Figure → SPANK.gif';

const images = [
  { src: Gif1, alt: 'send+it+lol' },
  { src: Gif2, alt: 'PAPER+vs+jeets' },
  { src: Gif3, alt: 'PAPER+Trending' },
  { src: Gif4, alt: 'PAPER+Marketing' },
  { src: Gif5, alt: 'PAPER+Holders' },
  { src: Gif6, alt: 'paper+flash' },
  { src: Gif7, alt: 'missing+out' },
  { src: Gif8, alt: 'ATH' },
  { src: Gif9, alt: 'BUYING+PAPER' },
  { src: Gif10, alt: 'EAT+THE+PAPER' },
  { src: Gif11, alt: 'get+in+paper' },
  { src: Gif12, alt: 'jeets+gone+lol' },
  { src: Gif13, alt: 'loading+up+on+paper' },
  { src: Gif14, alt: 'SPANK' },
]

function App() {
  return (
    <div className="App">
      <Navigation />
      <section className='main'>
        <div className="container">
          <div className='main__wrapper'>
            <img 
              src={PersonImg}
              alt="person-img"
              className='main__person-img'
            />
          </div>
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
              <div className='game__btn'>
                <BtnGame
                  text='The Game!'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='swap main-padding'>
        <div className="container">
          <div className='swap__wrapper-bg'>
            <div className='swap__box'>
              <Swapper 
                text='Swap'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='gallery main-padding'>
        <JustifiedGallery images={images}/>
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
