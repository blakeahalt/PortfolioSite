import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import Human from "../assets/Art/HumanHemi.jpg"
import Biggins from "../assets/Art/Biggins.png"
import Chrysanthemum from "../assets/Art/Chrysanthemum.jpg"
import Hydrangea from "../assets/Art/Hydrangea.jpg"
import Korea from "../assets/Art/Korea.jpg"
import NorthAmerica from "../assets/Art/NorthAmerica.jpg"
import RoseOfSharon from "../assets/Art/RoseOfSharon.jpg"
import Tulips from "../assets/Art/Tulips.jpg"
import GlobeThistle from "../assets/Art/GlobeThistle.png"
import BlackEyedSusan from "../assets/Art/BlackEyedSusan.png"
import Misc1 from "../assets/Art/Misc1.png"
import Misc2 from "../assets/Art/Misc2.png"
import Neon from "../assets/Art/NeonSpiro.png"

import Arrow from '../assets/Arrow.svg';


const Container = styled.div`
display: flex;
padding: 1vh;
align-items: center;
width: auto;
height: 100%;
z-index: -1;

@media screen and (max-width: 75em) {
    display: flex;
    justify-content: center;
    margin-top: 3vh;
}

@media screen and (max-width: 42em) {
    justify-content: center;
    margin-bottom: 5vh;
}

.swiper{
    width: 35rem;
    height: 100%;
    
    @media screen and (max-width: 75em) {
        width: 25rem;
        height: auto;
        position: relative;
    }
    
    @media screen and (max-width: 42em) {
        width: 20rem;
        height: auto;
    }
    @media screen and (max-width: 25em) {
        width: 100%;
        height: auto;
        margin-top: 3vh;
        z-index: 0
    }
}

.swiper-slide{
    background-color:  rgb(251,249,236);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 42em) {
        height: 300px
        margin-top: -25px;
    }

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
    left: 0;
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

const Carousel = () => {
  return (
    <Container>
        <Swiper
        autoplay={{
            delay:2000,
            disableOnInteraction:false,
        }}
        pagination={{
            type:'fraction',
        }}
        scrollbar={{
            draggable:true
        }}
        modules={[EffectCards,Pagination, Navigation, Autoplay]}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        
        className="mySwiper"
      >
        <SwiperSlide>  <img width={500} height={400}  src={Human} alt="Mash1" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={Biggins} alt="Biggins" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={Korea} alt="Korea" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={Chrysanthemum} alt="Chrysanthemum" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={Hydrangea} alt="Hydrangea" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={Tulips} alt="Tulips" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={Misc2} alt="Misc2" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={Neon} alt="Neon" />   </SwiperSlide>

      </Swiper>
    </Container>
  )
}

export default Carousel

