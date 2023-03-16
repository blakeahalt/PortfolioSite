import React, { useState, useEffect } from 'react'
import WebFont from 'webfontloader';
import ImageGallery from 'react-image-gallery'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styled from 'styled-components';
import Nav from './NavBar'
import Footer from './Footer'


import Dizzy from '../assets/portraits/Dizzy_Done.png'
import MilesDavis from '../assets/portraits/MilesDavis.png'
import Thelonius from '../assets/portraits/Thelonius.png'
import Mingus from '../assets/portraits/Mingus.png'
import SaganTyson from '../assets/portraits/Sagan_tyson.png'
import Ajumma from '../assets/portraits/Ajumma.png'
import AjummaBase from '../assets/portraits/AjummaBase.png'
import Ajussi from '../assets/portraits/Ajussi.png'
import AjussiBase from '../assets/portraits/AjussiBase.png'
import Glass1 from '../assets/portraits/Glass1.pdf'

const Section = styled.section`
display: flex;
overflow: visible;
justify-content: center;
box-shadow: 5px 7px 15px 7px rgba(0,0,0,0.3)
background-color: rgb(221,208,195);
margin-top: 15px;
z-index: 0;


@media screen and (max-width: 75em) {
  justify-content: center;
  flex-wrap: wrap;
}

@media screen and (max-width: 42em) {
  justify-content: center;
  height: auto;
}
`

const Container = styled.div`
display: flex;
flex-wrap: nowrap;
justify-content: center;
padding: 20px;
padding-top: 75px;
margin-bottom: 50px;
width: 2500px;
height: auto;
z-index: 0;

box-shadow: 5px 7px 15px 7px rgba(0,0,0,0.3);
background-color: rgb(251,249,236,0.6);
border: 1px solid rgb(0,0,0,0.3);

 
@media screen and (max-width: 75em) {
  display: flex;
  padding: 10px;
  justify-content: center;
  flex-wrap: wrap;
  height: auto;
}

@media screen and (max-width: 42em) {
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height auto;
  text-align: center;
}
`

const Box = styled.div`
width: 50%;
height: 100%;
min-height: 60vh;
display: flex;
flex-direction: column;
justify-content: center;


@media screen and (max-width: 75em) {
  width: 70vw;
  height: 600px;
  display: flex;
  margin: 50px;
  flex-direction: column;
  justify-content: center;
  margin-top: 225px;
}
@media screen and (max-width: 42em) {
  margin-top: -100px;
  margin-bottom: 50px;
  width: 100%;
  font-size: 0.8em
}
`

const ContainerTitle = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 3em;
  align-content: center;
  color: rgb(0, 62, 128);
`

const Item = styled.div`
position: relative;
display: flex;
flex-basis: 50%
padding: 1rem .7rem 15rem .7rem;
color: ${props => props.theme.body};
margin: 3rem 1.5rem;
flex-wrap: wrap;
justify-content: center;
width: 500px;
height: auto;
backdrop-filter: blur(4px);
margin: 10px;
max-height: auto;

border: 1px solid rgb(0,0,0,0.3);
border-radius: 20px;
box-shadow: 5px 5px 12px 5px rgba(0,0,0,0.3);
background-color: rgb(204,145,29,0.1);



@media screen and (max-width: 75em) {
  max-width: 350px;
  display: flex ;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  margin: 10px;
}

@media screen and (max-width: 42em) {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: auto;
  }
`

const ImageContainer = styled.div`
width: 100%;
height: 460px;
box-shadow: 7px 7px 15px -3px rgba(0,0,0,0.3);
background-color: rgb(255,255,255, 0.5);
border: 1px solid rgb(0,0,0,0.3);
margin: 10px;
margin-bottom: -2px;
padding: .5rem;
border-radius: 20px;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;

img{
  justify-content: center;
  width: auto;
  height: auto;
  transition: all 0.3s ease;
  display: block;
  margin: 0 auto;
  border-radius: 25px;
}

// &:hover{
//   img{
//     transform: scale(1.25);
//     position: relative;
//     cursor: pointer;
//   }
// }

@media screen and (max-width: 75em) {
  margin: 7px;
  padding: 10px;
  height: 315px;
}

@media screen and (max-width: 42em) {
  margin: 7px;
  width: 300px;
  height: 310px;
}
`


const Name = styled.h2`
font-size: 1.3em;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
color: rgb(0, 62, 128);

@media screen and (max-width: 75em) {
  padding-top: 15px;
  font-size: 1.2em;
  margin: 5px;
  width: 300px;
}
@media screen and (max-width: 42em) {
  font-size: 1.1em;
}

`
const Description = styled.p`
  font-size: 1em;
  text-align: center;
  display: flex;
  justify-content: center;
  color: rgb(0, 62, 128);
  margin-top: -1vh;


