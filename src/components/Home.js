import React, { useEffect, useState } from 'react'
import WebFont from 'webfontloader';
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
  width: 100%;
  height: 80vh; 
  align-items: center;

  .swiper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 90%;
    height: 90%;
    display: flex;
  }

  .swiper-pagination {
    text-align: right;
    opacity: 0.5;
    font-size: 1.2em;
    margin-bottom: -6vh;
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
      display: relative;
      object-fit: cover;
      height: 100%;

    }
  }
  .swiper-button-prev {
    display: none;
  }
  .swiper-button-next {
    display: none;
  }

  // .swiper-button-next {
  //   color: ${(props) => props.theme.text};
  //   right: 0;
  //   width: clamp(5vw, 4rem, 8rem); 
  //   top: 65%;
  //   right: -1vh;
  //   background-image: url(${Arrow});
  //   background-position: center;
  //   background-size: cover;

  //   &:after {
  //     display: none;
  //   }
  // }

  // .swiper-button-prev {
  //   color: ${(props) => props.theme.text};
  //   left: -3vh;
  //   top: 65%;
  //   width: clamp(5vw, 4rem, 8rem); 
  //   transform: rotate(180deg);
  //   background-image: url(${Arrow});
  //   background-position: center;
  //   background-size: cover;

  //   &:after {
  //     display: none;
  //   }
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


const ImageContainer = styled.div`
  display: flex;
  height: 30vh;
  width: 90%;
  justify-content: center;
  margin-top: -1vh;
  overflow: hidden;
  box-shadow: 7px 7px 15px -3px rgba(0,0,0,0.3);
  background-color: rgb(255,255,255);
  border: 1px solid rgba(0,0,0);
  border-radius: 25px;
  cursor: pointer;

  img{
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease-in-out;
    border-radius: 25px;
    object-fit: contain;
  }
`;


const Name = styled.h2`
  font-size: 1.3em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: rgb(0, 62, 128);
  margin-bottom: -2vh;
`;

const Description = styled.p`
  font-size: .9em;
  text-align: center;
  display: flex;
  justify-content: center;
  color: rgb(0, 62, 128);
  margin: 2vh;
`;

const SkillsContainer = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 1vh;
  flex-wrap: wrap;
  margin-top: 1vh;
  margin-bottom: -1vh;
  border-radius: 25px;
  box-shadow: 3px 7px 15px 2px rgba(0, 0, 0, 0.3);
  background-color: rgb(255, 255, 255, 0.4);
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
  margin: .2vh;
  padding: 1vh;
  padding-top: .2vh;
  padding-bottom: .2vh;
  font-size: .9em;
`;

const MemberComponent = ({img, name='', desc='',skills=[]}) => {
  return(

      <div className='projects-container-mobile'>
        <ImageContainer>
          <img src={img} alt={name} />
        </ImageContainer>
        <div className='projectcard-name-desc-container'>
          <Name>{name}</Name>
          <Description>{desc}</Description>
        </div>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skills key={index}>{skill}</Skills>
          ))}
        </SkillsContainer>
      </div>
  
    )
  };




function Home() {
  const [currentRow, setCurrentRow] = useState(0);
  const [hover, setHover] = useState(false);

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
    <div className="container font-load">
    <div >
    <Nav />
      <div >
        <Parallax
          blur={{ min: -5, max: 5 }}
          bgImageClassName="opaque-image" 
          strength={300} 
          >
            <div className="boxs-header">
              <Bounce >
              <img src={ResumePic} width='17%' alt='Resume Pic' style={{ borderRadius: '275px', marginTop: '5vh', maxWidth: '350px' }} onLoad={() => {
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
                  I bring ideas to life with clean, 
                  </h4>
                </Slide>
                <Slide direction='up' delay={300} >
                  <h4 className="dev-introduction3-2">
                    intuitive, and thoughtful design.
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

</div>
  );
} else if (window.innerWidth > 665) {
  screen = (
    <>
    <div className='font-load'>
    <Nav />
      <div className="container">
        <Parallax
          blur={{ min: -5, max: 5 }}
          bgImageClassName="opaque-image" 
          strength={300} 
          >
            <div className="boxs-header">
              <Bounce >
              <img src={ResumePic} width='30%' alt='Resume Pic' style={{ borderRadius: '275px', marginTop: '5vh' }} onLoad={() => {
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
      </Parallax>
    </div>
    </div>
    <Parallax className='font-load'>
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
                  I bring ideas to life with
                  </h4>
                </Slide>
                <Slide direction='up' delay={300} >
                  <h4 className="dev-introduction3-2">
                    clean, intuitive, and
                  </h4>
                </Slide>
                <Slide direction='up' delay={350} >
                  <h4 className="dev-introduction3-2">
                    thoughtful design.
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
                <Slide direction='up' delay={500}>
                  <h4 className="dev-introduction2-2">
                    using clear and concise 
                  </h4>
                </Slide>
                <Slide direction='up' delay={550}>
                  <h4 className="dev-introduction2-2">
                    methods.
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
                <Slide direction='up' delay={600}>
                  <h4 className="dev-introduction2-2">
                  within the aesthetic of
                  </h4>
                </Slide>
                <Slide direction='up' delay={650}>
                  <h4 className="dev-introduction2-2">
                  mathematics.
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
    </>
  );
} else {
  screen = (
    <div className='font-load'>
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
                <img src={ResumePic} width='45%' alt='Resume Pic' style={{ borderRadius: '200px', marginTop: '4vh' }} onLoad={() => {
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
      <Parallax >
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
      <div>
        <div className='projects-outside-container2' >
          <ContainerTitle>
            PROJECTS
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
            >
                
              <SwiperSlide > 
                <a href="/nftpage" >
                  <MemberComponent img={nftImg} dir="up" name="NFT Sales Tracker" desc="A personal project that implements various APIs to track top sales from NFT marketplaces." skills={["JavaScript","React","Node.js","express.js","JSON Web Token","MySQL","axios","argon2","OAuth2"]} /></a>
              </SwiperSlide>
              <SwiperSlide>  
                <a href="/stockpage">
                  <MemberComponent img={stockImg} dir="right" name="Stock Trading App" desc="A stock portfolio application that stores user transactions with real-time financial data." skills={["Python","flask","SQL","jinja", "full stack","responsive design"]} /></a>
              </SwiperSlide>
              <SwiperSlide>  
                <a href="/countrypage">
                  <MemberComponent img={countryImg}  name="Country / Weather App" desc="A full stack React app that displays country facts and weather forecasts." skills={["JavaScript","React","Node.js","express.js","axios", "full stack","responsive design"]}  /></a>
              </SwiperSlide>
              <SwiperSlide>  
                <a href="/phonebookpage">
                  <MemberComponent img={phoneImg}  name="Phonebook Feature" desc="A full stack React app that implements CRUD methods to manage a phonebook contacts list." skills={["JavaScript","MongoDB","express.js","React","Node.js","cors","full stack","responsive design"]}  /></a>
              </SwiperSlide>
            </Swiper>
          </Container>
          </div>
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

