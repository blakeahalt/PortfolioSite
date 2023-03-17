import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";



import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";



import Dizzy from '../assets/portraits/Dizzy_Done.png'
import MilesDavis from '../assets/portraits/MilesDavis.png'
import Thelonius from '../assets/portraits/Thelonius.png'
import Mingus from '../assets/portraits/Mingus.png'
import MilesDavis from '../assets/portraits/MilesDavis.png'
import Thelonius from '../assets/portraits/Thelonius.png'
import Mingus from '../assets/portraits/Mingus.png'
import SaganTyson from '../assets/portraits/Sagan_tyson.png'
import Ajumma from '../assets/portraits/Ajumma.png'
import Ajussi from '../assets/portraits/Ajussi.png'
import Ajumma from '../assets/portraits/Ajumma.png'
import Ajussi from '../assets/portraits/Ajussi.png'

import Arrow from '../assets/Arrow.svg';

const Container = styled.div`
display: flex;
padding: 1vh;
padding: 1vh;
align-items: center;
width: auto;
width: auto;
height: 100%;
z-index: 1;
margin: 2vh;
margin: 2vh;

@media screen and (max-width: 75em) {
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
        margin-top: 5vh;
    }
}

.swiper-slide{
    background-color:  rgb(251,249,236);
    background-color:  rgb(251,249,236);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 42em) {
        height: 300px
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
        <SwiperSlide>  <img width={500} height={400}  src={Dizzy} alt="pic1" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={MilesDavis} alt="pic2" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={Thelonius} alt="pic3" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={Mingus} alt="pic4" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={Ajumma} alt="pic5" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={Ajussi} alt="pic6" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={SaganTyson} alt="pic7" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={MilesDavis} alt="pic2" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={Thelonius} alt="pic3" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={Mingus} alt="pic4" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={Ajumma} alt="pic5" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={Ajussi} alt="pic6" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src={SaganTyson} alt="pic7" />   </SwiperSlide>

      </Swiper>
    </Container>
  )
}

export default Carousel