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
        780: {
          slidesPerView: 2,
        },
        1060: {
          slidesPerView: 3,
        },
        1400: {
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
          title="Foundation and Launch"
          descr={`
              - Launch a top–notch, user–friendly website for all things $PAPER.
              - Integrate a swap feature for easy $PAPER and crypto trades.
          `}
          gif={Gif7}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          numb={2}
          phase="Phase 2"
          title="Marketing & Game Development"
          descr={`
            - Start crafting the “Threat Level Midnight Game – think "Office Olympics" but with $PAPER.
            - Kick off a massive marketing blitz to put $PAPER on the map.
          `}
          gif={Gif1}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          numb={3}
          phase="Phase 3"
          title="Enhanced Game Development"
          descr={`
            - Introduce companions
            - Add exciting new guns
            - Integrate wallet functionality
            - Design epic boss fights
          `}
          gif={Gif2}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          numb={4}
          phase="Phase 4"
          title="Branding and Merchandise"
          descr={`
            - Launch a $PAPER merch line – because who doesn't want that?
            - Keep the game fresh with new expansions.
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
