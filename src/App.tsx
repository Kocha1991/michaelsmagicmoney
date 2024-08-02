import Navigation from './components/Navigation/Navigation'
import OptionCard from './components/OptionCard/OptionCard'
import Input from './components/Input/Input.jsx'
import Button from './components/Button/Button'
import SocialIcon from './components/SocialIcons/SocialIcons.jsx'
import JustifiedGallery from './components/JustifiedGallery/JustifiedGallery'
import GifSwiper from './components/GifSwiper/GifSwiper'
import GameModal from './components/GameModal/GameModal';
import SwapInfo from './components/SwapInfo/SwapInfo';

//styles
import './index.scss'
import 'swiper/css'
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

// images
import Detox from './image/DEXTools_+white.png'
import { useState } from 'react'
import { ImageEnum } from './types/imagesEnum'

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
            <div className="main__text-block">
              <h1 className='main__title'>MICHAEL SCOTT’S PAPER</h1>
              <div className='main__btns-grup'>
                <Button 
                  variant='secondary' 
                  src={ImageEnum.WalletWight} 
                  alt="wallet-icon" 
                  text="BUY $PAPER" 
                />
                <Button 
                  src={ImageEnum.Play} 
                  alt="play-icon" 
                  onClick={openModal} 
                  text="Play"
                />
              </div>
              <h2 className='main__descr'>
                Welcome to 
                <span className='tokenomics__title--blue'>$PAPER</span>, Making the world a better place, one Toby-free transaction at a time.
              </h2>
            </div>
            <div className='main__btns-grup--phone'>
              <Button 
                variant='secondary' 
                src={ImageEnum.WalletWight} 
                alt="wallet-icon" 
                text="BUY $PAPER" 
              />
              <Button 
                src={ImageEnum.Play} 
                alt="play-icon" 
                onClick={openModal} 
                text="Play"
              />
            </div>
            <img src={ImageEnum.PaperLable} alt="paper-lable" className='main__lable'/>
          </div>
        </div>
      </section>
      <section className="tokenomics main-padding">
        <div className="container">
          <div className='tokenomics__wrapper'>
            <div className='tokenomics__info'>
              <h2 className='tokenomics__title'>
                What is
                <span 
                  className='tokenomics__title tokenomics__title--blue'>
                  $Paper ?
                </span>
              </h2>
              <h3 className='tokenomics__descr'>
                Imagine if Dunder Mifflin had a baby with Bitcoin, and that baby was raised by Michael Scott. That's PAPER. It's the digital currency that makes you feel like you just closed a big sale, got a Dundie, and had a Pretzel Day all at once. With PAPER, you can buy all sorts of cool stuff in 'Threat Level Midnight: The Game,' Weapons, special abilities, and even unlock characters who are almost as awesome as me. It's the only currency that Toby can't touch, and trust me, that makes it priceless. So, get ready to dive into the world of PAPER, where every transaction is a win and every token is a ticket to fun!
              </h3>
              <div className='tokenomics__btns-grup'>
                <Button 
                    variant='secondary' 
                    text="Contract renouced" 
                  />
                  <Button 
                    src={ImageEnum.Play} 
                    alt="play-icon" 
                    onClick={openModal} 
                    text="Play"
                  />
              </div>
            </div>
            <img src={ImageEnum.TokenomicsImg} alt="img" className='tokenomics__img'/>
          </div>
          <div className="tokenomics__cards">
            <OptionCard 
              variant='link' 
              href="https://basescan.org/tx/0xbb45693c8e78f481eaef4fae422791db2b2772ab5c4d6ef86ba0ae403c6650f4" 
              subHeader="88%" 
              text="OF LP ADDED & BURNED" 
            />
            <OptionCard 
              variant='not-link' 
              href="/" 
              subHeader="9.28 Billion" 
              text="Circulating Supply" 
            />
            <OptionCard 
              variant='link' 
              href="https://basescan.org/token/0x7910737759c35533f1fd6c49adead1869573cdfc?a=0x000000000000000000000000000000000000dead" subHeader="7%" 
              text="BURNED" 
            />
            <OptionCard 
              variant='not-link' 
              href="/" 
              subHeader="0/0" 
              text="TAX" 
            />
            <OptionCard 
              variant='not-link' 
              href="/" 
              subHeader="5%" 
              text="TEAM WALLET" 
            />
          </div>
        </div>
      </section>
      <section className="game main-padding">
        <div className="container">
          <div className='game__grid'>
            <img 
              src={ImageEnum.GameBannerTheGame} 
              alt="game-banner" 
              className='game__banner-game'
            />
            <img 
              src={ImageEnum.GameBannerPeople} 
              alt="banner" 
              className='game__banner-people'
            />
            <img 
              src={ImageEnum.GameGif} 
              alt="game-gif" 
              className='game__gif'
            />
            <div className='game__descr-block'>
              <h2 className='game__title'>Threat level midnight</h2>
              <h3 className='game__descr'>
                Step into the shoes of secret agent Michael Scott in Threat Level Midnight: The Game! Navigate through high-stakes missions, outsmart villains, and save the world from total destruction. Are you ready to accept the challenge and become the ultimate hero? The fate of the world depends on you!
              </h3>
              <Button 
                src={ImageEnum.Play} 
                alt="play-icon" 
                onClick={openModal} 
                text="Play"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="swap" id='swap'>
        <div className="container">
            <div className="swap__box">
              <SwapInfo/>
              <iframe
                src="https://app.uniswap.org/#/swap?exactField=input&exactAmount=10&inputCurrency=0x6b175474e89094c44da98b954eedeac495271d0f"
                height="640px"
                width="100%"
                title="Uniswap Swap Widget"
              />
            </div>
        </div>
      </section>
      <section className="phases main-padding">
        <div className="container">
          <h2 className='tokenomics__title phases__title'>
            Roadmap
            <span 
              className='tokenomics__title tokenomics__title--blue'>
              $Paper ?
            </span>
          </h2>
          <div className="phases__wrapper">
            <GifSwiper />
            <div className="phases__nav-btns">
              <div className="swiper-button-prev" />
              <div className="swiper-button-next" />
            </div>
          </div>
        </div>
      </section>
      <section className='bringing'>
        <div className="container">
          <h2 className='bringing__title tokenomics__title'>
            <span 
              className='tokenomics__title tokenomics__title--blue'>
              Bringing Humor
            </span>
            to Your Crypto Journey
          </h2>
          <h3 className='bringing__descr'>
            Dive into the PAPER Meme Zone! That's what she said!
          </h3>
          <Button 
            variant='secondary' 
            src={ImageEnum.WalletWight} 
            alt="wallet-icon" 
            text="BUY $PAPER" 
          />
        </div>
        <div className='bringing__bg'></div>
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
