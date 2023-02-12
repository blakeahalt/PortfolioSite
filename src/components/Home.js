import React, { useEffect, useState } from 'react'
import '../App.css';
import { Parallax } from "react-parallax";
import styled from 'styled-components';
import Projects from './ProjectCards.js'
import Resume from './Resume.js'

import Slide from 'react-reveal/Slide';
import Reveal from 'react-reveal/Reveal';

import icon1 from "../assets/i1.png";
import icon2 from "../assets/i2.png";
import ResumePic from "../assets/ResumePic.jpg";
import StandArt from "../assets/Stand_Art.jpg"
import blogPic1 from "../assets/blogPic1.jpg"

const TextWrapper = styled.div`
  &:hover .introduction {
    visibility: visible;
  }

  .introduction {
    visibility: hidden;
    transition: visibility 0.2s;
  }
`;


function Home() {
  const [currentRow, setCurrentRow] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      // Update the currentRow value based on the current scroll position
      if (currentPosition >= 700 && currentPosition < 900) {
        setCurrentRow(0);
      } else if (currentPosition >= 975 && currentPosition < 1450) {
        setCurrentRow(1);
      } else if (currentPosition >= 1500 && currentPosition < 2150) {
        setCurrentRow(2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 

  return (
    <div >
      <div className="container">
      {window.innerWidth > 1325 ? (
        <>
        <Parallax
          blur={{ min: -5, max: 5 }}
          bgImageClassName="opaque-image" 
          strength={300} 
          >
          <div style={{ height: 650}}>
            <div className="boxs-header">
            <img src={ResumePic} width='250px' alt='Resume Pic' style={{ borderRadius: '150px' }} />
              <div className="header-title">
                Hi, I'm Blake!</div>
                <p className="header-title2">
                  <span id="word1" onClick={() => { 
                    window.location.hash = '#word1-section';
                    window.scrollBy({ top: -240, behavior: 'smooth' });
                  }}>Full Stack Developer</span> |
                  <span id="word2" onClick={() => { window.location.hash = '#word2-section';
                    window.scrollBy({ top: -220, behavior: 'smooth' });
                  }}> Artist </span> | 
                  <span id="word3" onClick={() => { window.location.hash = '#word3-section';
                    window.scrollBy({ top: 20, behavior: 'smooth' });
                  }}> Educator</span>
                </p>
              <h4 className="introduction">
                I like to create beautiful things that work well
              </h4>
            </div>
          </div>
        </Parallax>


          <Parallax>
            <div style={{ height: 2150, display: 'flex', flexDirection: 'column' }}>
              <div className='about-outside-container'>
                <div className='about-container' id='word1-section'>
                  <div className='about-text'>
                  {(currentRow === 0 || currentRow === 1) && (
                  <Slide left delay={150}>
                  <h4 className="introduction">
                    As a full stack developer, I bring ideas to life 
                  </h4>
                  <h4 style={{ marginTop: -20, marginLeft: 120 }} className="introduction">
                    with clean, inuitive, and thoughtful design.
                  </h4>
                  </Slide>
                )}
                  </div>
                  <div className='about-animation custom-animation'>
                  {(currentRow === 0 || currentRow === 1) && (
                    <Slide 
                      right
                      delay={150}
                    >
                      <img 
                        style={{ padding: 5, width: '175px', height: '175px', margin: 'auto', borderRadius: '75px'}} 
                        src={icon1} 
                        alt="icon1" 
                      />
                    </Slide>
                )}
                  </div>
                </div>
              </div>

              <div className='about-outside-container'>
                <div className='about-container'>
                  <div className='about-text' id='word2-section'>
                    {(currentRow === 1 || currentRow === 2) && (
                      <Slide left delay={150}>
                      <h4 className="art-introduction1">
                      As an artist, I explore the aesthetics of math
                      </h4>
                      <h4 className="art-introduction2">
                      to create captivating visual narratives.
                      </h4>
                      </Slide>
                    )}
                  </div>
                  <div className='about-animation custom-animation'>
                    {(currentRow === 1 || currentRow === 2) && (
                      <Slide right distance='200%' delay={150} >
                        <div 
                          className="standart"
                          onMouseEnter={() => {
                            setHover(false);
                          }}
                          onMouseLeave={() => {
                            setHover(true);
                          }}
                          onClick={() => { 
                              window.location.replace('http://localhost:3000/art');
                              window.scrollBy({ behavior: 'smooth' });
                            }}
                        >
                          <img 
                            className="img-hover"
                            src={StandArt} 
                            alt="stand art" 
                            title='Click to learn more'
                          />
                            <div className="art-slide-hover">
                              <p style={{fontSize:'2em'}}>See the art &#10230;</p>
                            </div>
                        </div>
                      </Slide>
                    )}
                  </div>
                </div>
              </div>

              <div className='about-outside-container'>
                <div className='about-container'>
                  <div className='about-text' id='word3-section'>
                  {currentRow === 2 && (
                    <Slide left delay={150} >
                    <h4 className="edu-introduction1">
                    As a former educator, I convey information 
                    </h4>
                    <h4 className="edu-introduction2">
                    with clear and concise methods.
                    </h4>
                    </Slide>
                  )}
                  </div>
                  <div className='about-animation custom-animation'>
                  {currentRow === 2 && (
                    <Slide right distance='200%' delay={150}>
                        <div 
                          className="blogPic"
                          onMouseEnter={() => {
                            setHover(true);
                          }}
                          onMouseLeave={() => {
                            setHover(false);
                          }}
                          onClick={() => { 
                            window.location.replace('http://localhost:3000/blog');
                            window.scrollBy({ behavior: 'smooth' });
                          }}
                        >
                      
                          <img
                            className="img-hover"
                            src={blogPic1} 
                            alt="blog pic" 
                            title='Click to learn more'
                          />
                          <div className="blog-slide-hover">
                              <p style={{fontSize:'2em'}}>See the blog &#10230;</p>
                            </div>
                        </div>
                      </Slide>
                  )}
                  </div>
                </div>
              </div>
            </div>
          </Parallax>
          </>
        ) : (
          <>
            <Parallax
            blur={{ min: -5, max: 5 }}
            bgImageClassName="opaque-image" 
            strength={300} 
            >
            <div style={{ height: 650}}>
              <div className="boxs-header">
              <img src={ResumePic} width='250px' alt='Resume Pic' style={{ borderRadius: '150px' }} />
                <div className="header-title">
                  Hi, I'm Blake!</div>
                  <p className="header-title2">
                    <span>Full Stack Developer</span> |
                    <span> Artist </span> | 
                    <span> Educator</span>
                  </p>
                <h4 className="introduction">
                  I like to create beautiful things that work well
                </h4>
              </div>
            </div>
          </Parallax>
          <Parallax>
          <div style={{ height: 2150, display: 'flex', flexDirection: 'column' }}>
            <div className='about-outside-container'>
                <div className='about-container'>
                  <div className='about-text' id='word2-section'>
                      <Slide left delay={150}>
                      <h4 className="art-introduction1">
                      As an artist, I explore the aesthetics of math
                      </h4>
                      <h4 className="art-introduction2">
                      to create captivating visual narratives.
                      </h4>
                      </Slide>
                  </div>
                  <div className='about-animation custom-animation'>
                      <Slide right distance='200%' delay={150} >
                        <div 
                          className="standart"
                          onMouseEnter={() => {
                            setHover(false);
                          }}
                          onMouseLeave={() => {
                            setHover(true);
                          }}
                          onClick={() => { 
                              window.location.replace('http://localhost:3000/art');
                              window.scrollBy({ behavior: 'smooth' });
                            }}
                        >
                            
                            
                          <img 
                            className="img-hover"
                            src={StandArt} 
                            alt="stand art" 
                            title='Click to learn more'
                          />
                            <div className="art-slide-hover">
                              <p style={{fontSize:'2em'}}>See the art &#10230;</p>
                            </div>
                        </div>
                      </Slide>
                  </div>
                </div>
              </div>
            <div className='about-outside-container'>
                <div className='about-container'>
                  <div className='about-text' id='word2-section'>
                      <Slide left delay={150}>
                      <h4 className="edu-introduction1">
                      As a former educator, I convey information 
                      </h4>
                      <h4 className="edu-introduction2">
                      with clear and concise methods.
                      </h4>
                      </Slide>
                  </div>
                  <div className='about-animation custom-animation'>
                      <Slide right distance='200%' delay={150} >
                        <div 
                          className="blogPic"
                          onMouseEnter={() => {
                            setHover(false);
                          }}
                          onMouseLeave={() => {
                            setHover(true);
                          }}
                          onClick={() => { 
                              window.location.replace('http://localhost:3000/blog');
                              window.scrollBy({ behavior: 'smooth' });
                            }}
                        >
                            
                            
                          <img 
                            className="img-hover"
                            src={blogPic1} 
                            alt="blog pic" 
                            title='Click to learn more'
                          />
                            <div className="blog-slide-hover">
                              <p style={{fontSize:'2em'}}>See the blog &#10230;</p>
                            </div>
                        </div>
                      </Slide>
                  </div>
                </div>
              </div>
            </div>
          </Parallax>
          </>
        )}

        <Parallax className="parallax-projects">
          <h1 id="projects-section" style={{ marginBottom: 15, color: 'black', fontSize: '3em' }}>Projects</h1>
          <Projects/>
        </Parallax>
        
        {/* <Parallax  >
          <div style={{ height: 1700, marginBottom: -150 }}>
              <h1 >Resume</h1>
              <Resume className='resume'/>
          </div>
        </Parallax> */}
    </div>
      <div className="footer">Footer. This code is open source.</div>

    </div>
  );
}

export default Home;