@media screen and (max-width: 75em) {
  font-size: 1.1em;
  display: flex ;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  margin-top: 0px;
}
@media screen and (max-width: 42em) {
  display: flex ;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  padding-left: 1vh;
  padding-right: 1vh;
  font-size: 1em;
}
`
const Description2 = styled.p`
  font-size: 1em;
  text-align: center;
  display: flex;
  justify-content: center;
  color: rgb(0, 62, 128);
  margin-top: -15px;
  opacity: 0.7;


@media screen and (max-width: 75em) {
  display: flex ;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  margin: 5px;
}
@media screen and (max-width: 42em) {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  margin: 17px;
  height: 1em;
  margin-top:-10px;
  margin-bottom:10px;
}
`

const SkillsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
max-width: auto;
margin-top: 10px;

`

const Skills = styled.h2`
font-size: .8em;
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
background-color: rgb(230,230,230, 0.5);
color: rgb(0, 62, 128);
font-weight:400;
border: 1px solid rgb(0, 62, 128);
border-radius: 25px;
padding: 6px;
margin: 2px;

@media screen and (max-width: 75em) {
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(0,0,0,0.3);  border-radius: 25px;
  width: auto;
  margin: 2px;
}
@media screen and (max-width: 42em) {
  
  border: 1px solid rgb(0,0,0,0.3);  border-radius: 25px;
}
`
const MemberComponent = ({ name='', desc='', desc2='', images}) => {

    const [isFullScreen, setIsFullScreen] = useState(false);

    const handleFullScreen = (e) => {
      const imageElement = e.target;
      if (imageElement.requestFullscreen && !imageElement.classList.contains('slick-next') || !imageElement.classList.contains('slick-prev') ) {
        imageElement.requestFullscreen();
        setIsFullScreen(true);
        document.addEventListener("fullscreenchange", handleFullScreenChange);
      }
      e.preventDefault();
    };

    const handleFullScreenChange = () => {
      if (document.fullscreenElement === null) {
        setIsFullScreen(false);
        document.removeEventListener("fullscreenchange", handleFullScreenChange);
      }
    };
    
    const handleExitFullScreen = () => {
      if (isFullScreen) {
        document.exitFullscreen();
      }
    };
    
      const settings = {
        dots: true,
        infinite: false,     
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  
      return (
        <Item>
          <ImageContainer >
              {images.length === 1 ? (
            <a onClick={isFullScreen ? handleExitFullScreen : handleFullScreen}>
                  <img src={images[0]} alt={name} className="ImageContainerSize" />
                  </a>
              ) : (
                <Slider className="SliderSettings" {...settings}>
                  {images.map((image) => (
                        <a onClick={isFullScreen ? handleExitFullScreen : handleFullScreen}>
                    <div key={image}>
                          <img src={image} alt={name} className="SliderContainerSize" />
                      </div>
                    </a>
                  ))}
                </Slider>
              )}

          </ImageContainer>
          <div className="portrait-name-desc-container">
            <Name>{name}</Name>
            <Description>{desc}</Description>
            <Description2>{desc2}</Description2>
          </div>
        </Item>
      );
    };
    

const ProjectCards = () => {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins']
      }
    });
   }, []);

  return (
    <div className='font-load'>
    <Nav />
    <Section >
      <Container>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom:'25px' }}>
          <MemberComponent images={[MilesDavis]} name="Miles Davis" desc="Mixed Media: Pencil on Paper, Digitally Edited."/>
          <MemberComponent images={[Thelonius]} name="Thelonius Monk" desc="Mixed Media: Pencil on Paper, Digitally Edited."/>
          <MemberComponent images={[Mingus]} name="Charles Mingus" desc="Mixed Media: Pencil on Paper, Digitally Edited."/>
          <MemberComponent images={[Dizzy]} name="Dizzy Gillespie" desc="Mixed Media: Pencil on Paper, Digitally Edited."/>
          <MemberComponent images={[Ajumma, AjummaBase]} name="Ajumma: Korean woman" desc="Mixed Media: Colored pencil, pencil on paper, and Digitally Edited"/>
          <MemberComponent images={[Ajussi, AjussiBase]} name="Ajussi: Korean man" desc="Mixed Media: Colored pencil, pencil on paper, and Digitally Edited"/>
          <MemberComponent style={{fontSize: '0.7em'}} images={[SaganTyson]} name="Cosmic Web: Seed of Life, Flower of Life, Metatron's Cube" desc="Mixed Media: Colored pencil, pencil on paper, and Digitally Edited"/>
          {/* <MemberComponent img={Glass1} name="Glass Head 1" desc="pencil on paper"/> */}
        </div>
      </Container>
    </Section>
    <Footer/>
    </div>
  );
};

export default ProjectCards;
