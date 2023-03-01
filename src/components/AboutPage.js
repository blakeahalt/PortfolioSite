import React from "react";

import '../App.css';
import { Parallax } from "react-parallax";
import Icons from './Skills.js'
import Nav from './NavBar'
import Footer from './Footer'


import StandArt from "../assets/Stand_Art.jpg"
import StandArt2 from "../assets/Stand_Art2.jpg"
import StandArt3 from "../assets/Stand_Art3.jpg"
import StandArt4 from "../assets/Stand_Art4.jpg"
import StandArt5 from "../assets/Stand_Art5.jpg"

function About() {
  let screen;

if (window.innerWidth > 1200) {
  screen = (
<div className='about-page-height'>
      <Nav />
        <div  >
        <Parallax 
          bgImage={StandArt} 
          blur={{ min: -10, max: 10 }}
          bgImageClassName="opaque-image"
          strength={300} 
          >
          <div style={{ height: 750 }}>
          </div>
        </Parallax>
        <Parallax  >
        <div style={{height: '825px', marginTop: '-275px', marginBottom: '-50px'}}>
            <div className="boxs-title">
              <h2 style={{marginTop: '250px', marginBottom: '45px', color: 'rgb(0, 62, 128)' }}>About me:</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                  Building on nearly a decade of experience teaching and training English teachers in Thailand and South Korea, I continued my teaching journey in 2017 by teaching Kindergarten in Pacific Palisades, CA. While teaching, I developed a deeper interest in the tech industry and started learning Python and Javascript. I also got involved in the field by volunteering at various tech conferences held throughout Los Angeles.
                  </div>
                  <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                  Because of my continued interest in technology, passion to build things that solve real problems, and improving my technical skills, in 2021, I decided to transition from teaching to pursue a software development career. Although I will miss being in the classroom, I look forward to applying my teaching skills to new opportunities and challenges.
                  </div>
                  <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                  See the full stack applications I've built in the Projects section, which have a description of each project and its features along with links to a demo and my github. Also be sure to check out my artwork and blog posts!
                  </div>
              </div>
            </div>
          </div>
        </Parallax>


      <Parallax  >
        <Icons />
      </Parallax>

      </div>
      <Footer/>

    </div>
  )
}

else if (window.innerWidth > 665) {
  screen = (
<div className='about-page-height'>
      <Nav />
        <div  >
        <Parallax 
          bgImage={StandArt} 
          blur={{ min: -10, max: 10 }}
          bgImageClassName="opaque-image"
          strength={300} 
          >
          <div style={{ height: 750 }}>
          </div>
        </Parallax>
        <Parallax  >
        <div style={{height: '825px', marginTop: '-225px', marginBottom: '-25px'}}>
            <div className="boxs-title">
              <h2 style={{marginTop: '250px', marginBottom: '45px', color: 'rgb(0, 62, 128)' }}>About me:</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                Building on nearly a decade of experience teaching and training English teachers in Thailand and South Korea, I continued my teaching journey in 2017 by teaching Kindergarten in Pacific Palisades, CA. While teaching, I developed a deeper interest in the tech industry and started learning Python and Javascript. I also got involved in the field by volunteering at various tech conferences held throughout Los Angeles.
                </div>
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                Because of my continued interest in technology, passion to build things that solve real problems, and improving my technical skills, in 2021, I decided to transition from teaching to pursue a software development career. Although I will miss being in the classroom, I look forward to applying my teaching skills to new opportunities and challenges.
                </div>
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                See the full stack applications I've built in the Projects section, which have a description of each project and its features along with links to a demo and my github. Also be sure to check out my artwork and blog posts!
                </div>
              </div>
            </div>
          </div>
        </Parallax>


      <Parallax style={{marginTop: '50px'}} >
        <Icons />
      </Parallax>

      </div>
      <Footer/>

    </div>
  )
}

else {
  screen = (
  <div className='about-page-height'>
      <Nav />
        <div  >
        <Parallax 
          bgImage={StandArt5} 
          blur={{ min: -10, max: 10 }}
          bgImageClassName="opaque-image"
          strength={300} 
          >
          <div style={{ height: '100vh' }}>
          </div>
        </Parallax>
        <Parallax  >
        <div style={{height: '825px', marginTop: '-250px', marginBottom: '-25px'}}>
            <div className="boxs-title">
              <h2 style={{marginTop: '250px', marginBottom: '45px', color: 'rgb(0, 62, 128)' }}>About me:</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                Building on nearly a decade of experience teaching and training English teachers in Thailand and South Korea, I continued my teaching journey in 2017 by teaching Kindergarten in Pacific Palisades, CA. While teaching, I developed a deeper interest in the tech industry and started learning Python and Javascript. I also got involved in the field by volunteering at various tech conferences held throughout Los Angeles.
                </div>
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                Because of my continued interest in technology, passion to build things that solve real problems, and improving my technical skills, in 2021, I decided to transition from teaching to pursue a software development career. Although I will miss being in the classroom, I look forward to applying my teaching skills to new opportunities and challenges.
                </div>
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                See the full stack applications I've built in the Projects section, which have a description of each project and its features along with links to a demo and my github. Also be sure to check out my artwork and blog posts!
                </div>
              </div>
            </div>
          </div>
        </Parallax>


      <Parallax style={{marginTop: '-50px' }} >
        <Icons />
      </Parallax>

      <Footer/> 
  </div>
  </div>
  )
}


  return (
    <div>
      {screen}
    </div>
  );
}

export default About;
