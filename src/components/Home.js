import React, { useEffect, useState } from 'react'
import '../App.css';
import { Parallax } from "react-parallax";
import styled from 'styled-components';
import Projects from './ProjectCards.js'
import Nav from './NavBar'
import Resume from './Resume.js'

import { Bounce, Flip, Slide } from 'react-awesome-reveal';

import icon1 from "../assets/i1.png";
import icon2 from "../assets/i2.png";
import Human from "../assets/Art/HumanHemi.jpg";
import ResumePic from "../assets/ResumePic.jpg";
import devImg from "../assets/devImg.png"
import StandArt from "../assets/Stand_Art.jpg"
import blogPic1 from "../assets/blogPic1.jpg"


// const TextWrapper = styled.div`
//   &:hover .introduction {
//     visibility: visible;
//   }

//   .introduction {
//     visibility: hidden;
//     transition: visibility 0.2s;
//   }
// `;


function Home() {
  const [currentRow, setCurrentRow] = useState(0);
  const [hover, setHover] = useState(false);

  return (
    <div >
    <Nav />
      <div className="container">
      {window.innerWidth < 665 ? (
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
                <div className='about-art-container'>
                    <Slide left delay={150} >
                      <div className='art-text-border'>
                        <Slide left delay={450}>
                          <div className='about-text' id='word2-section'>
                          <h4 className="art-introduction1">
                          As an artist, I explore visual narratives
                          </h4>
                          <h4 className="art-introduction2">
                          within the aesthetic of mathematics.
                          </h4>
                          </div>
                        </Slide>
                      </div>
                    </Slide>
                  <div className='about-animation custom-animation'>
                      <Slide right distance='200%' delay={450} >
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
                <div className='about-blog-container'>
                      <Slide delay={150}>
                        <div className='blog-text-border'>
                          <Slide delay={450}>
                            <div className='about-text' id='word3-section'>
                            <h4 className="edu-introduction1">
                            As a former educator, I convey information</h4>
                            <h4 className="edu-introduction2">
                            using clear and concise methods.
                            </h4>
                            </div>
                          </Slide>
                        </div>
                      </Slide>
                      <Slide direction='up' delay={150}>
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
          </Parallax>
          </>
        ) : (
          <>
            <Parallax
              blur={{ min: -5, max: 5 }}
              bgImageClassName="opaque-image" 
              strength={300} 
              >
              <div style={{ height: 675}}>
                <div className="boxs-header">
                  <Bounce >
                  <img src={ResumePic} width='250px' alt='Resume Pic' style={{ borderRadius: '150px', margin: '5px', marginTop: '122px' }} onLoad={() => {
                    const hiddenDivs = document.querySelectorAll('.hidden');
                    hiddenDivs.forEach((div) => {
                      div.classList.remove('hidden');
                    });
                  }} />
                  </Bounce>
                  <div className="header-title hidden">
                    Hi, I'm Blake!</div>
                    <p className="header-title2 hidden">
                    <Flip cascade left damping={.05}> 
                      <span>Full Stack Developer </span> <span>&nbsp; | &nbsp;</span> 
                      <span> Educator</span> <span>&nbsp; | &nbsp;</span> 
                      <span> Artist </span> 
                    </Flip> 
                    </p>
                  <h4 className="introduction hidden">
                    I like to create beautiful things that work well
                  </h4>
                </div>
              </div>
            </Parallax>


              <Parallax>
                <div className='parallax-container' >
                <div className='about-outside-container'>
                  <div className='about-dev-container'>
                  <Slide direction='up' delay={150} >
                      <div >
                        <div id='word2-section'>
                          <Slide direction='down' delay={150} >
                            <h4 className="dev-introduction1 hidden">
                              As a full stack developer, I bring ideas to life
                            </h4>
                          </Slide>
                          <Slide direction='up' delay={150} >
                            <h4 className="dev-introduction2 hidden">
                              with clean, intuitive, and thoughtful design.
                            </h4>
                          </Slide>
                        </div>
                      </div>
                    </Slide>
                    <Slide direction='down' delay={250}>
                      <div
                        className="devImg"
                        onMouseEnter={() => {
                          setHover(false);
                        }}
                        onMouseLeave={() => {
                          setHover(true);
                        }}
                        onClick={() => { 
                          window.location.replace('http://localhost:3000/#projects-section')
                          window.scrollBy({ behavior: 'smooth' });
                        }}
                      >
                        <img 
                          className="img-hover"
                          src={devImg} 
                          alt="dev pic" 
                          title='Click to learn more'
                        />
                        <div className="dev-slide-hover">
                          <p style={{fontSize:'2em'}}>See the projects &#10230;</p>
                        </div>
                      </div>
                    </Slide>
                  </div>
                </div>


                <div className='about-outside-container'>
                  <div className='about-blog-container'>
                    <Slide left delay={150}>
                      <div className='blog-text-border'>
                        <div className='about-text' id='word3-section'>
                          <Slide direction='down' delay={150}>
                            <h4 className="edu-introduction1">
                              As a former educator, I convey information 
                            </h4>
                          </Slide>
                          <Slide direction='up' delay={150}>
                            <h4 className="edu-introduction2">
                              using clear and concise methods.
                            </h4>
                          </Slide>
                        </div>
                      </div>
                    </Slide>
                    <div className='about-animation custom-animation'>
                      <Slide direction='right' delay={250}>
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
                    </div>
                  </div>
                </div>

                  
                  <div className='about-outside-container'>
                    <div className='about-art-container'>
                        <Slide delay={150} >
                          <div className='art-text-border'>
                            <div className='about-text' id='word2-section'>
                            <Slide direction='down' delay={150}>
                              <h4 className="art-introduction1">
                              As an artist, I explore visual narratives
                              </h4>
                            </Slide>
                            <Slide direction='up' delay={150}>
                              <h4 className="art-introduction2">
                              within the aesthetic of mathematics.
                              </h4>
                            </Slide>
                            </div>
                          </div>
                        </Slide>
                      <div className='about-animation custom-animation'>
                        <Slide direction='right' delay={250} >
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
                </div>
              </Parallax>
          </>
          
        )}

        <Parallax className="parallax-projects" >
          <div id="projects-section"/>
          <Projects />
        </Parallax>
      </div>
    <div className="footer">Footer. This code is open source.</div>
  </div>
  );
}

export default Home;

