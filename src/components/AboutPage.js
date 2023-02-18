import React from "react";

import '../App.css';
import { Parallax } from "react-parallax";
import { AwesomeButton } from "react-awesome-button";
import Icons from './Skills.js'
import Nav from './NavBar'



import image1 from "../assets/01.jpeg";
import image3 from "../assets/03.jpeg";
import image4 from "../assets/04.jpeg";
import WorldMap from "../assets/country-background.png"
import MobileMap from "../assets/MobileMap.jpg"
import StandArt from "../assets/Stand_Art.jpg"
import ResumePic from "../assets/ResumePic.jpg";



function About() {
  return (
    <div  >
      <Nav />
        <div style= {{ marginTop: '15px', height: '2450px' }} className="container">
        <Parallax bgImage={StandArt} 
          blur={{ min: -10, max: 10 }}
          bgImageClassName="opaque-image" 
          strength={300} 
          >
          <div style={{ height: 750 }}>
            <div className="boxs header">
            
            </div>
          </div>
        </Parallax>
        <Parallax  >
        <div style={{height: '750px', marginTop:-200}}>
            <div className="boxs-title">
              <h2 style={{marginTop: '250px', marginBottom: '50px' }} className="blue ">About me:</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                When I returned to the United States in 2017, after spending ten years teaching English at elite after school programs in Thailand and South Korea, I taught Kindergarten at a private elementary school in Pacific Palisades, CA. During this time, I began attending and volunteering at several machine learning, data science, and tech conferences in the Los Angeles area to explore my greater interest in the tech world. I also began teaching myself how to code in Python and Javascript.
                </div>
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                By 2021, I decided to transition from teaching to pursue a software development career due to my continued interest in technology, desire to work on things that have purpose and solve real problems, and developing stronger technical skills. Although I've left the classroom, I remain committed to applying my teaching skills to new environments while continuing to grow professionally.
                </div>
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                When I get a chance to relax, I like to golf around Los Angeles, watch movies, try new restaurants, and create math inspired art. This year, I'd like to create less with my iPad and work with large-sized traditional media again.
                </div>
              </div>
            </div>
          </div>
        </Parallax>


      <Parallax className="skills-features">
        <Icons />
      </Parallax>

    </div>
    <div className="footer">Footer. This code is open source.</div>

        </div>
  );
}

export default About;
