import React, { useState } from "react";
import styled from 'styled-components'
import "../Icons/Icon.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import Arrow from '../assets/Arrow.svg';
import quotes from "../assets/stock-quotes.png"
import transactions from "../assets/stock-transactions.png"
import buysell from "../assets/stock-buysell.png"

const Container = styled.div`
display: flex;
justify-content: center;
margin-left: auto;
margin-right: auto;
margin-bottom: 25px;
width: 625px;
height: 300px;
padding: 15px;

@media (max-width: 70em){
    height: 60vh;
}

@media (max-width: 64em){
    height: 50vh;
    width: 30vw;
}
@media (max-width: 48em){
    height: 50vh;
    width: 40vw;
}
@media (max-width: 30em){
    height: 45vh;
    width: 60vw;
}

.swiper{
    width: 100%;
    height: 350px;
}
.swiper-pagination{
  text-align: right;
  opacity: 0.5;
  margin-left: -10px;
}
.swiper-slide{
    background-color: rgb(248,243,233);
    border: 1px solid rgb(0,0,0,0.3);
    border-radius: 20px;
    box-shadow: 5px 7px 15px 7px rgba(0,0,0,0.1);
  
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        display: block;
        width: 100%;
        height: auto;
        object-fit: cover;
    }
}

.swiper-button-next{
    color: ${props => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;
    right: -100px;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
        display: none;
    }

    @media (max-width: 64em){
    width: 3rem;

    }
    @media (max-width: 30em){
    width: 2rem;

    }
}
.swiper-button-prev{
    color: ${props => props.theme.text};
    left: -100px;
    top: 60%;
    width: 4rem;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
        display: none;
    }
    @media (max-width: 64em){
    width: 3rem;

    }
    @media (max-width: 30em){
    width: 2rem;

    }
}
`

const Icons = () => {
  const [visibility1, setVisibility1] = useState(false)
  const [visibility2, setVisibility2] = useState(false)
  const [visibility3, setVisibility3] = useState(false)
  const [visibility4, setVisibility4] = useState(true)
  const [currentVisibility, setCurrentVisibility] = useState('visibility4')
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [swiperInstance, setSwiperInstance] = useState(null);

const handleSlideChange = () => {
  setActiveSlideIndex(swiperInstance?.activeIndex || 0);
};

const slideToIndex = (index) => {
  if (swiperInstance) {
    swiperInstance.slideTo(index);
    swiperInstance.autoplay.start();
  }
};

return (
  <div className="stock-features">
    <h1 className="features-title">Features</h1>
    <div className="icons">
      <div className="icon">
        <img 
          style={{ padding: 5, width:'200px', height:'150px', border: '1px solid black',borderRadius: '125px', filter: 'blur(1px)' }} 
          src={quotes} 
          alt="icon1" 
          onMouseEnter={() => slideToIndex(0)}
          onMouseLeave={() => slideToIndex(activeSlideIndex)}
        />
        <div className="icon-title">Quotes Archive</div>
        <div>
      </div>
    </div>
    <div className="icon">
        <img 
          style={{ padding: 5, width:'200px', height:'150px', border: '1px solid black',borderRadius: '125px', filter: 'blur(1px)' }} 
          src={transactions} 
          alt="icon2" 
          onMouseEnter={() => slideToIndex(1)}
          onMouseLeave={() => slideToIndex(activeSlideIndex)}
        />
        <div className="icon-title">Transactions</div>
        <div>
      </div>
    </div>
    <div className="icon">
    <img 
          style={{ padding: 5, maxWidth:'200px', height:'150px', border: '1px solid black',borderRadius: '125px', filter: 'blur(1px)' }} 
          src={buysell} 
          alt="icon4" 
          onMouseEnter={() => slideToIndex(2)}
          onMouseLeave={() => slideToIndex(activeSlideIndex)}
        />
        <div className="icon-title" >Portfolio</div>
    </div>
    </div>
    <Container>
      <Swiper
        effect="cards"
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        pagination={{
          className: 'paginationStyle',
          clickable: true,
          type: 'fraction',
          paginationClickable: true,
        }}
        scrollbar={{ draggable: true }}
        modules={[EffectCards,Pagination, Navigation, Autoplay]}
        navigation={true}
        grabCursor={true}
        loop={false}
        centeredSlides={true}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>  
        <img 
          style={{margin: '30px', marginTop: '20px', width: '225px', height:'auto', border:'1px solid black', borderRadius: '25px', boxShadow: '5px 7px 15px 7px rgba(0,0,0,0.3)'}} 
          src={quotes} 
          alt="feature 1" />
          <div style={{fontSize: 21, marginLeft: '0px', color: 'rgb(0, 62, 128)'}}>
            Store your entire search history
          </div> 
        </SwiperSlide>
        <SwiperSlide > 
        <>
        <img 
          style={{marginTop: -35, marginBottom:15, width: 'auto', height:'225px', border:'1px solid black', borderRadius: '25px', boxShadow: '5px 7px 15px 7px rgba(0,0,0,0.3)' }} 
          src={transactions} 
          alt="feature 2"
          /> 
            <div style={{fontSize: 21, position:'absolute', marginTop: '245px',color: 'rgb(0, 62, 128)'}}>
             See when you've bought, sold, or added cash.
          </div>
          </>
        </SwiperSlide>
        <SwiperSlide > 
        <img 
          style={{marginTop: -35, marginBottom:15, width: 'auto', height:'225px', border:'1px solid black', borderRadius: '25px', boxShadow: '5px 7px 15px 7px rgba(0,0,0,0.3)' }} 
          src={buysell} 
          alt="feature 3"
          /> 
            <div style={{fontSize: 21, position:'absolute', marginTop: '245px',color: 'rgb(0, 62, 128)'}}>
              Buy and sell stocks straight from your portfolio.
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  </div>
);

};

export default Icons;
