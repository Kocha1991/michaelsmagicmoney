import Navigation from './components/Navigation/Navigation'
import OptionCard from './components/OptionCard/OptionCard'
import Input from './components/Input/Input.jsx'
import Button from './components/Button/Button'
import SocialIcon from './components/SocialIcons/SocialIcons.jsx'
import JustifiedGallery from './components/JustifiedGallery/JustifiedGallery'
import UniswapWidget from './components/UniswapWidget/UniswapWidget'
import GifSwiper from './components/GifSwiper/GifSwiper'
import GameModal from './components/GameModal/GameModal';

//styles
import './index.scss'
import 'swiper/css'
// import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

// images
import PersonImg from './image/main-person.png'
import Detox from './image/DEXTools_+white.png'
import PersonGame from './image/game-person-phg.png'
import Game from './image/game-png.png'
import { useState } from 'react'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Navigation openModal={openModal} />
      <section className="main">
        <div className="container">
          <div className="main__wrapper">
            <img src={PersonImg} alt="person-img" className="main__person-img" />
          </div>
        </div>
      </section>
      <section className="tokenomics main-padding">
        <div className="container">
          <div className="tokenomics__bg--phone"></div>
          <div className="tokenomics__bg">
            <div className="tokenomics__cards">
              <OptionCard variant='link' href="https://basescan.org/tx/0xbb45693c8e78f481eaef4fae422791db2b2772ab5c4d6ef86ba0ae403c6650f4" subHeader="88%" text="OF LP ADDED & BURNED" />
              <OptionCard variant='not-link' href="/" subHeader="9.28 Billion" text="Circulating Supply" />
              <OptionCard variant='link' href="https://basescan.org/tx/0xaa367e7b6e30f4f2afa5a687044d7730c99853f6239c4b4f331133bee498e8e1" subHeader="Contract Renounced" />

              <OptionCard variant='link' href="https://basescan.org/token/0x7910737759c35533f1fd6c49adead1869573cdfc?a=0x000000000000000000000000000000000000dead" subHeader="7%" text="BURNED" />
              <OptionCard variant='not-link' href="/" subHeader="0/0" text="TAX" />
              <OptionCard variant='not-link' href="/" subHeader="5%" text="TEAM WALLET" />
            </div>
          </div>
        </div>
      </section>
      <section className="game">
        <div className="container">
          <div className="game__bg">
            <img src={PersonGame} alt="bg" className="game__person" />
            <div className="game__btn-blok">
              <img src={Game} alt="game" className="game__img" />
              <Button text="The Game!" onClick={openModal} />
            </div>
          </div>
        </div>
      </section>
      <section className="swap main-padding">
        <div className="container">
          <div className="swap__wrapper-bg">
            <div className="swap__box">
              <UniswapWidget />
            </div>
          </div>
        </div>
      </section>
      <section className="phases main-padding">
        <div className="container">
          <div className="phases__wrapper">
            <GifSwiper />
            <div className="phases__nav-btns">
              <div className="swiper-button-prev" />
              <div className="swiper-button-next" />
            </div>
          </div>
        </div>
      </section>
      <section className="main-padding">
        <JustifiedGallery />
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <h3 className="footer__text">
              This is definitely not a pyramid scheme. Pyramids are illegal. This is a reverse funnel system.
            </h3>
            <div className="footer__input">
              <Input />
            </div>
            <div className="footer__icons">
              <a href="https://www.dextools.io/app/en/base/pair-explorer/0x1f485a43a402e68997873237a6e7ad98fa5b95b6?t=1714155902539" className="footer__detox" target='_blank' rel="noreferrer">
                <img src={Detox} alt="detox-link" />
              </a>
              <SocialIcon />
            </div>
          </div>
        </div>
      </footer>
      <GameModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  )
}
