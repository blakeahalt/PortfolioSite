import React, { useEffect, useState } from 'react'
import '../App2.css';
import { Parallax } from "react-parallax";
import styled from 'styled-components';
import Projects from './ProjectCards.js'
import Nav from './NavBar'
import Footer from './Footer'
import Resume from './Resume.js'
import Button from './Button'

import { Bounce, Flip, Slide, AttentionSeeker, Fade, Hinge, JackInTheBox, Reveal, Roll, Rotate, Zoom } from 'react-awesome-reveal';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import ResumePic from "../assets/ResumePic.png";
import devImg from "../assets/devImg.png"
import StandArt from "../assets/Stand_Art.jpg"
import StandArt2 from "../assets/Stand_Art2.jpg"
import StandArt3 from "../assets/Stand_Art3.jpg"
import blogPic1 from "../assets/blogPic1.jpg"
import Arrow from '../assets/Arrow.svg';
import nftImg from '../assets/nft-background.png'
import stockImg from '../assets/stock-background.png'
import countryImg from '../assets/country-background-home.png'
import phoneImg from '../assets/phone-background-home.png'

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 100vw;
  height: 75vh; 
  padding: 5px;
  align-items: center;
  
  .swiper {
    align-items: center;
    width: 90%;
    height: 90%;
    display: flex;
  }

  .swiper-pagination {
    text-align: right;
    opacity: 0.5;
    margin-left: -10px;
    font-size: 1.2em;
    margin-bottom: -5vh;
  }

  .swiper-slide {
    background-color: rgb(217, 194, 165);
    border: 1px solid rgb(0, 0, 0, 0.3);
    border-radius: 25px;
    box-shadow: 5px 7px 15px 7px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  .swiper-button-next {
    color: ${(props) => props.theme.text};
    right: 0;
    width: clamp(5vw, 4rem, 8rem); /* Use clamp to limit the width based on viewport */
    top: 60%;
    right: clamp(-25vw, -20vw, -10vw); /* Use clamp to limit the position based on viewport */
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after {
      display: none;
    }

    @media (max-width: 75em) {
      width: clamp(3vw, 3rem, 6rem); /* Use clamp to limit the width based on viewport */
      right: clamp(-20vw, -15vw, -5vw); /* Use clamp to limit the position based on viewport */
    }
    @media (max-width: 42em) {
      width: clamp(2vw, 2rem, 4rem); /* Use clamp to limit the width based on viewport */
      right: clamp(-15vw, -10vw, 0); /* Use clamp to limit the position based on viewport */
    }
  }

  .swiper-button-prev {
    color: ${(props) => props.theme.text};
    left: clamp(-25vw, -20vw, -10vw); /* Use clamp to limit the position based on viewport */
    top: 60%;
    width: clamp(5vw, 4rem, 8rem); /* Use clamp to limit the width based on viewport */
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after {
      display: none;
    }

    @media (max-width: 75em) {
      width: clamp(3vw, 3rem, 6rem); /* Use clamp to limit the width based on viewport */
      left: clamp(-20vw, -15vw, -5vw); /* Use clamp to limit the position based on viewport */
    }
    @media (max-width: 42em) {
      width: clamp(2vw, 2rem, 4rem)
    }
  }
  `

const ContainerTitle = styled.div`
  margin-top: 3vh;
  margin-bottom: 3vh;
  font-size: 3em;
  justify-content: center;
  text-align: center;
  align-content: center;
  color: rgb(0, 62, 128);
`
const Item = styled.div`
display: flex;
color: ${props => props.theme.body};
flex-wrap: wrap;
justify-content: center;
backdrop-filter: blur(4px);
border: 1px solid rgba(0,0,0,0.3);
border-radius: 20px;
box-shadow: 5px 5px 12px 5px rgba(0,0,0,0.3);
background-color: rgb(217,194,165);

@media screen and (max-width: 75em) {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 95%;
  margin: 1vh;
  height: auto;
  }

@media screen and (max-width: 42em) {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 95%;
  margin: 1vh;
  height: 65vh;
  }
`

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 7px 7px 15px -3px rgba(0,0,0,0.3);
  background-color: rgb(255,255,255);
  border: 1px solid rgba(0,0,0,0.3);
  margin-bottom: -2px;
  border-radius: 25px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  img{
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease-in-out;
    border-radius: 25px;
    object-fit: contain;
  }

  @media screen and (max-width: 75em) {
    margin: .5vh;
    padding: 0vh;
    height: 100%;

  }

  @media screen and (max-width: 42em) {
    width: 95%;
    height: 29vh;
    margin-top: 0vh;
    margin-bottom: 1vh;
  }
`;


const Name = styled.h2`
  font-size: clamp(1.2em, 5vw, 1.5em);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  color: rgb(0, 62, 128);

  @media screen and (max-width: 75em) {
    margin: 1vh;
    width: 300px;
  }
  @media screen and (max-width: 42em) {
    width: auto;
    margin-top: 2vh;
  }
`;

const Description = styled.p`
  font-size: 2vw
  text-align: center;
  display: flex;
  justify-content: center;
  color: rgb(0, 62, 128);
  margin-top: -20px;
  
  @media screen and (max-width: 75em) {
    font-size: 1.2vw
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: auto;
    margin: 5px;
    padding: 5px;
    height: 70px;
  }
  @media screen and (max-width: 42em) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: auto;
    margin: 3vw;
    margin-top: -1vh;
    margin-bottom: em;
    font-size: 0.85em;
  }
`;

const SkillsContainer = styled.div`
  width: 95%;
  font-size: clamp(0.9em, 3vw, 1.2em);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 145px;
  padding: 7px;
  padding-top: 10px;
  margin: 2px;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 5px;
  border-radius: 10px;
  box-shadow: 3px 7px 15px 2px rgba(0, 0, 0, 0.3);
  background-color: rgb(255, 255, 255, 0.4);

  @media screen and (max-width: 75em) {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 125px;
    align-items: center;
    padding-bottom: 10px;
  }
  @media screen and (max-width: 42em) {
    display: flex;
    justify-content: center;
    height: 20%;
    width: 90%;
    margin-bottom: '3vh';
    align-content: center;
  }
`;

const Skills = styled.h2`
  display: flex;
  justify-content: center;
  height: clamp(2rem, 5vw, 2.5rem);
  text-align: center;
  align-items: center;
  background-color: rgb(240, 240, 240, 0.8);
  color: rgb(0, 62, 128);
  font-weight: 400;
  border: 1px solid rgb(0, 62, 128);
  border-radius: 10px;
  padding: clamp(0.5rem, 2vw, 1rem);
  margin: clamp(0.25rem, 1vw, 0.5rem);
  font-size: clamp(0.9rem, 1vw, 1.1rem);

  @media screen and (max-width: 75em) {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(0, 62, 128, 0.7);
    border-radius: 10px;
    margin: clamp(0.25rem, 1vw, 0.5rem);
    height: clamp(1.5rem, 4vw, 2rem);
    font-size: clamp(0.7rem, 0.8vw, 0.9rem);
  }

  @media screen and (max-width: 42em) {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(0, 62, 128, 0.7);
    border-radius: 10px;
    margin: 0.1rem;
    font-size: 0.8rem;
    height: 1.8vh;
  }
`;

const MemberComponent = ({img, name='', desc='',skills=[]}) => {
  return(

      <Item>
        <ImageContainer>
          <img src={img} alt={name} />
        </ImageContainer>
        <div style={{ width: '95%', height: '13vh', display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', border: '1px solid rgb(0,0,0,0.2)', borderRadius: '25px', boxShadow: '3px 7px 15px 2px rgba(0,0,0,0.3)', backgroundColor:'rgb(255,255,255,0.6)', alignContent: 'center' }}>
          <Name>{name}</Name>
          <Description>{desc}</Description>
        </div>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skills key={index}>{skill}</Skills>
          ))}
        </SkillsContainer>
      </Item>
  
    )
  };




