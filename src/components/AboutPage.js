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
                After obtaining a Bachelor of Arts degree in Art and a minor in Mathematics from the University of San Francisco in 2006, I spent ten years teaching English at elite after school programs in Thailand and South Korea. Aside from teaching, I developed curriculums, trained teachers, and established relationships with students, teachers, parents, and administrators. 
                </div>
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                Returning to the United States in 2017, I taught Kindergarten at a private elementary school in Pacific Palisades while attending several machine learning and data science conferences in the Los Angeles area. During this time, I began teaching myself how to code in Python and Javascript.
                </div>
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                In 2021, I decided to transition from teaching to pursue a career in technology because of my deep interest in technological advancement, a passion to design and create things that have purpose and solve real problems, and an eagerness to continuously learn new skills. Despite having left the classroom, I remain committed to applying my teaching skills to new environments while and growing professionally.
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
