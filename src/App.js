import React, {useRef} from 'react';
import Nav from './Components/Navigation/Navigation.jsx';
import OptionCard from './Components/OptionCard/OptionCard.jsx';
import Input from './Components/Input/Input.jsx';
import Swapper from './Components/Swapper/Swapper.jsx';
import { BtnGame } from './Components/Btns/Btns.jsx';
import SocialIcon from './Components/SocialIcons/SocialIcons.jsx';
import JustifiedGallery from './Components/JustifiedGallery/JustifiedGallery.jsx';
import Card from './Components/Card/Card.jsx';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

//styles
import './index.scss';
import 'swiper/css';
// import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// images
import PersonImg from './image/main-person.png';
import Detox from './image/DEXTools_+white.png';
import PersonGame from './image/game-person-phg.png';
import Game from './image/game-png.png';

// //import gifs
import Gif1 from './image/GIF/send+it+lol.gif';
import Gif2 from './image/GIF/PAPER+vs+jeets.gif';
import Gif3 from './image/GIF/PAPER+Trending.jpg';
import Gif4 from './image/GIF/PAPER+Marketing.gif';
import Gif5 from './image/GIF/PAPER+Holders.gif';
import Gif6 from './image/GIF/paper+flash.gif';
import Gif7 from './image/GIF/missing+out.jpg';
import Gif8 from './image/GIF/ATH.gif';
import Gif9 from './image/GIF/BUYING+PAPER.jpg';
import Gif10 from './image/GIF/EAT+THE+PAPER.gif';
import Gif11 from './image/GIF/get+in+paper.gif';
import Gif12 from './image/GIF/jeets+gone+lol.gif';
import Gif13 from './image/GIF/loading+up+on+paper.gif';
import Gif14 from './image/GIF/SPANK.gif';

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
  const swiperRef = useRef(null);

  return (
    <div className="App">
      <Nav />
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
      <section className='game'>
        <div className="container">
          <div className="game__bg">
            <img src={PersonGame} alt="bg" className='game__person'/>
            <div className='game__btn-blok'>
              <img src={Game} alt="game" className='game__img'/>
              <BtnGame
                text='The Game!'
              />
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
      <section className='phases main-padding'>
        <div className="container">
          <div className="phases__wrapper">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, A11y]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                780: {
                  slidesPerView: 2
                },
                1060: {
                  slidesPerView: 3
                },
                1400: {
                  slidesPerView: 4
                }
              }}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <Card
                  numb={1}
                  phase='Phase 1'
                  title='The Brainstorming'
                  descr={`
                      - Sketched initial coin design on a napkin at Chili's.
                      - Announced the coin to the office and got a standing ovation (from myself).
                      - Idea conceived during a particularly inspiring episode of "Entourage."
                  `}
                  gif={Gif7}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  numb={2}
                  phase='Phase 2'
                  title='The Launchening'
                  descr={`
                    - Official launch of Michael Scott’s Paper Coin with a celebratory office party and an ice sculpture of myself.
                    - First press release written.
                    - Coin listed on Creed's list of "Sure Things" alongside his savings in the Cayman Islands.
                  `}
                  gif={Gif1}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  numb={3}
                  phase='Phase 3'
                  title='To the Moon'
                  descr={`
                    - Host a seminar on financial freedom.
                    - Partner with local Scranton businesses to accept Michael Scott’s Paper Coin (Alfredo's Pizza Café said maybe).
                    - Release limited edition "Prison Mike" tokens to remind holders that the real value is freedom.
                  `}
                  gif={Gif2}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  numb={4}
                  phase='Phase 4'
                  title='The Diversificationing'
                  descr={`
                    - Launch "Threat Level Midnight" NFT series, because who wouldn't want a digital piece of Michael Scarn?
                    - Begin work on "Michael's Mansion" in Decentraland, a virtual office where we can all hang out (virtually).
                    - Introduce "Dundie Rewards" program where you can earn actual Dundies by hodling.
                  `}
                  gif={Gif4}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  numb={5}
                  phase='Phase 5'
                  title='Growth and Accessibility'
                  descr={`
                    - Work to get $PAPER listed on both niche and major exchanges.
                    - Boost liquidity and make $PAPER a household name.
                  `}
                  gif={Gif6}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  numb={6}
                  phase='Phase 6'
                  title='Sustained Development and Long-Term Vision'
                  descr={`
                    - Keep the updates coming and the community in the loop.
                    - Stay open to feedback for continuous improvement.
                    - Keep adapting and planning for the future – we're in it for the long haul!
                  `}
                  gif={Gif5}
                />
              </SwiperSlide>
              
            </Swiper>
            <div className='phases__nav-btns'>
              <div className='swiper-button-prev'/>
              <div className='swiper-button-next'/>
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
