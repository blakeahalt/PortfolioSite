import React from "react";

import '../App.css';
import { Parallax } from "react-parallax";
import { AwesomeButton } from "react-awesome-button";
import Icons from './CountryFeatures.jsx'


import image1 from "../assets/01.jpeg";
import image3 from "../assets/03.jpeg";
import image4 from "../assets/04.jpeg";
import WorldMap from "../assets/WorldMap_opacity.png"
import MobileMap from "../assets/MobileMap.jpg"


function CountryPage() {
  return (
    <div >
        <div className="container">
        <Parallax bgImage={WorldMap} 
          blur={{ min: -5, max: 5 }}
          bgImageClassName="opaque-image" 
          strength={300} 
          >
          <div style={{ height: 825 }}>
            <div className="boxs header">
              <h1 className="title-country">Country and Weather Application</h1>
              <h4 className="title-date">August 2022</h4>
              <h4 className="introduction">
                A full stack application that displays country information and a 3-day weather forecast.
              </h4>
              <div className="buttons">
                <a href="http://country.fly.dev/">
                  <AwesomeButton
                    size="medium"
                    type="secondary"
                  >
                    Demo
                  </AwesomeButton> 
                </a> 
                <div className="space"></div>
                <a href="https://github.com/blakeahalt/Full-Stack-Open-2022/tree/main/part2/countries">
                  <AwesomeButton
                    size="medium"
                    type="primary"
                  >
                    github
                  </AwesomeButton>
                </a> 
              </div>
            </div>
          </div>
        </Parallax>
        <Parallax  >
        <div style={{height: '1200px', marginTop:-400}}>
            <div className="boxs-title">
              <h2 className="blue ">What is it?</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                  A full stack app from the University of Helsinki's Full Stack Open 2022 course that fetches and displays information from the <a href="https://restcountries.com/" target="_blank" rel="noreferrer"><i>REST Countries</i></a> and <a href="https://openweathermap.org/" target="_blank" rel="noreferrer"><i>Open Weather Map</i></a> API's.
                </div>
              </div>
            </div>
            <div style={{marginTop:-30}} className="boxs-title">
              <h2 className="blue">What was it built with?</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                  This app was built with Javascript, React, and something something.  Node.js backedn with other stuff. It also uses API's from (here and here) 
              </div>
              </div>
            </div>
            <div className="boxs-title">
              <h2 className="blue">What did I learn?</h2>
              <div className="box-con">
                <div style={{textAlign: 'left', maxWidth: 750, color: 'black', marginTop:-15, marginBottom: '2em'}}>
                  I learned how to set state variables by sending async requests to an API with axios. Applying a filter to the state variable 'countries' users can quickly search for and see country data. Beyond the scope of the course requirements, I learned a lot about CSS styling by implementing responsive design as well as how to deploy on a host server.  
              </div>
              </div>
            </div>
          </div>
        </Parallax>


      <Parallax className="country-features">
        <Icons />
      </Parallax>

    </div>
    <div className="footer">Footer. This code is open source.</div>

        </div>
  );
}

export default CountryPage;
