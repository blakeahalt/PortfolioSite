import React from "react";

import '../App.css';
import { Parallax } from "react-parallax";
import { AwesomeButton } from "react-awesome-button";
import Icons from './Skills.js'
import Nav from './NavBar'
import Footer from './Footer'


import image1 from "../assets/01.jpeg";
import image3 from "../assets/03.jpeg";
import image4 from "../assets/04.jpeg";
import WorldMap from "../assets/country-background.png"
import MobileMap from "../assets/MobileMap.jpg"
import StandArt from "../assets/Stand_Art.jpg"
import StandArt2 from "../assets/Stand_Art2.jpg"
import StandArt3 from "../assets/Stand_Art3.jpg"
import StandArt4 from "../assets/Stand_Art4.jpg"
import StandArt5 from "../assets/Stand_Art5.jpg"
import ResumePic from "../assets/ResumePic.jpg";

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
        <div style={{height: '800px', marginTop: '-275px', marginBottom: '-50px'}}>
            <div className="boxs-title">
              <h2 style={{marginTop: '250px', marginBottom: '45px', color: 'rgb(0, 62, 128)' }}>About me:</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                I spent ten years teaching English at elite after school programs in Thailand and South Korea, and 4 years teaching Kindergarten at a private elementary school in Pacific Palisades, CA. While teaching in CA, I also began volunteering at several machine learning, data science, and tech conferences in the Los Angeles area exploring my greater interest in the tech world. 
                </div>
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                Because of my continued interest in technology, passion to create things that solve real problems, and growth in technical skills, in 2021, I decided to transition from teaching to pursue a software development career.
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
        <div style={{height: '800px', marginTop: '-225px', marginBottom: '-50px'}}>
            <div className="boxs-title">
              <h2 style={{marginTop: '250px', marginBottom: '45px', color: 'rgb(0, 62, 128)' }}>About me:</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                I spent ten years teaching English at elite after school programs in Thailand and South Korea, and 4 years teaching Kindergarten at a private elementary school in Pacific Palisades, CA. While teaching in CA, I also began volunteering at several machine learning, data science, and tech conferences in the Los Angeles area exploring my greater interest in the tech world. 
                </div>
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                Because of my continued interest in technology, passion to create things that solve real problems, and growth in technical skills, in 2021, I decided to transition from teaching to pursue a software development career.
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
        <div style={{height: '800px', marginTop: '-275px', marginBottom: '-50px'}}>
            <div className="boxs-title">
              <h2 style={{marginTop: '250px', marginBottom: '45px', color: 'rgb(0, 62, 128)' }}>About me:</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                I spent ten years teaching English at elite after school programs in Thailand and South Korea, and 4 years teaching Kindergarten at a private elementary school in Pacific Palisades, CA. While teaching in CA, I also began volunteering at several machine learning, data science, and tech conferences in the Los Angeles area exploring my greater interest in the tech world. 
                </div>
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                Because of my continued interest in technology, passion to create things that solve real problems, and growth in technical skills, in 2021, I decided to transition from teaching to pursue a software development career.
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
