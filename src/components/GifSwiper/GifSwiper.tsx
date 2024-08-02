import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation as SwapperNavigation, A11y } from 'swiper/modules'
import Card from '../Card/Card';

// //import gifs
import Gif1 from '../../image/GIF/send+it+lol.gif'
import Gif2 from '../../image/GIF/PAPER+vs+jeets.gif'
import Gif4 from '../../image/GIF/PAPER+Marketing.gif'
import Gif5 from '../../image/GIF/PAPER+Holders.gif'
import Gif6 from '../../image/GIF/paper+flash.gif'
import Gif7 from '../../image/GIF/missing+out.jpg'

const GifSwiper = () => {
  const swiperRef = useRef(null)

  return (
    <Swiper
      ref={swiperRef}
      modules={[SwapperNavigation, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
        830: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: 4,
        },
      }}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <Card
          numb={1}
          phase="Phase 1"
          title="The Brainstorming"
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
          phase="Phase 2"
          title="The Launchening"
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
          phase="Phase 3"
          title="To the Moon"
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
          phase="Phase 4"
          title="The Diversificationing"
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
          phase="Phase 5"
          title="Growth and Accessibility"
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
          phase="Phase 6"
          title="Sustained Development and Long-Term Vision"
          descr={`
            - Keep the updates coming and the community in the loop.
            - Stay open to feedback for continuous improvement.
            - Keep adapting and planning for the future – we're in it for the long haul!
          `}
          gif={Gif5}
        />
      </SwiperSlide>
    </Swiper>
  )
};

export default GifSwiper;