function Home() {
  const [currentRow, setCurrentRow] = useState(0);
  const [hover, setHover] = useState(false);

  let screen;

if (window.innerWidth > 1200) {
  screen = (
    <>
    <div >
    <Nav />
      <div className="container">
        <Parallax
          blur={{ min: -5, max: 5 }}
          bgImageClassName="opaque-image" 
          strength={300} 
          >
          <div style={{ height: '100%' }}>
            <div className="boxs-header">
              <Bounce >
              <img src={ResumePic} width='35%' alt='Resume Pic' style={{ borderRadius: '275px', marginTop: '5vh', maxWidth: '350px' }} onLoad={() => {
                const hiddenDivs = document.querySelectorAll('.hidden');
                hiddenDivs.forEach((div) => {
                  div.classList.remove('hidden');
                });
              }} />
              </Bounce>
              <div className="header-title hidden">
                Hi, I'm Blake!</div>
                <p className="header-title2 hidden">
                <AttentionSeeker cascade left damping={.05}> 
                  <span>Full Stack Developer </span> <span>&nbsp; | &nbsp;</span> 
                  <span> Educator</span> <span>&nbsp; | &nbsp;</span> 
                  <span> Artist </span> 
                </AttentionSeeker> 
                </p>
              <h4 className="introduction hidden">
                I like to create beautiful things that work well
              </h4>
            </div>
          </div>
        </Parallax>
      </div>
  </div>
    <Parallax>
      <div >
      <div className='about-outside-container2'>
        <div className='about-dev-container2'>
          <Slide triggerOnce direction='down' delay={150} >
            <div className='dev-text-border2'>
              <div className='about-text2'>
                <Slide direction='down' delay={200} >
                  <h4 className="dev-introduction1-2">
                    As a full stack developer,
                  </h4>
                </Slide>
                <Slide direction='up' delay={200} >
                  <h4 className="dev-introduction2-2">
                  I bring ideas to life
                  </h4>
                </Slide>
                <Slide direction='up' delay={250} >
                  <h4 className="dev-introduction3-2">
                    with clean, intuitive, and thoughtful design.
                  </h4>
                </Slide>
              </div>
            </div>
          </Slide>
          <Slide triggerOnce direction='down' delay={150}>
            <div 
              className="devImg2"
              onMouseEnter={() => {
                setHover(false);
              }}
              onMouseLeave={() => {
                setHover(true);
              }}
              onClick={() => { 
                window.location.replace('/projects')
                // window.location.replace('http://localhost:3000/projects')
                window.scrollBy({ behavior: 'smooth' });
              }}
            >
              <img 
              
                className="img-hover"
                src={devImg} 
                alt="dev pic" 
                title='Click to learn more'
              />
              <div className="dev-slide-hover2" >
                <Button fontSize='1em' text='Go to projects &#10230;' link='/projects'></Button>
                {/* <Button fontSize='1em' text='Go to projects &#10230;' link='http://localhost:3000/projects'></Button> */}
              </div>
            </div>
          </Slide>
      </div>
          
          <div className='about-dev-container2'>
          <Slide triggerOnce direction='down' delay={350}>
            <div className='dev-text-border2'>
              <div className='about-text2' >
                <Slide direction='down' delay={400}>
                  <h4 className="dev-introduction1-2">
                    As a former educator, 
                  </h4>
                </Slide>
                <Slide direction='up' delay={400}>
                  <h4 className="dev-introduction2-2">
                  I convey information 
                  </h4>
                </Slide>
                <Slide direction='up' delay={450}>
                  <h4 className="dev-introduction2-2">
                    using clear and concise methods.
                  </h4>
                </Slide>
              </div>
            </div>
          </Slide>
          <Slide triggerOnce direction='down' delay={350}>
              <div 
                className="devImg2"
                onMouseEnter={() => {
                  setHover(true);
                }}
                onMouseLeave={() => {
                  setHover(false);
                }}
                onClick={() => { 
                  window.location.replace('/blog');
                  // window.location.replace('http://localhost:3000/blog');
                  window.scrollBy({ behavior: 'smooth' });
                }}
              >
                <img
                  className="img-hover"
                  src={blogPic1} 
                  alt="blog pic" 
                  title='Click to learn more'
                />
                <div className="dev-slide-hover2">
                  <Button fontSize='1em' text='Go to blog &#10230;' link='/blog'></Button>
                  {/* <Button fontSize='1em' text='Go to blog &#10230;' link='http://localhost:3000/blog'></Button> */}
                </div>
              </div>
            </Slide>
        </div>
      
      <div className='about-dev-container2'>
        <Slide triggerOnce direction='down' delay={450}>
            <div className='dev-text-border2'>
              <div className='about-text2'>
                <Slide direction='down' delay={500}>
                  <h4 className="dev-introduction1-2">
                  As an artist, 
                  </h4>
                </Slide>
                <Slide direction='up' delay={550}>
                  <h4 className="dev-introduction2-2">
                  I explore visual narratives
                  </h4>
                </Slide>
                <Slide direction='up' delay={500}>
                  <h4 className="dev-introduction2-2">
                  within the aesthetic of mathematics.
                  </h4>
                </Slide>
              </div>
            </div>
          </Slide>
          <Slide triggerOnce direction='down' delay={450}>
          <div 
              className="devImg2"
              onMouseEnter={() => {
                  setHover(false);
              }}
              onMouseLeave={() => {
                  setHover(true);
              }}
              onClick={() => { 
                window.location.replace('/art');
                // window.location.replace('http://localhost:3000/art');
                window.scrollBy({ behavior: 'smooth' });
                  }}
              >
              <img 
                  className="img-hover"
                  src={StandArt} 
                  alt="stand art" 
                  title='Click to learn more'
              />
              <div className="dev-slide-hover2">
                  <Button fontSize='1em' text='Go to art &nbsp;&nbsp;&#10230;' link='/art'></Button>
                  {/* <Button fontSize='1em' text='Go to art &nbsp;&nbsp;&#10230;' link='http://localhost:3000/art'></Button> */}
              </div>
          </div>
        </Slide>
       </div>
      </div>
    </div>
  </Parallax>

  <Parallax>
    <div />
    <Projects />
  </Parallax>

</>
  );
} else if (window.innerWidth > 665) {
  screen = (
    <div >
    <Nav />
      <div className="container">
        <Parallax
          blur={{ min: -5, max: 5 }}
          bgImageClassName="opaque-image" 
          strength={300} 
          >
          <div >
            <div className="boxs-header">
              <Bounce >
              <img src={ResumePic} width='40%' alt='Resume Pic' style={{ borderRadius: '200px', marginTop: '10vh', maxWidth: '350px' }} onLoad={() => {
                const hiddenDivs = document.querySelectorAll('.hidden');
                hiddenDivs.forEach((div) => {
                  div.classList.remove('hidden');
                });
              }} />
              </Bounce>
              <div className="header-title hidden">
                Hi, I'm Blake!</div>
                <p  className="header-title2 hidden">
                <AttentionSeeker cascade left damping={.05}> 
                  <span>Full Stack Developer </span> <span>&nbsp; | &nbsp;</span> 
                  <span> Educator</span> <span>&nbsp; | &nbsp;</span> 
                  <span> Artist </span> 
                </AttentionSeeker> 
                </p>
              <h4 className="introduction hidden">
                I like to create beautiful things that work well
              </h4>
            </div>
          </div>
      </Parallax>
    </div>
    <Parallax>
        <div className='about-outside-container2'>
          <div className='about-dev-container2'>
          <Slide triggerOnce direction='down' delay={150} >
            <div className='dev-text-border2'>
              <div className='about-text2'>
                <Slide direction='down' delay={200} >
                  <h4 className="dev-introduction1-2">
                    As a full stack developer,
                  </h4>
                </Slide>
                <Slide direction='up' delay={200} >
                  <h4 className="dev-introduction2-2">
                  I bring ideas to life
                  </h4>
                </Slide>
                <Slide direction='up' delay={250} >
                  <h4 className="dev-introduction3-2">
                    with clean, intuitive, and thoughtful design.
                  </h4>
                </Slide>
              </div>
            </div>
          </Slide>
            <Slide triggerOnce direction='down' delay={150}>
              <div
                className="devImg2"
                onMouseEnter={() => {
                  setHover(false);
                }}
                onMouseLeave={() => {
                  setHover(true);
                }}
                onClick={() => { 
                  window.location.replace('/projects')
                  // window.location.replace('http://localhost:3000/projects')
                  window.scrollBy({ behavior: 'smooth' });
                }}
              >
                <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div>
                    <Button fontSize='.6em' text='Go to projects &#10230;' link='/projects'></Button>
                  </div>
                </div>

                <img 
                  src={devImg} 
                  alt="dev pic" 
                  title='Click to learn more'
                />
              </div>
            </Slide>
        </div>
            
            <div className='about-dev-container2'>
            <Slide triggerOnce direction='down' delay={350}>
            <div className='dev-text-border2'>
              <div className='about-text2' >
                <Slide direction='down' delay={400}>
                  <h4 className="dev-introduction1-2">
                    As a former educator, 
                  </h4>
                </Slide>
                <Slide direction='up' delay={400}>
                  <h4 className="dev-introduction2-2">
                  I convey information 
                  </h4>
                </Slide>
                <Slide direction='up' delay={450}>
                  <h4 className="dev-introduction2-2">
                    using clear and concise methods.
                  </h4>
                </Slide>
              </div>
            </div>
          </Slide>
            <Slide triggerOnce direction='down' delay={350}>
                <div 
                  className="devImg2"
                  onMouseEnter={() => {
                    setHover(true);
                  }}
                  onMouseLeave={() => {
                    setHover(false);
                  }}
                  onClick={() => { 
                    window.location.replace('/blog');
                    // window.location.replace('http://localhost:3000/blog');
                    window.scrollBy({ behavior: 'smooth' });
                  }}
                >
                  <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div>
                          <Button fontSize='.6em' text='Go to blog &#10230;' link='/blog'></Button>
                        </div>
                      </div>
                      <img
                        src={blogPic1} 
                        alt="blog pic" 
                        title='Click to learn more'
                      />
                </div>
              </Slide>
          </div>
        
        <div className='about-dev-container2'>
        <Slide triggerOnce direction='down' delay={450}>
            <div className='dev-text-border2'>
              <div className='about-text2'>
                <Slide direction='down' delay={500}>
                  <h4 className="dev-introduction1-2">
                  As an artist, 
                  </h4>
                </Slide>
                <Slide direction='up' delay={500}>
                  <h4 className="dev-introduction2-2">
                  I explore visual narratives
                  </h4>
                </Slide>
                <Slide direction='up' delay={550}>
                  <h4 className="dev-introduction2-2">
                  within the aesthetic of mathematics.
                  </h4>
                </Slide>
              </div>
            </div>
          </Slide>
          <Slide triggerOnce direction='down' delay={450}>
            <div 
                className="devImg2"
                onMouseEnter={() => {
                    setHover(false);
                }}
                onMouseLeave={() => {
                    setHover(true);
                }}
                onClick={() => { 
                    window.location.replace('/art');
                    // window.location.replace('http://localhost:3000/art');
                    window.scrollBy({ behavior: 'smooth' });
                    }}
                >
                  <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div>
                      <Button fontSize='.6em' text='Go to art &#10230;' link='/art'></Button>
                    </div>
                  </div>
                  <img 
                      src={StandArt} 
                      alt="stand art" 
                      title='Click to learn more'
                  />
              </div>
            </Slide>
          </div>
          </div>
      </Parallax>
      <Projects/>
    </div>
  );
} else {
  screen = (
    <div >
      <Nav />
        <div className="container">
          <Parallax
            blur={{ min: -5, max: 5 }}
            bgImageClassName="opaque-image" 
            strength={300} 
            >
            <div >
              <div className="boxs-header">
                <Bounce >
                <img src={ResumePic} width='60%' alt='Resume Pic' style={{ borderRadius: '175px', marginTop: '10vh' }} onLoad={() => {
                  const hiddenDivs = document.querySelectorAll('.hidden');
                  hiddenDivs.forEach((div) => {
                    div.classList.remove('hidden');
                  });
                }} />
                </Bounce>
                <div style={{ fontSize: '2em' }} className="header-title hidden">
                Hi, I'm Blake!</div>
                <p style={{ fontSize: '1em' }} className="header-title2 hidden">
                  <AttentionSeeker cascade left damping={.05}> 
                    <span>Full Stack Developer </span> <span>&nbsp; | &nbsp;</span> 
                    <span> Educator</span> <span>&nbsp; | &nbsp;</span> 
                    <span> Artist </span> 
                  </AttentionSeeker> 
                  </p>
                <h4 style={{ fontSize: '1.5em', margin: '1vw' }} className="introduction hidden">
                  I like to create beautiful things that work well
                </h4>
              </div>
            </div>
          </Parallax>
        </div>
      <Parallax style={{ marginTop: '0vh' }}>
          <div className='about-outside-container2'>
            <Container>
              <Swiper 
                effect="cards"
                spaceBetween={20}
                slidesPerView={1}
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
                  <div className='about-dev-container2'>
                    <div className='dev-text-border2'>
                      <h4 className="dev-introduction1-2 hidden">
                        As a full stack developer, I bring ideas to life with clean, intuitive, and thoughtful design.
                      </h4>
                    </div>  
                    
                    <div
                      className="devImg2"
                      onMouseEnter={() => {
                        setHover(false);
                      }}
                      onMouseLeave={() => {
                        setHover(true);
                      }}
                      onClick={() => { 
                        window.location.replace('/projects')
                        // window.location.replace('http://localhost:3000/projects')
                        window.scrollBy({ behavior: 'smooth' });
                      }}
                    >
                      <div style={{ position: 'fixed', top: '30%', bottom: 0, left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div>
                          <Button fontSize='1.2em' text='Go to projects &#10230;' link='/projects'></Button>
                        </div>
                      </div>

                      <img 
                        src={devImg} 
                        alt="dev pic" 
                        title='Click to learn more'
                      />
                    </div>
                  </div> 
                </SwiperSlide>
                <SwiperSlide>
                  <div className='about-dev-container2'>
                    <div className='dev-text-border2'>
                      <h4 className="dev-introduction1-2 hidden">
                        As a former educator, I convey information using clear and concise methods.
                      </h4>
                    </div>
                      
                    <div 
                      className="devImg2"
                      onMouseEnter={() => {
                        setHover(true);
                      }}
                      onMouseLeave={() => {
                        setHover(false);
                      }}
                      onClick={() => { 
                        window.location.replace('/blog');
                        // window.location.replace('http://localhost:3000/blog');
                        window.scrollBy({ behavior: 'smooth' });
                      }}
                    >
                      <div style={{ position: 'fixed', top: '30%', bottom: 0, left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div>
                          <Button fontSize='1.2em' text='Go to blog &#10230;' link='/blog'></Button>
                        </div>
                      </div>
                      <img
                        src={blogPic1} 
                        alt="blog pic" 
                        title='Click to learn more'
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>  
                  <div className='about-dev-container2'>
                    <div className='dev-text-border2'>
                    <h4 className="dev-introduction1-2 hidden">
                          As an artist, I explore visual narratives within the aesthetic of mathematics.
                      </h4>
                    </div>
                    <div 
                      className="devImg2"
                      onMouseEnter={() => {
                          setHover(false);
                      }}
                      onMouseLeave={() => {
                          setHover(true);
                      }}
                      onClick={() => { 
                          window.location.replace('/art');
                          // window.location.replace('http://localhost:3000/art');
                          window.scrollBy({ behavior: 'smooth' });
                          }}
                      >
                      <div style={{ position: 'fixed', top: '30%', bottom: 0, left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div>
                          <Button fontSize='1.2em' text='Go to art &#10230;' link='/art'></Button>
                        </div>
                      </div>
                      <img 
                          src={StandArt} 
                          alt="stand art" 
                          title='Click to learn more'
                      />
                    </div>

                  </div>
                </SwiperSlide>
              </Swiper>
            </Container>
        </div>
    </Parallax>
    <Parallax  >
    <div className='projects-outside-container2' >
      <ContainerTitle>
        Projects
      </ContainerTitle> 
      <Container >
        <Swiper
          effect="cards"
          spaceBetween={20}
          slidesPerView={1}
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
          id='swiper-projects'
        >
            
          <SwiperSlide > 
            <a href="/nftpage" >
              <MemberComponent img={nftImg} dir="up" name="NFT Sales Tracker" desc="A personal project that tracks the top sales of various NFT marketplaces." skills={["JavaScript","React","Node.js","express.js","JSON Web Token","MySQL","axios","argon2","OAuth2","full stack"]} /></a>
          </SwiperSlide>
          <SwiperSlide>  
            <a href="/stockpage">
              <MemberComponent img={stockImg} dir="right" name="Stock Trading App" desc="A stock portfolio that stores user transactions with real-time stock quotes." skills={["Python","flask","SQL","jinja", "full stack","responsive design"]} /></a>
          </SwiperSlide>
          <SwiperSlide>  
            <a href="/countrypage">
              <MemberComponent img={countryImg}  name="Country / Weather App" desc="A React application that displays country facts and weather forecasts." skills={["JavaScript","React","Node.js","express.js","axios", "full stack","responsive design"]}  /></a>
          </SwiperSlide>
          <SwiperSlide>  
            <a href="/phonebookpage">
              <MemberComponent img={phoneImg}  name="Phonebook Feature" desc="A CRUD phonebook feature that manages a contact list." skills={["JavaScript","MongoDB","express.js","React","Node.js","cors","full stack","responsive design"]}  /></a>
          </SwiperSlide>
        </Swiper>
      </Container>
      </div>
    </Parallax>
  </div>
  )
  }
  return (
    <div >
       <div>{screen}</div>
      <Footer/>
    </div>
  );
}

export default Home;

