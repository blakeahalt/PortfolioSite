import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components'
import "../Icon.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import responsive from "../assets/Responsive-country.png"
import countryFacts from "../assets/country-facts.png"
import weatherFacts from "../assets/weather-fact.png"
import Arrow from '../assets/Arrow.svg';

const Container = styled.div`
display: flex;
justify-content: center;
margin-left: auto;
margin-right: auto;
margin-bottom: 25px;
width: 625px;
height: 300px;
padding: 15px;

@media screen and (max-width: 75em) {
  height: auto;
  margin-bottom: 10vh;
}

@media screen and (max-width: 42em) {

    height: 315px;
    width: 30vw;
}

.swiper{
    width: 100%;
    height: 350px;

    @media screen and (max-width: 42em) {

      margin-top: 0px;
      height: 95%;
      width: 95vw;
  }
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
    width: 4rem;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    right: -100px;

    &:after{
        display: none;
    }

    @media screen and (max-width: 75em) {
    width: 3rem;
    right: -75px;
    }
    @media screen and (max-width: 42em) {

    width: 2rem;
    right: 10px;
    margin-top: 160px;

    }
}
.swiper-button-prev{
    color: ${props => props.theme.text};
    width: 4rem;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    left: -100px;

    &:after{
        display: none;
    }
    @media screen and (max-width: 75em) {
    width: 3rem;
    left: -75px;
  }
  @media screen and (max-width: 42em) {

    width: 2rem;
    left: 10px;
    margin-top: 160px
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

let screen;

  if (window.innerWidth > 1200) {
    screen = (
      <>
        <div className="country-features">
          <h1 className="features-title">Features</h1>
          <div className="icons">
            <div className="icon">
              <img 
                style={{ padding: 5, width:'25vh', height:'25vh', border: '1px solid black',borderRadius: '125px', filter: 'blur(1px)' }} 
                src={responsive} 
                alt="icon1" 
                onMouseEnter={() => slideToIndex(0)}
                onMouseLeave={() => slideToIndex(activeSlideIndex)}
              />
              <div className="icon-title">Responsive Design</div>
              <div>
            </div>
          </div>
          <div className="icon">
              <img 
                style={{ padding: 5, width:'25vh', height:'25vh', border: '1px solid black',borderRadius: '125px', filter: 'blur(1px)' }} 
                src={countryFacts} 
                alt="icon2" 
                onMouseEnter={() => slideToIndex(1)}
                onMouseLeave={() => slideToIndex(activeSlideIndex)}
              />
              <div className="icon-title">Country Facts</div>
              <div>
            </div>
          </div>
          <div className="icon">
          <img 
                style={{ padding: 5, maxWidth:'25vh', height:'25vh', border: '1px solid black',borderRadius: '125px', filter: 'blur(1px)' }} 
                src={weatherFacts} 
                alt="icon4" 
                onMouseEnter={() => slideToIndex(2)}
                onMouseLeave={() => slideToIndex(activeSlideIndex)}
              />
              <div className="icon-title" >3-Day Forecast</div>
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
              <>
              <img 
                style={{marginTop: -35, marginTop:-75, width: '375px', height:'210px', border:'1px solid black', borderRadius: '25px', boxShadow: '5px 7px 15px 7px rgba(0,0,0,0.3)' }} 
                src={responsive} 
                alt="feature 2"
                /> 
                  <div style={{fontSize: 21, position:'absolute', marginTop: '230px', padding: '5px', color: 'rgb(0, 62, 128)'}}>
                  Responsive design adapts to various screen sizes
                </div>
                </>
              </SwiperSlide>
              <SwiperSlide > 
              <img 
                style={{ marginBottom:15, width: 'auto', height:'300px', border:'1px solid black', borderRadius: '25px', boxShadow: '5px 7px 15px 7px rgba(0,0,0,0.3)' }} 
                src={countryFacts} 
                alt="feature 2"
                /> 
                 <div style={{fontSize: 21, flexWrap: 'wrap', maxWidth: '250px', padding: '20px', marginLeft: '0px', marginTop: '-25px', color: 'rgb(0, 62, 128)'}}>
                &#8592; See each country's flag & coat of arms
                </div>  
                <div style={{fontSize: 21, marginLeft: '-265px', marginTop: '125px', color: 'rgb(0, 62, 128)'}}>
                    &#8592; with basic country facts
                </div>
              </SwiperSlide>
              <SwiperSlide > 
              <img 
                style={{marginTop: -35, marginBottom:15, width: 'auto', height:'225px', border:'1px solid black', borderRadius: '25px', boxShadow: '5px 7px 15px 7px rgba(0,0,0,0.3)' }} 
                src={weatherFacts} 
                alt="feature 3"
                /> 
                  <div style={{fontSize: 21, position:'absolute', marginTop: '245px',color: 'rgb(0, 62, 128)'}}>
                  Get a 3-day weather forecast of the capital city
                </div>
              </SwiperSlide>
            </Swiper>
          </Container>
        </div>
      </>
      )
    } else if (window.innerWidth > 665) {
      screen =(
         <>
          <div >
            <h1 style={{ marginTop: '10vh' }} className="features-title">Features</h1>
            <div style={{ marginBottom: '5vh' }} className="icons">
              <div className="icon">
                <img 
                  style={{ padding: 5, width:'20vh', height:'20vh', border: '1px solid black',borderRadius: '125px', filter: 'blur(1px)' }} 
                  src={responsive} 
                  alt="icon1" 
                  onMouseEnter={() => slideToIndex(0)}
                  onMouseLeave={() => slideToIndex(activeSlideIndex)}
                />
                <div className="icon-title">Responsive Design</div>
                <div>
              </div>
            </div>
            <div className="icon">
                <img 
                  style={{ padding: 5, width:'20vh', height:'20vh', border: '1px solid black',borderRadius: '125px', filter: 'blur(1px)' }} 
                  src={countryFacts} 
                  alt="icon2" 
                  onMouseEnter={() => slideToIndex(1)}
                  onMouseLeave={() => slideToIndex(activeSlideIndex)}
                />
                <div className="icon-title">Country Facts</div>
                <div>
              </div>
            </div>
            <div className="icon">
            <img 
                  style={{ padding: 5, maxWidth:'20vh', marginTop: '5vh',height:'20vh', border: '1px solid black',borderRadius: '125px', filter: 'blur(1px)' }} 
                  src={weatherFacts} 
                  alt="icon4" 
                  onMouseEnter={() => slideToIndex(2)}
                  onMouseLeave={() => slideToIndex(activeSlideIndex)}
                />
                <div className="icon-title" >Weather Facts</div>
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
                <>
              <img 
                style={{marginTop: -35, marginTop:-75, width: '375px', height:'210px', border:'1px solid black', borderRadius: '25px', boxShadow: '5px 7px 15px 7px rgba(0,0,0,0.3)' }} 
                src={responsive} 
                alt="feature 2"
                /> 
                  <div style={{fontSize: 21, position:'absolute', marginTop: '230px', padding: '5px', color: 'rgb(0, 62, 128)'}}>
                  Responsive design adapts to various screen sizes
                </div>
                </>
                </SwiperSlide>
                <SwiperSlide > 
                <img 
                  style={{ marginBottom:15, width: 'auto', height:'300px', border:'1px solid black', borderRadius: '25px', boxShadow: '5px 7px 15px 7px rgba(0,0,0,0.3)' }} 
                  src={countryFacts} 
                  alt="feature 2"
                  /> 
                    <div style={{fontSize: 21, flexWrap: 'wrap', maxWidth: '250px', padding: '20px', marginLeft: '0px', marginTop: '-25px', color: 'rgb(0, 62, 128)'}}>
                    &#8592; See each country's flag & coat of arms
                    </div>  
                    <div style={{fontSize: 21, marginLeft: '-265px', marginTop: '125px', color: 'rgb(0, 62, 128)'}}>
                        &#8592; with basic country facts
                    </div>
                </SwiperSlide>
                <SwiperSlide > 
                <img 
                  style={{marginTop: -35, marginBottom:15, width: 'auto', height:'225px', border:'1px solid black', borderRadius: '25px', boxShadow: '5px 7px 15px 7px rgba(0,0,0,0.3)' }} 
                  src={weatherFacts} 
                  alt="feature 3"
                  /> 
                    <div style={{fontSize: 21, position:'absolute', marginTop: '245px',color: 'rgb(0, 62, 128)'}}>
                      Get a 3-day weather forecast of the capital city
                    </div>
                </SwiperSlide>
              </Swiper>
            </Container>
        </div>
      </>
      )
  } else {
  screen = (
    <>
     <div className="country-features">
        <h1 className="features-title">Features</h1>
          <div className="icons">
            <div className="icon">
              <img 
                style={{ padding: 5, width:'125px', height:'125px', border: '1px solid black',borderRadius: '125px', filter: 'blur(1px)' }} 
                src={responsive} 
                alt="icon1" 
                onMouseEnter={() => slideToIndex(0)}
                onMouseLeave={() => slideToIndex(activeSlideIndex)}
              />
              <div className="icon-title">Responsive Design</div>
          </div>
          <div className="icon">
              <img 
                style={{ padding: 5, width:'125px', height:'125px', border: '1px solid black',borderRadius: '125px', filter: 'blur(1px)' }} 
                src={countryFacts} 
                alt="icon2" 
                onMouseEnter={() => slideToIndex(1)}
                onMouseLeave={() => slideToIndex(activeSlideIndex)}
              />
              <div className="icon-title">Country Facts</div>
          </div>
          <div className="icon">
          <img 
                style={{ padding: 5, maxWidth:'125px', height:'125px', border: '1px solid black',borderRadius: '125px', filter: 'blur(1px)' }} 
                src={weatherFacts} 
                alt="icon4" 
                onMouseEnter={() => slideToIndex(2)}
                onMouseLeave={() => slideToIndex(activeSlideIndex)}
              />
              <div className="icon-title" >Weather Facts</div>
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
              <>
              <img 
                style={{marginTop: -35, marginTop:-75, width: '325px', height:'190px', border:'1px solid black', borderRadius: '25px', boxShadow: '5px 7px 15px 7px rgba(0,0,0,0.3)' }} 
                src={responsive} 
                alt="feature 2"
                /> 
                  <div style={{fontSize: 16, position:'absolute', marginTop: '200px', padding: '5px', color: 'rgb(0, 62, 128)'}}>
                  Responsive design adapts to various screen sizes
                </div>
                </>
              </SwiperSlide>
              <SwiperSlide > 
              <img 
                style={{marginLeft: '10px', width: '200px', height:'260px', border:'1px solid black', borderRadius: '25px', boxShadow: '5px 7px 15px 7px rgba(0,0,0,0.3)' }} 
                src={countryFacts} 
                alt="feature 2"
                /> 
                  <div style={{fontSize: 16, flexWrap: 'wrap', maxWidth: '125px', padding: '20px', marginLeft: '-20px', marginTop: '-20px', color: 'rgb(0, 62, 128)'}}>
                    &#8592; See each country's flag & coat of arms
                    </div>  
                    <div style={{fontSize: 16, marginLeft: '-140px', maxWidth: '125px', marginTop: '140px', color: 'rgb(0, 62, 128)'}}>
                        &#8592; with basic country facts
                    </div>
              </SwiperSlide>
              <SwiperSlide > 
              <img 
                style={{marginTop: -35, marginTop: -65, width: '325px', height:'200px', border:'1px solid black', borderRadius: '25px', boxShadow: '5px 7px 15px 7px rgba(0,0,0,0.3)' }} 
                src={weatherFacts} 
                alt="feature 3"
                /> 
                  <div style={{fontSize: 16, position:'absolute', marginTop: '215px',color: 'rgb(0, 62, 128)'}}>
                    Get a 3-day weather forecast of the capital city
                  </div>
              </SwiperSlide>
            </Swiper>
          </Container>
        </div>
      </>
   )
  }

    return (
      <div>{screen}</div>
    );
};

export default Icons;
