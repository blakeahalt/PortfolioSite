import React, {useState, useEffect} from 'react'
import WebFont from 'webfontloader';
import styled from 'styled-components'
import "../Icon.css";

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
margin-top: 3vh;
margin-bottom: 5vh;
width: 50vw;
height: auto;
padding: 3vh;

@media screen and (max-width: 75em) {
  height: auto;
  margin-bottom: 5vh;
  width: 60vw;
}

 @media screen and (max-width: 42em) {
  height: 315px;
  width: 30vw;
  margin-top: -3vh;
  margin-bottom: 7vh;
}

.swiper{
    width: 100%;
    height: 350px;

    @media screen and (max-width: 75em) {
  }
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

useEffect(() => {
  WebFont.load({
    google: {
      families: ['Poppins']
    }
  });
 }, []);

  let screen;

  if (window.innerWidth > 1200) {
    screen = (
      <div className='font-load' >
        <h1 className="features-title">Features</h1>
          <div className="icons">
            <div className="icon">
              <img 
                style={{ padding: 5, width:'20vh', height:'20vh', border: '1px solid black',borderRadius: '125px', filter: 'blur(1px)' }} 
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
                style={{ padding: 5, width:'20vh', height:'20vh', border: '1px solid black',borderRadius: '125px', filter: 'blur(1px)' }} 
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
                style={{ padding: 5, maxWidth:'20vh', height:'20vh', border: '1px solid black',borderRadius: '125px', filter: 'blur(1px)' }} 
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
                <div style={{ textAlign: 'center', fontSize: 21, marginLeft: '0px', color: 'rgb(0, 62, 128)'}}>
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
                  <div style={{ textAlign: 'center', fontSize: 21, position:'absolute', marginTop: '245px',color: 'rgb(0, 62, 128)'}}>
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
                  <div style={{ textAlign: 'center', fontSize: 21, position:'absolute', marginTop: '245px',color: 'rgb(0, 62, 128)'}}>
                    Buy and sell stocks straight from your portfolio.
                </div>
              </SwiperSlide>
            </Swiper>
          </Container>
      </div>
      )
    } else if (window.innerWidth > 665) {
      screen =(
        <div className='font-load' >
            <h1 className="features-title">Features</h1>
            <div className="icons">
              <div className="icon">
                <img 
                  style={{ padding: 5, width:'14vh', height:'14vh', border: '1px solid black',borderRadius: '125px', filter: 'blur(1px)' }} 
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
                  style={{ padding: 5, width:'14vh', height:'14vh', border: '1px solid black',borderRadius: '125px', filter: 'blur(1px)' }} 
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
                  style={{ padding: 5, maxWidth:'14vh', height:'14vh', border: '1px solid black',borderRadius: '125px', filter: 'blur(1px)' }} 
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
                  <div style={{fontSize: '1.4em', marginLeft: '0px', color: 'rgb(0, 62, 128)'}}>
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
                    <div style={{  textAlign: 'center', fontSize: '1.4em', position:'absolute', marginTop: '255px',color: 'rgb(0, 62, 128)'}}>
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
                    <div style={{ textAlign: 'center', fontSize: '1.4em', position:'absolute', marginTop: '255px',color: 'rgb(0, 62, 128)'}}>
                      Buy and sell stocks straight from your portfolio.
                  </div>
                </SwiperSlide>
              </Swiper>
            </Container>
      </div>
      )
  } else {
  screen = (
    <div className='font-load' >
        <h1 className="features-title">Features</h1>
          <div className="icons">
            <div className="icon">
              <img 
                style={{ padding: 5, width:'15vh', height:'15vh', border: '1px solid black',borderRadius: '125px', filter: 'blur(1px)' }} 
                src={quotes} 
                alt="icon1" 
                onMouseEnter={() => slideToIndex(0)}
                onMouseLeave={() => slideToIndex(activeSlideIndex)}
              />
              <div className="icon-title">Quotes Archive</div>
          </div>
          <div className="icon">
              <img 
                style={{ padding: 5, width:'15vh', height:'15vh', border: '1px solid black',borderRadius: '125px', filter: 'blur(1px)' }} 
                src={transactions} 
                alt="icon2" 
                onMouseEnter={() => slideToIndex(1)}
                onMouseLeave={() => slideToIndex(activeSlideIndex)}
              />
              <div className="icon-title">Transactions</div>
          </div>
          <div className="icon">
          <img 
                style={{ padding: 5, width:'15vh', height:'15vh', border: '1px solid black',borderRadius: '125px', filter: 'blur(1px)' }} 
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
                style={{margin: '10px', marginTop: '10px', width: '200px', height:'auto', border:'1px solid black', borderRadius: '25px', boxShadow: '5px 7px 15px 7px rgba(0,0,0,0.3)'}} 
                src={quotes} 
                alt="feature 1" />
                <div style={{fontSize: '.9em', marginLeft: '10px', color: 'rgb(0, 62, 128)'}}>
                  Store your entire search history
                </div> 
              </SwiperSlide>
              <SwiperSlide > 
              <>
              <img 
                style={{marginTop: -35, marginTop:-75, width: '325px', height:'190px', border:'1px solid black', borderRadius: '25px', boxShadow: '5px 7px 15px 7px rgba(0,0,0,0.3)' }} 
                src={transactions} 
                alt="feature 2"
                /> 
                  <div style={{fontSize: '.9em', position:'absolute', marginTop: '200px',color: 'rgb(0, 62, 128)'}}>
                  See when you've bought, sold, or added cash.
                </div>
                </>
              </SwiperSlide>
              <SwiperSlide > 
              <img 
                style={{marginTop: -35, marginTop: -65, width: '325px', height:'200px', border:'1px solid black', borderRadius: '25px', boxShadow: '5px 7px 15px 7px rgba(0,0,0,0.3)' }} 
                src={buysell} 
                alt="feature 3"
                /> 
                  <div style={{fontSize: '.9em', position:'absolute', marginTop: '215px',color: 'rgb(0, 62, 128)'}}>
                    Buy and sell stocks straight from your portfolio.
                </div>
              </SwiperSlide>
            </Swiper>
          </Container>
        </div>
   )
  }

    return (
      <div>{screen}</div>
    );
};

export default Icons;
